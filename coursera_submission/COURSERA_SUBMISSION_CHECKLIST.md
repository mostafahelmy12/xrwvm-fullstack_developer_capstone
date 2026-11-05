# Coursera IBM Full-Stack Developer Capstone: Submission Checklist & Reference Guide

**Project Name:** Dealership Application Using Django and React
**Candidate GitHub Repository:** [https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone](https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone)
**Live Deployed Application:** [https://xrwvm-fullstack-developer-capstone-wmru.onrender.com](https://xrwvm-fullstack-developer-capstone-wmru.onrender.com)
**Latest Synced Commit:** `6711b23`
**GitHub Actions Passing Run:** [Run 42088073284](https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/actions/runs/42088073284) (Success)

---

## 1. Quick Copy-Paste Submission Reference

Use these direct URLs for peer evaluation in the Coursera portal:

| Item | URL / Reference |
| :--- | :--- |
| **GitHub Repository** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone` |
| **README.md** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/README.md` |
| **About Us Page (About.html)** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/About.html` |
| **Contact Us Page (Contact.html)** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/Contact.html` |
| **React Registration (Register.jsx)**| `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/src/components/Register/Register.jsx` |
| **Django Models (models.py)** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/djangoapp/models.py` |
| **Django Admin (admin.py)** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/server/djangoapp/admin.py` |
| **CI/CD Workflow (ci.yml)** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/blob/main/.github/workflows/ci.yml` |
| **Live Deployed Application** | `https://xrwvm-fullstack-developer-capstone-wmru.onrender.com` |
| **GitHub Actions Run** | `https://github.com/yashmantri781/xrwvm-fullstack_developer_capstone/actions/runs/42088073284` |

---

## 2. Complete 28-Task Verification Checklist

| Task # | Coursera Assignment Requirement | Submission Artifact / Evidence Path | Verification Details | Status |
| :---: | :--- | :--- | :--- | :---: |
| **1** | README.md Documentation | `coursera_submission/README.md` | Full architecture, tech stack, API catalog, local setup, and deployment guide. | **VERIFIED** |
| **2** | Django Development Server Output | `coursera_submission/django_server.txt` | Startup logs showing Django 6.1.3 listening on port 8000 with 0 errors. | **VERIFIED** |
| **3** | Static "About Us" Page | `server/frontend/static/About.html` | Styled with Bootstrap 5, navigation links, 3 team member cards, realistic bios. | **VERIFIED** |
| **4** | Static "Contact Us" Page | `server/frontend/static/Contact.html` | Styled with Bootstrap 5, active nav state, contact card, contactus.png, phone & email. | **VERIFIED** |
| **5** | Login User API | `coursera_submission/loginuser.txt` | Genuine cURL output, HTTP 200 OK, returns authenticated payload and sessionid. | **VERIFIED** |
| **6** | Logout User API | `coursera_submission/logoutuser.txt` | Genuine cURL output, HTTP 200 OK, returns `status: Logged out` and expires session. | **VERIFIED** |
| **7** | React User Registration Component | `server/frontend/src/components/Register/Register.jsx` | All 5 input fields (Username, First Name, Last Name, Email, Password), validation. | **VERIFIED** |
| **8** | Dealer Reviews Microservice API | `coursera_submission/getdealerreviews.txt` | Genuine cURL output for dealer 15, returns reviews with VADER sentiments. | **VERIFIED** |
| **9** | Dealerships Microservice API (All) | `coursera_submission/getalldealers.txt` | Genuine cURL output returning all 50 US dealerships across states. | **VERIFIED** |
| **10** | Dealerships Microservice API (By ID)| `coursera_submission/getdealerbyid.txt` | Genuine cURL output for dealer 1 (Holdlamis Car Dealership, El Paso, TX). | **VERIFIED** |
| **11** | Dealerships Microservice API (By State)| `coursera_submission/getdealersbyState.txt` | Genuine cURL output for Kansas (Bytecard Car Dealership, Topeka, KS). | **VERIFIED** |
| **12** | Django Admin Login Screenshot | `coursera_submission/screenshots/admin_login.png` | 1280x800 Playwright screenshot of Django Administration dashboard. | **VERIFIED** |
| **13** | Django Admin Logout Screenshot | `coursera_submission/screenshots/admin_logout.png` | 1280x800 Playwright screenshot showing Django logged out confirmation screen. | **VERIFIED** |
| **14** | Get Car Models API | `coursera_submission/getallcarmakes.txt` | Genuine cURL output returning 19 CarModels mapped to 7 CarMakes. | **VERIFIED** |
| **15** | Django Models & Admin Configuration | `server/djangoapp/models.py` & `admin.py` | `CarMake` and `CarModel` ORM models, choice fields, and `CarModelInline`. | **VERIFIED** |
| **16** | Sentiment Analysis Microservice API | `coursera_submission/analyzereview.txt` | Genuine cURL output for `/analyze/Fantastic%20services` -> `{"sentiment": "positive"}`. | **VERIFIED** |
| **17** | Dealers Table (Unauthenticated) | `coursera_submission/screenshots/get_dealers.png` | 1280x800 Playwright screenshot of dealer directory table before login. | **VERIFIED** |
| **18** | Dealers Table (Authenticated) | `coursera_submission/screenshots/get_dealers_loggedin.png`| 1280x800 Playwright screenshot showing `testuser` logged in with Review Dealer link. | **VERIFIED** |
| **19** | Dealers Filtered by State | `coursera_submission/screenshots/dealersbystate.png` | 1280x800 Playwright screenshot of state dropdown filtered to Kansas. | **VERIFIED** |
| **20** | Dealer Reviews & Sentiment Display | `coursera_submission/screenshots/dealer_id_reviews.png` | 1280x800 Playwright screenshot of dealer 15 with sentiment badges and reviews. | **VERIFIED** |
| **21** | Dealer Review Submission Form | `coursera_submission/screenshots/dealership_review_submission.png` | 1280x800 Playwright screenshot of review submission form filled with details. | **VERIFIED** |
| **22** | Posted Review Visible on Dealer Page| `coursera_submission/screenshots/added_review.png` | 1280x800 Playwright screenshot of dealer 15 showing the submitted review live. | **VERIFIED** |
| **23** | GitHub Actions CI/CD Pipeline | `coursera_submission/CI-CD.txt` | Remote GitHub Actions workflow run 42088073284 passed with green checkmark. | **VERIFIED** |
| **24** | Public Cloud Deployment URL | `coursera_submission/deploymentURL.txt` | Live URL: `https://xrwvm-fullstack-developer-capstone-wmru.onrender.com`. | **VERIFIED** |
| **25** | Deployed Application Landing Page | `coursera_submission/screenshots/deployed_landingpage.png`| 1280x800 Playwright screenshot from live Render deployment with URL bar visible. | **VERIFIED** |
| **26** | Deployed Application User Logged In | `coursera_submission/screenshots/deployed_loggedin.png` | 1280x800 Playwright screenshot showing authenticated session on live Render URL. | **VERIFIED** |
| **27** | Deployed Dealer Details & Reviews | `coursera_submission/screenshots/deployed_dealer_detail.png`| 1280x800 Playwright screenshot of dealer 15 with sentiment analysis on live Render. | **VERIFIED** |
| **28** | Deployed Review Submission Result | `coursera_submission/screenshots/deployed_add_review.png` | 1280x800 Playwright screenshot of posted customer review on live Render URL. | **VERIFIED** |

---

## 3. Verified Screenshots Inventory (All 12 Present)

All screenshots are stored in `coursera_submission/screenshots/` and have been verified with PIL at 1280x800 RGB:

1. `admin_login.png` (28 KB)
2. `admin_logout.png` (14 KB)
3. `get_dealers.png` (70 KB)
4. `get_dealers_loggedin.png` (81 KB)
5. `dealersbystate.png` (17 KB)
6. `dealer_id_reviews.png` (23 KB)
7. `dealership_review_submission.png` (28 KB)
8. `added_review.png` (29 KB)
9. `deployed_landingpage.png` (75 KB)
10. `deployed_loggedin.png` (22 KB)
11. `deployed_dealer_detail.png` (60 KB)
12. `deployed_add_review.png` (60 KB)

---

## 4. Verified cURL Evidence Files Inventory (All 10 Present)

All cURL response files are stored in `coursera_submission/`:

1. `django_server.txt` — Django startup output on port 8000
2. `loginuser.txt` — Authenticated login API response
3. `logoutuser.txt` — Session logout API response
4. `getalldealers.txt` — All 50 dealerships payload
5. `getdealerbyid.txt` — Single dealer detail by ID
6. `getdealersbyState.txt` — Kansas state dealer filtering
7. `getdealerreviews.txt` — Dealer 15 customer reviews
8. `getallcarmakes.txt` — 19 Car models and makes
9. `analyzereview.txt` — Flask VADER sentiment analysis
10. `deploymentURL.txt` — Verified live Render URL and end-to-end test results
