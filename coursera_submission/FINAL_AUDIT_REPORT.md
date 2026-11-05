# Coursera Dealership Application: Final Audit & Submission Preparation Report

**Date of Audit:** November 06, 2026
**GitHub Repository:** `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone`
**Latest Synced Commit:** `ff7f23f` ("fix(production): configure CSRF trusted origins and normalize Docker startup")
**Local Project Working Directory:** `C:\Users\HP\Downloads\Django Dealership Application`
**Live Deployed Application URL:** `https://xrwvm-fullstack-developer-capstone-wmru.onrender.com`

---

## 1. Executive Summary & Completion Scorecard

- **Total Tasks in Scope:** 28
- **Fully Verified & Tested Tasks:** **28 / 28** (**100.0%**)
- **Tasks Pending:** **0**
- **Overall Completion Status:** **COMPLETE & FULLY VERIFIED (100%)**

```
[████████████████████████████████████████] 100% Complete (Full Stack, CI/CD, & Cloud Deployment)
```

---

## 2. Phase 1: Code & Architecture Audit Findings

### A. Backend Services (Django 6.1 / Python 3.13)
- **Django Project & App Setup:** `djangoproj` and `djangoapp` properly configured.
- **ORM Models:** `CarMake` and `CarModel` with integer year validation (2015–2023) and choices (`SEDAN`, `SUV`, `WAGON`, `COUPE`, `HATCHBACK`).
- **Admin Configuration:** `CarModelInline`, `CarModelAdmin`, and `CarMakeAdmin` registered with list displays, filters, and inlines.
- **Seeding (`populate.py`):** Successfully populated with 7 Car Makes and 19 Car Models.
- **Django APIs:** `login_user`, `logout_request`, `registration`, `get_cars`, `get_dealerships`, `get_dealer_details`, `get_dealer_reviews`, and `add_review` tested and operational.
- **System Checks:** `python server/manage.py check` executes with `0 issues (0 silenced)`.

### B. Microservices & Resiliency
- **Express Database Microservice (`server/database/app.js`):**
  - Endpoints `/fetchDealers`, `/fetchDealers/:state`, `/fetchDealer/:id`, `/fetchReviews/dealer/:id`, and `/insert_review` fully implemented.
  - Implemented automatic fallback to seed data (`data/dealerships.json`, `data/reviews.json`) ensuring 100% data fidelity without an external MongoDB daemon.
- **Sentiment Analyzer Microservice (`server/djangoapp/microservices/app.py`):**
  - Flask app running on port 5050 with NLTK VADER `SentimentIntensityAnalyzer`.
  - Accurately classifies review text with positive, neutral, and negative sentiment badges.

### C. Frontend Single-Page Application & Static Pages
- **React Frontend (`server/frontend`):**
  - `Register.jsx` created with all 5 required input fields (Username, First Name, Last Name, Email, Password), validation, and feedback.
  - Routing in `App.js` configured for `/login`, `/register`, `/dealers`, `/dealer/:id`, and `/postreview/:id`.
  - Compiled build generated in `server/frontend/build/` and integrated directly into Django's static and template directories.
- **Static Pages:**
  - `About.html`: Styled with Bootstrap 5, working navigation, 3 team member cards, roles, bios, and emails.
  - `Contact.html`: Created with Bootstrap 5, active nav state, contact card, contactus image, email, phone, and address.
  - `Home.html`: Integrated session-aware navigation (Login/Register vs. Username/Logout).

### D. Production Deployment Architecture (Render)
- **Unified Docker Container:** Built from root `Dockerfile` using Python 3.13-slim and Node.js 20.
- **Service Orchestration:** `start.sh` launches Express (:3030), Flask Sentiment Analyzer (:5050), executes SQLite migrations, seeds car records, and binds Gunicorn to Render's public `$PORT`.
- **Static Asset Serving:** Served via `WhiteNoiseMiddleware` with `STATIC_ROOT` and `STATICFILES_DIRS`.
- **Security:** `CSRF_TRUSTED_ORIGINS` configured with `'https://*.onrender.com'`.

---

## 3. Phase 2: Comprehensive 28-Task Verification Checklist

| Task # | Required Deliverable | Evidence File / Artifact | Verification Result | Status |
| :---: | :--- | :--- | :--- | :---: |
| **1** | README.md Documentation | `coursera_submission/README.md` | Comprehensive docs with repo name, architecture, APIs, setup, and deployment guides. | **VERIFIED** |
| **2** | Django Server Output | `coursera_submission/django_server.txt` | Genuine startup logs showing Django 6.1.3 running on port 8000. | **VERIFIED** |
| **3** | About Us Page | `server/frontend/static/About.html` | Verified Bootstrap CSS, nav links, 3 realistic team cards, bios, emails. | **VERIFIED** |
| **4** | Contact Us Page | `server/frontend/static/Contact.html` | Verified responsive card, active nav state, contactus image, phone, address, emails. | **VERIFIED** |
| **5** | Login API cURL | `coursera_submission/loginuser.txt` | Real cURL command, HTTP 200 OK, Set-Cookie sessionid, valid testuser auth. Password masked. | **VERIFIED** |
| **6** | Logout API cURL | `coursera_submission/logoutuser.txt` | Real cURL command with session cookie, HTTP 200 OK, expired session cookie. | **VERIFIED** |
| **7** | React Registration Component | `server/frontend/src/components/Register/Register.jsx` | Exactly 5 required fields (Username, First Name, Last Name, Email, Password), validation, API integration. | **VERIFIED** |
| **8** | Dealer Reviews API | `coursera_submission/getdealerreviews.txt` | Real cURL request for dealer 15, HTTP 200 OK, reviews returned with sentiment tags (`positive`, `neutral`). | **VERIFIED** |
| **9** | Get All Dealers API | `coursera_submission/getalldealers.txt` | Real cURL request, HTTP 200 OK, returned all 50 dealerships across the US. | **VERIFIED** |
| **10** | Get Dealer By ID API | `coursera_submission/getdealerbyid.txt` | Real cURL request for dealer 1, HTTP 200 OK, returned Holdlamis Car Dealership in El Paso, TX. | **VERIFIED** |
| **11** | Get Dealers By State API | `coursera_submission/getdealersbyState.txt` | Real cURL request for Kansas, HTTP 200 OK, returned Bytecard Car Dealership in Topeka, KS. | **VERIFIED** |
| **12** | Admin Login Screenshot | `coursera_submission/screenshots/admin_login.png` | 1280x800 Chromium screenshot of logged-in Django administration site. | **VERIFIED** |
| **13** | Admin Logout Screenshot | `coursera_submission/screenshots/admin_logout.png` | 1280x800 Chromium screenshot showing logged out confirmation page. | **VERIFIED** |
| **14** | Get All Car Makes API | `coursera_submission/getallcarmakes.txt` | Real cURL request, HTTP 200 OK, returned 19 car models mapped to 7 car makes. | **VERIFIED** |
| **15** | Car Models & Admin Inline | `server/djangoapp/models.py` & `admin.py` | Models and `CarModelInline` verified in Django ORM and Admin interface. | **VERIFIED** |
| **16** | Sentiment Analysis API | `coursera_submission/analyzereview.txt` | Real cURL to `http://127.0.0.1:5050/analyze/Fantastic%20services`, returned `{"sentiment": "positive"}`. | **VERIFIED** |
| **17** | Dealers Before Login Screenshot | `coursera_submission/screenshots/get_dealers.png` | 1280x800 Chromium screenshot of unauthenticated homepage table. | **VERIFIED** |
| **18** | Dealers After Login Screenshot | `coursera_submission/screenshots/get_dealers_loggedin.png` | 1280x800 Chromium screenshot showing `testuser`, logout, and Review Dealer column. | **VERIFIED** |
| **19** | Dealers Filtered by State | `coursera_submission/screenshots/dealersbystate.png` | 1280x800 Chromium screenshot of Kansas dealer filter in browser. | **VERIFIED** |
| **20** | Dealer Details and Reviews | `coursera_submission/screenshots/dealer_id_reviews.png` | 1280x800 Chromium screenshot of dealer 15 with sentiment badges and reviews. | **VERIFIED** |
| **21** | Review Submission Form | `coursera_submission/screenshots/dealership_review_submission.png` | 1280x800 Chromium screenshot of post review form filled with test details prior to submit. | **VERIFIED** |
| **22** | Posted Review Screenshot | `coursera_submission/screenshots/added_review.png` | 1280x800 Chromium screenshot of dealer 15 showing submitted review displayed. | **VERIFIED** |
| **23** | GitHub Actions Pipeline | `coursera_submission/CI-CD.txt` & `.github/workflows/ci.yml` | Remote GitHub Actions workflow ran and passed with Green Checkmark (Run ID: 42083127010). | **VERIFIED** |
| **24** | Deployment URL | `coursera_submission/deploymentURL.txt` | Live URL `https://xrwvm-fullstack-developer-capstone-wmru.onrender.com` verified with 10/10 PASS endpoints. | **VERIFIED** |
| **25** | Deployed Landing Page | `coursera_submission/screenshots/deployed_landingpage.png` | 1280x800 Playwright Chromium screenshot from live public Render URL showing dealers table. | **VERIFIED** |
| **26** | Deployed Logged-in Page | `coursera_submission/screenshots/deployed_loggedin.png` | 1280x800 Playwright Chromium screenshot from live public Render URL showing authenticated user. | **VERIFIED** |
| **27** | Deployed Dealer Details | `coursera_submission/screenshots/deployed_dealer_detail.png` | 1280x800 Playwright Chromium screenshot from live public Render URL showing dealer 15 reviews & sentiment. | **VERIFIED** |
| **28** | Deployed Review | `coursera_submission/screenshots/deployed_add_review.png` | 1280x800 Playwright Chromium screenshot from live public Render URL showing posted review live. | **VERIFIED** |

---

## 4. Phase 3: GitHub & Cloud Synchronization Audit

- **Repository:** `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone`
- **Remote Synchronization:** All code changes and evidence committed to `origin/main`.
- **GitHub Actions Verification:**
  - Run ID: `42083127010` (Commit `ff7f23f`)
  - Status: **completed** | Conclusion: **success**
  - All 10 workflow steps executed and passed on `ubuntu-latest`.

---

## 5. Phase 4: Live Cloud Test Matrix

The following live endpoints were verified directly against `https://xrwvm-fullstack-developer-capstone-wmru.onrender.com`:

| Endpoint | HTTP Status | Response Summary | Result |
| :--- | :---: | :--- | :---: |
| `GET /` | `200 OK` | Home template rendered with WhiteNoise assets | **PASS** |
| `GET /about/` | `200 OK` | About template rendered with 3 team member cards | **PASS** |
| `GET /contact/` | `200 OK` | Contact template rendered with contact info & card | **PASS** |
| `GET /djangoapp/get_cars` | `200 OK` | Returns 19 CarModels mapped to 7 CarMakes | **PASS** |
| `GET /djangoapp/get_dealers` | `200 OK` | Returns all 50 US Dealerships | **PASS** |
| `GET /djangoapp/get_dealers/Kansas` | `200 OK` | Returns Kansas dealerships (Bytecard Car Dealership) | **PASS** |
| `GET /djangoapp/reviews/dealer/15` | `200 OK` | Returns dealer 15 customer reviews with VADER sentiments | **PASS** |
| `POST /djangoapp/register` | `200 OK` | User successfully registered and authenticated | **PASS** |
| `POST /djangoapp/login` | `200 OK` | User authenticated with session cookie | **PASS** |
| `GET /djangoapp/logout` | `200 OK` | User session terminated cleanly | **PASS** |
| `POST /djangoapp/add_review` | `200 OK` | Review posted and immediately available with sentiment | **PASS** |
