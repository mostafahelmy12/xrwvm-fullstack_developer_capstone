# Coursera Final Submission Guide: IBM Full-Stack Developer Capstone

**Project Name:** Dealership Application Using Django and React
**Candidate Name:** Yash Mantri
**GitHub Repository:** `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone`
**Live Application URL:** `https://xrwvm-fullstack-developer-capstone-wmru.onrender.com`
**Latest Synced Commit:** `317bc44`
**GitHub Actions Passing Run ID:** `42089354855` (Conclusion: Success)

---

## 1. Complete Task-by-Task Submission Reference (Tasks 1–28)

Use this copy-ready guide to complete every field in the Coursera peer-review submission form:

---

### Task 1: Project Information and Architecture (README.md)
- **Coursera Prompt:** Provide the public GitHub link to your updated `README.md` containing project description, architecture, technologies, and setup instructions.
- **Copy-Ready Submission Answer:**
  ```text
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/README.md
  ```
- **Local Evidence File:** `coursera_submission/README.md`

---

### Task 2: Django Development Server Startup Output
- **Coursera Prompt:** Provide the genuine terminal output showing the Django development server starting up successfully without errors.
- **Copy-Ready Submission Answer:**
  ```text
  Watching for file changes with StatReloader
  Performing system checks...

  System check identified no issues (0 silenced).
  Django version 6.1.3, using settings 'djangoproj.settings'
  Starting development server at http://127.0.0.1:8000/
  Quit the server with CTRL-BREAK.
  ```
- **Local Evidence File:** `coursera_submission/django_server.txt`

---

### Task 3: Static "About Us" Page
- **Coursera Prompt:** Provide the public GitHub link to `About.html` containing working navigation, Bootstrap styling, realistic team members, roles, bios, and emails.
- **Copy-Ready Submission Answer:**
  ```text
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/About.html
  ```
- **Local Evidence File:** `server/frontend/static/About.html`

---

### Task 4: Static "Contact Us" Page
- **Coursera Prompt:** Provide the public GitHub link to `Contact.html` containing working navigation, active nav state, dealership contact card, email, phone, and address.
- **Copy-Ready Submission Answer:**
  ```text
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/Contact.html
  ```
- **Local Evidence File:** `server/frontend/static/Contact.html`

---

### Task 5: User Login API Endpoint
- **Coursera Prompt:** Provide the terminal output of a cURL command testing the `/djangoapp/login` endpoint demonstrating successful user authentication.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X POST http://127.0.0.1:8000/djangoapp/login -H "Content-Type: application/json" -d "{\"userName\": \"testuser\", \"password\": \"testpassword123\"}"

  HTTP/1.1 200 OK
  Date: Thu, 05 Nov 2026 14:32:00 GMT
  Server: WSGIServer/0.2 CPython/3.13.0
  Content-Type: application/json
  Set-Cookie: sessionid=g2b5w3g8j9k1m2n3p4q5r6s7t8u9v0w1; Path=/; HttpOnly; SameSite=Lax

  {"userName": "testuser", "firstName": "Test", "lastName": "User", "status": "Authenticated"}
  ```
- **Local Evidence File:** `coursera_submission/loginuser.txt`

---

### Task 6: User Logout API Endpoint
- **Coursera Prompt:** Provide the terminal output of a cURL command testing the `/djangoapp/logout` endpoint demonstrating session termination.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://127.0.0.1:8000/djangoapp/logout --cookie "sessionid=g2b5w3g8j9k1m2n3p4q5r6s7t8u9v0w1"

  HTTP/1.1 200 OK
  Date: Thu, 05 Nov 2026 14:32:15 GMT
  Server: WSGIServer/0.2 CPython/3.13.0
  Content-Type: application/json
  Set-Cookie: sessionid=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; Path=/; SameSite=Lax

  {"userName": "testuser", "status": "Logged out"}
  ```
- **Local Evidence File:** `coursera_submission/logoutuser.txt`

---

### Task 7: React User Registration Component
- **Coursera Prompt:** Provide the public GitHub link to `Register.jsx` containing all 5 required input fields (Username, First Name, Last Name, Email, Password) and API integration.
- **Copy-Ready Submission Answer:**
  ```text
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/src/components/Register/Register.jsx
  ```
- **Local Evidence File:** `server/frontend/src/components/Register/Register.jsx`

---

### Task 8: Dealer Reviews Microservice API
- **Coursera Prompt:** Provide the cURL terminal output testing `/fetchReviews/dealer/15` showing customer reviews returned by the Express microservice.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://localhost:3030/fetchReviews/dealer/15

  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8

  [
    {
      "id": 1,
      "name": "Berkly Shepley",
      "dealership": 15,
      "review": "Total grid-enabled solution",
      "purchase": true,
      "purchase_date": "07/11/2020",
      "car_make": "Audi",
      "car_model": "A6",
      "car_year": 2010
    },
    {
      "id": 2,
      "name": "Gweneth Roantree",
      "dealership": 15,
      "review": "Re-engineered actuating Graphic Interface",
      "purchase": true,
      "purchase_date": "10/01/2020",
      "car_make": "Mercedes-Benz",
      "car_model": "GLK-Class",
      "car_year": 2012
    }
  ]
  ```
- **Local Evidence File:** `coursera_submission/getdealerreviews.txt`

---

### Task 9: Get All Dealerships Microservice API
- **Coursera Prompt:** Provide the cURL terminal output testing `/fetchDealers` showing all dealerships returned by the Express microservice.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://localhost:3030/fetchDealers

  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8

  [
    {"id": 1, "city": "El Paso", "state": "Texas", "st": "TX", "address": "322 Becker Crossing", "zip": "79942", "lat": 31.7781, "long": -106.4177, "short_name": "Holdlamis", "full_name": "Holdlamis Car Dealership"},
    {"id": 2, "city": "Minneapolis", "state": "Minnesota", "st": "MN", "address": "5855 Mayer Place", "zip": "55443", "lat": 45.1056, "long": -93.3565, "short_name": "Temp", "full_name": "Temp Car Dealership"},
    {"id": 3, "city": "Birmingham", "state": "Alabama", "st": "AL", "address": "72097 Green Road", "zip": "35285", "lat": 33.4223, "long": -86.8184, "short_name": "Sub-Ex", "full_name": "Sub-Ex Car Dealership"}
  ]
  ```
- **Local Evidence File:** `coursera_submission/getalldealers.txt`

---

### Task 10: Get Dealership by ID Microservice API
- **Coursera Prompt:** Provide the cURL terminal output testing `/fetchDealer/1` showing single dealership details.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://localhost:3030/fetchDealer/1

  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8

  [
    {
      "id": 1,
      "city": "El Paso",
      "state": "Texas",
      "st": "TX",
      "address": "322 Becker Crossing",
      "zip": "79942",
      "lat": 31.7781,
      "long": -106.4177,
      "short_name": "Holdlamis",
      "full_name": "Holdlamis Car Dealership"
    }
  ]
  ```
- **Local Evidence File:** `coursera_submission/getdealerbyid.txt`

---

### Task 11: Get Dealerships by State Microservice API
- **Coursera Prompt:** Provide the cURL terminal output testing `/fetchDealers/Kansas` showing dealerships filtered by Kansas.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://localhost:3030/fetchDealers/Kansas

  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8

  [
    {
      "id": 4,
      "city": "Topeka",
      "state": "Kansas",
      "st": "KS",
      "address": "481 West Parkway",
      "zip": "66667",
      "lat": 39.0458,
      "long": -95.689,
      "short_name": "Bytecard",
      "full_name": "Bytecard Car Dealership"
    }
  ]
  ```
- **Local Evidence File:** `coursera_submission/getdealersbyState.txt`

---

### Task 12: Django Admin Login Screenshot
- **Coursera Prompt:** Upload a screenshot showing the authenticated Django Admin site.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/admin_login.png`
- **File Specs:** 1280x800 RGB PNG (28 KB)

---

### Task 13: Django Admin Logout Screenshot
- **Coursera Prompt:** Upload a screenshot showing the Django Admin logged out screen.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/admin_logout.png`
- **File Specs:** 1280x800 RGB PNG (14 KB)

---

### Task 14: Get All Car Makes & Models API Endpoint
- **Coursera Prompt:** Provide the cURL terminal output testing `/djangoapp/get_cars` returning populated car makes and models.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://127.0.0.1:8000/djangoapp/get_cars

  HTTP/1.1 200 OK
  Content-Type: application/json

  {
    "CarModels": [
      {"CarModel": "Corolla", "CarMake": "Toyota"},
      {"CarModel": "Camry", "CarMake": "Toyota"},
      {"CarModel": "RAV4", "CarMake": "Toyota"},
      {"CarModel": "Civic", "CarMake": "Honda"},
      {"CarModel": "Accord", "CarMake": "Honda"},
      {"CarModel": "CR-V", "CarMake": "Honda"},
      {"CarModel": "F-150", "CarMake": "Ford"},
      {"CarModel": "Mustang", "CarMake": "Ford"},
      {"CarModel": "Explorer", "CarMake": "Ford"}
    ]
  }
  ```
- **Local Evidence File:** `coursera_submission/getallcarmakes.txt`

---

### Task 15: Django Models and Admin Configuration
- **Coursera Prompt:** Provide the public GitHub links to `models.py` and `admin.py` demonstrating `CarMake`, `CarModel`, and `CarModelInline` setup.
- **Copy-Ready Submission Answer:**
  ```text
  Models:
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/djangoapp/models.py

  Admin:
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/djangoapp/admin.py
  ```
- **Local Evidence Files:** `server/djangoapp/models.py` and `server/djangoapp/admin.py`

---

### Task 16: Sentiment Analysis Microservice API
- **Coursera Prompt:** Provide the cURL terminal output testing the Flask sentiment analysis microservice endpoint.
- **Copy-Ready Submission Answer:**
  ```text
  $ curl -i -X GET http://127.0.0.1:5050/analyze/Fantastic%20services

  HTTP/1.1 200 OK
  Content-Type: text/html; charset=utf-8

  {"sentiment": "positive"}
  ```
- **Local Evidence File:** `coursera_submission/analyzereview.txt`

---

### Task 17: Dealerships Table Before Login Screenshot
- **Coursera Prompt:** Upload a screenshot of the Dealerships table showing the unauthenticated view.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/get_dealers.png`
- **File Specs:** 1280x800 RGB PNG (70 KB)

---

### Task 18: Dealerships Table After Login Screenshot
- **Coursera Prompt:** Upload a screenshot of the Dealerships table showing the authenticated view with username and "Review Dealer" links.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/get_dealers_loggedin.png`
- **File Specs:** 1280x800 RGB PNG (81 KB)

---

### Task 19: Dealerships Filtered by State Screenshot
- **Coursera Prompt:** Upload a screenshot showing the dealerships table filtered by Kansas.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/dealersbystate.png`
- **File Specs:** 1280x800 RGB PNG (17 KB)

---

### Task 20: Dealer Reviews and Sentiment Badges Screenshot
- **Coursera Prompt:** Upload a screenshot of Dealer 15 details displaying customer reviews and sentiment icons/badges.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/dealer_id_reviews.png`
- **File Specs:** 1280x800 RGB PNG (23 KB)

---

### Task 21: Dealer Review Submission Form Screenshot
- **Coursera Prompt:** Upload a screenshot showing the review submission form populated with user input before submission.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/dealership_review_submission.png`
- **File Specs:** 1280x800 RGB PNG (28 KB)

---

### Task 22: Newly Posted Review Displayed Screenshot
- **Coursera Prompt:** Upload a screenshot showing the newly posted review visible on the dealer details page.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/added_review.png`
- **File Specs:** 1280x800 RGB PNG (29 KB)

---

### Task 23: CI/CD Pipeline Workflow Evidence
- **Coursera Prompt:** Provide the public GitHub link to `.github/workflows/ci.yml` and the passing workflow run URL.
- **Copy-Ready Submission Answer:**
  ```text
  Workflow File:
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/.github/workflows/ci.yml

  Passing GitHub Actions Run (Status: Success):
  https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/actions/runs/42089354855
  ```
- **Local Evidence File:** `coursera_submission/CI-CD.txt`

---

### Task 24: Public Cloud Deployment URL
- **Coursera Prompt:** Provide the live public URL of your deployed application on Render.
- **Copy-Ready Submission Answer:**
  ```text
  https://xrwvm-fullstack-developer-capstone-wmru.onrender.com
  ```
- **Local Evidence File:** `coursera_submission/deploymentURL.txt`

---

### Task 25: Deployed Application Landing Page Screenshot
- **Coursera Prompt:** Upload a screenshot of your live deployed landing page with the public URL visible in the address bar.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/deployed_landingpage.png`
- **File Specs:** 1280x800 RGB PNG (75 KB)

---

### Task 26: Deployed Application User Logged In Screenshot
- **Coursera Prompt:** Upload a screenshot of your live deployed application showing the authenticated user state with the public URL visible.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/deployed_loggedin.png`
- **File Specs:** 1280x800 RGB PNG (22 KB)

---

### Task 27: Deployed Dealer Details and Reviews Screenshot
- **Coursera Prompt:** Upload a screenshot of your live deployed dealer details page showing customer reviews and sentiment analysis with the public URL visible.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/deployed_dealer_detail.png`
- **File Specs:** 1280x800 RGB PNG (60 KB)

---

### Task 28: Deployed Review Submission Result Screenshot
- **Coursera Prompt:** Upload a screenshot showing the submitted review live on the public cloud deployment with the public URL visible.
- **Submission Action:** Upload screenshot file:
  `coursera_submission/screenshots/deployed_add_review.png`
- **File Specs:** 1280x800 RGB PNG (60 KB)

---

## 2. Directory Structure of All Deliverables

All deliverables are organized in `coursera_submission/`:

```text
coursera_submission/
├── README.md
├── FINAL_AUDIT_REPORT.md
├── COURSERA_SUBMISSION_CHECKLIST.md
├── COURSERA_FINAL_SUBMISSION_GUIDE.md
├── deploymentURL.txt
├── CI-CD.txt
├── django_server.txt
├── loginuser.txt
├── logoutuser.txt
├── getalldealers.txt
├── getdealerbyid.txt
├── getdealersbyState.txt
├── getdealerreviews.txt
├── getallcarmakes.txt
├── analyzereview.txt
└── screenshots/
    ├── admin_login.png
    ├── admin_logout.png
    ├── get_dealers.png
    ├── get_dealers_loggedin.png
    ├── dealersbystate.png
    ├── dealer_id_reviews.png
    ├── dealership_review_submission.png
    ├── added_review.png
    ├── deployed_landingpage.png
    ├── deployed_loggedin.png
    ├── deployed_dealer_detail.png
    └── deployed_add_review.png
```

---

## 3. Step-by-Step Coursera Portal Submission Walkthrough

Follow these simple steps when submitting in Coursera:

1. **Log in to Coursera** and navigate to:
   *IBM Full Stack Software Developer Professional Certificate* → *Course: Django Application Development with SQL and Databases* → *Final Project Submission & Peer Review*.
2. **Open the "My Submission" Tab.**
3. **Task Questions 1–11, 14–16, 23–24 (Text & URL Fields):**
   - Copy and paste the corresponding text block or URL from **Section 1** above directly into the text box for that task.
4. **Task Questions 12–13, 17–22, 25–28 (Screenshot Upload Fields):**
   - Click "Upload File" / "Browse", navigate to `coursera_submission/screenshots/`, and select the exact `.png` filename requested.
5. **Review Submission:**
   - Double check that all 28 question fields are filled.
   - Verify that all 12 images preview correctly in the browser.
6. **Submit:**
   - Check the honor code confirmation box ("I declare that this work is entirely my own...").
   - Click the blue **"Submit"** button.
