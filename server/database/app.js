const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3030;

app.use(cors());
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json());

const reviewsPath = fs.existsSync(path.join(__dirname, 'data/reviews.json'))
  ? path.join(__dirname, 'data/reviews.json')
  : path.join(__dirname, 'reviews.json');
const dealershipsPath = fs.existsSync(path.join(__dirname, 'data/dealerships.json'))
  ? path.join(__dirname, 'data/dealerships.json')
  : path.join(__dirname, 'dealerships.json');

const reviews_data = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
const dealerships_data = JSON.parse(fs.readFileSync(dealershipsPath, 'utf8'));

let localReviews = [...(reviews_data['reviews'] || [])];
let localDealerships = [...(dealerships_data['dealerships'] || [])];

let isMongoConnected = false;
const Reviews = require('./review');
const Dealerships = require('./dealership');

mongoose.connect("mongodb://mongo_db:27017/", {
  dbName: 'dealershipsDB',
  serverSelectionTimeoutMS: 2000
}).then(() => {
  isMongoConnected = true;
  console.log("Connected to MongoDB successfully");
  Reviews.deleteMany({}).then(() => {
    Reviews.insertMany(reviews_data['reviews']);
  });
  Dealerships.deleteMany({}).then(() => {
    Dealerships.insertMany(dealerships_data['dealerships']);
  });
}).catch(err => {
  isMongoConnected = false;
  console.log("MongoDB not reachable, using in-memory dataset fallback:", err.message);
});

// Express route to home
app.get('/', async (req, res) => {
  res.send("Welcome to the Mongoose API");
});

// Express route to fetch all reviews
app.get('/fetchReviews', async (req, res) => {
  try {
    if (isMongoConnected) {
      const documents = await Reviews.find();
      return res.json(documents);
    }
    res.json(localReviews);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch reviews by a particular dealer
app.get('/fetchReviews/dealer/:id', async (req, res) => {
  try {
    const dealerId = parseInt(req.params.id);
    if (isMongoConnected) {
      const documents = await Reviews.find({ dealership: req.params.id });
      return res.json(documents);
    }
    const filtered = localReviews.filter(r => r.dealership == dealerId || r.dealership == req.params.id);
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch all dealerships
app.get('/fetchDealers', async (req, res) => {
  try {
    if (isMongoConnected) {
      const documents = await Dealerships.find();
      return res.json(documents);
    }
    res.json(localDealerships);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch Dealers by a particular state
app.get('/fetchDealers/:state', async (req, res) => {
  try {
    const stateParam = req.params.state.toLowerCase();
    if (isMongoConnected) {
      const documents = await Dealerships.find({
        state: { $regex: new RegExp(`^${req.params.state}$`, 'i') }
      });
      return res.json(documents);
    }
    const filtered = localDealerships.filter(d =>
      d.state && d.state.toLowerCase() === stateParam
    );
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch dealer by a particular id
app.get('/fetchDealer/:id', async (req, res) => {
  try {
    const dealerId = parseInt(req.params.id);
    if (isMongoConnected) {
      const documents = await Dealerships.find({ id: dealerId });
      return res.json(documents);
    }
    const filtered = localDealerships.filter(d => d.id === dealerId);
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to insert review
app.post('/insert_review', express.raw({ type: '*/*' }), async (req, res) => {
  try {
    let data;
    if (typeof req.body === 'string' || Buffer.isBuffer(req.body)) {
      data = JSON.parse(req.body.toString());
    } else {
      data = req.body;
    }

    let new_id = 1;
    if (isMongoConnected) {
      const documents = await Reviews.find().sort({ id: -1 });
      if (documents.length > 0) {
        new_id = documents[0]['id'] + 1;
      }
      const review = new Reviews({
        "id": new_id,
        "name": data['name'],
        "dealership": data['dealership'],
        "review": data['review'],
        "purchase": data['purchase'],
        "purchase_date": data['purchase_date'],
        "car_make": data['car_make'],
        "car_model": data['car_model'],
        "car_year": data['car_year'],
      });
      const savedReview = await review.save();
      return res.json(savedReview);
    }

    if (localReviews.length > 0) {
      const maxId = Math.max(...localReviews.map(r => r.id || 0));
      new_id = maxId + 1;
    }

    const newReview = {
      "id": new_id,
      "name": data['name'],
      "dealership": data['dealership'],
      "review": data['review'],
      "purchase": data['purchase'],
      "purchase_date": data['purchase_date'],
      "car_make": data['car_make'],
      "car_model": data['car_model'],
      "car_year": data['car_year'],
    };
    localReviews.push(newReview);
    res.json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error inserting review' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
