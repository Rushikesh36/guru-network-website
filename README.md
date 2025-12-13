# GuruNetwork

GuruNetwork is a real-estate services platform built with a Vue.js frontend, Firebase Hosting, and a modular Google Apps Script backend.  
The system handles user inquiries, stores data in Firestore, synchronizes it with Google Sheets, and maintains optimized scheduled updates using time-based triggers.

This repository contains both the **Vue.js frontend** and the **Apps Script backend modules**, organized cleanly for maintenance and scale.

---

## 🌐 Live Website
https://gurunetwork.in/

---

## 🚀 Tech Stack

### **Frontend**
- Vue.js
- Vue Router (if used)
- Axios / Fetch API for backend communication
- Responsive layout with custom CSS or utility classes

### **Backend (Apps Script)**
- Google Apps Script Web App endpoint
- Firestore integration using **FirestoreApp REST API wrapper**
- Google Sheets updates using `SpreadsheetApp`
- Modular `.gs` files for different business categories  
  (`broker.gs`, `buyer.gs`, `developer.gs`, `lawyer.gs`, etc.)
- Time-based triggers (cron job equivalent)

### **Hosting**
- Firebase Hosting for frontend deployment
- Apps Script deployment for backend services

---

## 🧩 Features

### 🏠 Real-Estate Inquiry System
- Vue-based dynamic forms for multiple user categories (buyer, seller, broker, lawyer, developer, finance, etc.)
- Clean UI with fast page rendering
- API service layer for structured backend communication

---

## 🔁 Automated Backend Workflow  
A complete automated data pipeline ensures all user submissions are stored, synced, and updated efficiently.

### **1. Frontend → Backend (Apps Script)**
- The Vue app sends form data to a deployed Google Apps Script Web App.
- Apps Script validates data and routes it to category-specific handlers  
  (`buyer.gs`, `seller.gs`, `broker.gs`, etc.).

### **2. Firestore Integration**
Using the FirestoreApp REST API wrapper, Apps Script:
- Writes new documents  
- Fetches existing ones  
- Prevents duplication  
- Structures data by category

### **3. Google Sheets Sync**
- Apps Script updates a centralized Google Sheet for reporting, analytics, and dashboarding.
- Uses `SpreadsheetApp` to append or update data.

### **4. Cron Job (Every 10 Minutes)**
A scheduled trigger keeps Sheets synced with Firestore.

---

## ⚡ Performance Optimization

Originally, the sync script rewrote **the entire dataset** on every cron run — causing redundancy, slow execution, and unnecessary resource usage.

### ✔ Optimized Solution Implemented
- Only the **latest 100 Firestore records** are fetched during each sync.
- Older rows remain untouched.
- No duplicates are created.
- Execution time is significantly reduced.

**Result:**  
A fast, scalable, cost-efficient system that handles growing data effortlessly.

---

## 🏗 Architecture Overview
```mermaid
flowchart TB
  U[Users] --> FE[Frontend Form Vue.js]
  FE -->|Submit form data| FS[(Firestore Database)]

  FS -->|Read data via Sheets API| GS[(Google Sheets)]

  TRIG[Scheduled Cron Job<br>Every 10 minutes] --> SYNC[Optimized Sync Logic]

  SYNC -->|Fetch only new records| FS
  SYNC -->|Append new rows only| GS

  %% Styles with black text
  classDef user fill:#f2f2f2,stroke:#333,stroke-width:1px,color:#000
  classDef frontend fill:#cce5ff,stroke:#004085,stroke-width:2px,color:#000
  classDef data fill:#fff3cd,stroke:#856404,stroke-width:2px,color:#000
  classDef automation fill:#d4edda,stroke:#155724,stroke-width:2px,color:#000

  %% Apply styles
  class U user
  class FE frontend
  class FS,GS data
  class TRIG,SYNC automation


`````
---

## 📂 Project Structure

```plaintext
gurunetwork/
│
├── appscripts/
│   ├── broker.gs        # Backend logic for brokers
│   ├── buyer.gs         # Backend logic for buyers
│   ├── developer.gs     # Backend for developers
│   ├── finance.gs       # Backend for finance category
│   ├── general.gs       # Shared logic and helpers
│   ├── lawyer.gs        # Backend for lawyers
│   ├── parchi.gs        # Backend for parchi-related workflows
│   └── seller.gs        # Backend logic for sellers
│
├── public/              # Static assets served by Vue
│
├── src/
│   ├── components/      # UI components
│   ├── views/           # Page views
│   ├── router/          # App routing (if enabled)
│   ├── assets/          # Images, icons, etc.
│   ├── services/
│   │   └── api.js       # Calls to Apps Script backend
│   └── App.vue
│
├── firebase.json        # Firebase Hosting configuration
├── .firebaserc
├── babel.config.js
├── jsconfig.json
├── package.json
├── package-lock.json
└── vue.config.js


