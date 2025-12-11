# GuruNetwork.in

**GuruNetwork.in** is a real-estate service platform built to help users navigate property transactions, submit inquiries, and access support from the Guru Network ecosystem.

This repository contains the codebase for the website along with backend automation powered by **Google Apps Script**, **Firestore**, and **Google Sheets**.

---

## 🌐 Live Website

👉 https://gurunetwork.in/

---

## 🚀 Features

### 🏠 Real-Estate Service Platform
- Clean and responsive UI for property transaction inquiries.
- Optimized for fast navigation and mobile-first experience.
- Integrated support sections for buyers, sellers, and channel partners.

### 📩 Form Submission → Firestore + Google Sheets Integration
A complete automated pipeline:

- The **frontend form** sends user data to your backend endpoint.
- A **Google Apps Script** receives the request.
- Apps Script interacts with **Google Firestore** through the Firestore REST API wrapper (**FirestoreApp library**).
- It also reads/writes data in **Google Sheets** using `SpreadsheetApp`.
- Before adding new entries, the script **checks Firestore** to avoid duplicates.
- New submissions are appended to the Sheet only when necessary.

This ensures a reliable, synced data flow for analytics and reporting.

---

## 🧩 Tech Stack

**Frontend:**  
- HTML, CSS, JavaScript  
- Responsive design principles  
- Form validation & structured data flow  

**Backend / Automation:**  
- Google Apps Script  
- Firestore REST API (FirestoreApp library)  
- Google Sheets (SpreadsheetService)  
- JSON-based request/response handling  

**Hosting:**  
- Hosted on a cloud/web hosting provider (edit to specify: e.g., cPanel, Netlify, Vercel)

---

## 📂 Project Structure

