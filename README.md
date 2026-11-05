# Dealership Application Using Django and React

**Repository Name:** `xrwvm-fullstack_developer_capstone`
**GitHub Origin:** `https://github.com/ibm-developer-skills-network/xrwvm-fullstack_developer_capstone.git`
**Student GitHub Fork:** `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone`
**Project Name:** Dealership Application Using Django and React

---

## Project Overview

The **Dealership Application** is a full-stack, cloud-native web platform designed for exploring nationwide automotive dealerships, browsing certified vehicle models, reading verified customer reviews with real-time sentiment analysis, and submitting new reviews.

The application is built using a modern decoupled microservices architecture:
- **Django Backend**: Serves as the central API gateway, authentication service, and relational vehicle database manager (managing Car Makes and Car Models).
- **React Frontend**: Single-page application providing rich dynamic user experiences including dynamic dealer filtering by state, review panels, sentiment badges, and modal review submission.
- **Node.js Express & MongoDB Microservice**: High-throughput document service managing dealership geographical data and review documents.
- **Flask & NLTK Microservice**: AI-powered natural language processing service performing automated sentiment analysis (positive, neutral, negative) on customer reviews.

---

## Technology Stack

- **Backend Framework:** Django 6.1 / Python 3.13
- **Frontend Framework:** React 18, React Router v6, Bootstrap 5, HTML5, CSS3
- **Database & Microservices:**
  - Relational Database: SQLite / PostgreSQL (Django ORM for Car Makes and Models)
  - Document Store Microservice: Node.js, Express, Mongoose / MongoDB (dealerships and reviews)
  - AI Sentiment Microservice: Python, Flask, NLTK VADER (`SentimentIntensityAnalyzer`)
- **DevOps & Testing:** Docker, Docker Compose, GitHub Actions (CI/CD), Playwright

---

## Project Architecture

```
                                  +-----------------------+
                                  |     Client Browser    |
                                  +-----------+-----------+
                                              |
                   +--------------------------+--------------------------+
                   | (HTML, CSS, JS, React Pages)                         | (API Requests)
                   v                                                     v
        +----------------------+                              +----------------------+
        | React SPA / Static   |                              |  Django Web Server   |
        | Pages (Port 8000)    |                              |  (manage.py :8000)   |
        +----------------------+                              +----------+-----------+
                                                                         |
                                              +--------------------------+--------------------------+
                                              |                                                     |
                                              v                                                     v
                                  +----------------------+                              +----------------------+
                                  | Node.js Express API  |                              | Flask NLTK Analyzer  |
                                  | Dealerships & Reviews|                              | Sentiment Engine     |
                                  | (Port 3030)          |                              | (Port 5050)          |
                                  +----------------------+                              +----------------------+
```

---

## Directory Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI/CD pipeline
├── coursera_submission/         # Required submission evidence & artifacts
│   ├── README.md
│   ├── django_server.txt        # Verified Django server startup output
│   ├── loginuser.txt            # Real cURL login verification
│   ├── logoutuser.txt           # Real cURL logout verification
│   ├── getdealerreviews.txt     # Dealer reviews with sentiment
│   ├── getalldealers.txt        # All dealerships query
│   ├── getdealerbyid.txt        # Single dealership query
│   ├── getdealersbyState.txt    # Kansas dealerships query
│   ├── getallcarmakes.txt       # Car makes and models query
│   ├── analyzereview.txt        # Sentiment analysis verification
│   ├── CI-CD.txt                # Automated workflow report
│   ├── deploymentURL.txt        # Cloud deployment record
│   └── screenshots/             # 8 verified browser screenshots
│       ├── admin_login.png
│       ├── admin_logout.png
│       ├── get_dealers.png
│       ├── get_dealers_loggedin.png
│       ├── dealersbystate.png
│       ├── dealer_id_reviews.png
│       ├── dealership_review_submission.png
│       └── added_review.png
├── server/
│   ├── database/                # Express & Mongo microservice (port 3030)
│   │   ├── app.js
│   │   ├── dealership.js
│   │   ├── review.js
│   │   └── data/
│   ├── djangoapp/               # Django core application
│   │   ├── models.py            # CarMake & CarModel models
│   │   ├── admin.py             # Admin site registration
│   │   ├── views.py             # API endpoints and views
│   │   ├── urls.py              # Application URL routing
│   │   ├── restapis.py          # Microservice HTTP integrations
│   │   ├── populate.py          # Database seeding script
│   │   └── microservices/       # Flask NLTK microservice (port 5050)
│   ├── djangoproj/              # Django project settings & root URLs
│   ├── frontend/                # React application source code
│   │   ├── src/components/
│   │   │   ├── Header/
│   │   │   ├── Login/
│   │   │   ├── Register/        # 5-field registration component
│   │   │   └── Dealers/         # Dealer lists, detail, post review
│   │   └── static/              # Static pages (About.html, Contact.html)
│   ├── manage.py
│   └── requirements.txt
```

---

## Installation and Setup

### 1. Prerequisites
- Python 3.10+ (Python 3.13 tested)
- Node.js 18+ and npm
- Git

### 2. Clone Repository
```bash
git clone https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone.git
cd xrwvm-fullstack_developer_capstone
```

### 3. Python Environment Setup
```bash
# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Windows:
.\.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# Install Python requirements
pip install -r server/requirements.txt flask nltk playwright
python -c "import nltk; nltk.download('vader_lexicon')"
```

### 4. Database Microservice Setup
```bash
cd server/database
npm install
node app.js
# Runs on http://localhost:3030
```

### 5. Sentiment Analyzer Microservice Setup
```bash
cd server/djangoapp/microservices
python app.py
# Runs on http://localhost:5050
```

### 6. React Frontend Build
```bash
cd server/frontend
npm install --legacy-peer-deps
npm run build
```

### 7. Django Backend Setup
```bash
cd server
python manage.py makemigrations djangoapp
python manage.py migrate
python -c "import django; django.setup(); from djangoapp.populate import initiate; initiate()"
python manage.py runserver 8000
# Runs on http://localhost:8000
```

---

## API Documentation

### Authentication Endpoints
- `POST /djangoapp/login`: Authenticates user credentials (`userName`, `password`). Returns session cookie and user details.
- `GET /djangoapp/logout`: Terminates the current authenticated session.
- `POST /djangoapp/register`: Registers a new user with 5 required fields (`userName`, `firstName`, `lastName`, `email`, `password`).

### Dealership & Review Endpoints
- `GET /djangoapp/get_dealers`: Returns all nationwide dealerships.
- `GET /djangoapp/get_dealers/<state>`: Returns dealerships filtered by US state (e.g. `Kansas`).
- `GET /djangoapp/dealer/<id>`: Returns full profile for a specific dealership by numerical ID.
- `GET /djangoapp/reviews/dealer/<id>`: Retrieves customer reviews for a dealership, enriched with automated sentiment classifications.
- `POST /djangoapp/add_review`: Submits a verified customer vehicle review.

### Vehicle Catalog Endpoints
- `GET /djangoapp/get_cars`: Returns all available car makes and their associated models.

### Microservice Endpoints
- `GET http://localhost:5050/analyze/<text>`: Analyzes text and returns `{"sentiment": "positive"|"neutral"|"negative"}`.
- `GET http://localhost:3030/fetchDealers`: Direct endpoint for dealership documents.
- `GET http://localhost:3030/fetchReviews/dealer/:id`: Direct endpoint for reviews documents.

---

## Running Automated CI/CD Tests

```bash
# System check
python server/manage.py check

# Database migration verification
python server/manage.py migrate --check

# Django unit tests
python server/manage.py test server/djangoapp

# Frontend test & build
cd server/frontend && npm run build
```

---

## Deployment Information

The application is structured for production deployment with `gunicorn`, static asset serving via `whitenoise`, and cloud containerization via Docker / IBM Cloud Code Engine or Render:

1. **Dockerized Microservices:** `server/database/Dockerfile` and `server/djangoapp/microservices/Dockerfile`.
2. **Web Production Server:** `gunicorn djangoproj.wsgi:application --bind 0.0.0.0:8000`.
3. **Environment Configuration:** Set `backend_url` and `sentiment_analyzer_url` in `.env` to the public microservice domain URLs.
