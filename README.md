# 🦸‍♂️ Hero IO — App Store Platform

## 📌 Overview

Hero IO is a modern and responsive App Store web application where users can explore, search, and manage apps seamlessly. It provides a clean UI inspired by real-world app stores, allowing users to view app details, install apps, and manage their installed applications efficiently.

---

## 🚀 Live Links

* 🔗 Live Site: https://hero-io-nine-tau.vercel.app/
* 💻 GitHub Repo: https://github.com/TofaelislamFaruk01

---

## ✨ Features

### 🧱 Layout & Design

* Responsive design for mobile, tablet, and desktop
* Custom Header with navigation (`Home`, `Apps`, `Installation`)
* Active route indication
* Footer with custom design
* GitHub Contribution button

---

### 🏠 Home Page

* Hero banner with STORE buttons
* Stats section (3 cards)
* Top Apps section (8 apps in grid)
* “Show All” navigation to All Apps page

---

### 📱 All Apps Page

* Dynamic app listing from JSON data (20 apps)
* Live search functionality (case-insensitive)
* Real-time filtering by app title
* “No App Found” message when no results match

---

### 📊 App Details Page

* App information (image, title, company, stats)
* Install button with dynamic state:

  * Changes to **Installed**
  * Disabled after installation
* Success toast notification
* 📈 **Recharts integration** for dynamic review chart
* Two-paragraph structured app description

---

### 💾 Installation System (LocalStorage)

* Install apps and save to localStorage
* Prevent duplicate installations
* “My Installation” page:

  * Shows all installed apps
  * Uninstall functionality
  * Removes from UI + localStorage
  * Toast notifications for actions

---

### ⚡ Performance & UX

  * Page navigation
  * Search operations
* Smooth user experience

---

### ❌ Error Handling

* Custom 404 Error Page
* “App Not Found” message for invalid IDs

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 📊 Recharts (for charts)
* 🔁 React Router DOM
* 💾 LocalStorage API
* 🔔 React ToastIFY 

---

## 📂 Data Structure

App data is stored in a JSON file with the following structure:

```js
{
  image: string,
  title: string,
  companyName: string,
  id: number,
  description: string,
  size: number,
  reviews: number,
  ratingAvg: number,
  downloads: number,
  ratings: [
    { name: "1 star", count: number },
    { name: "2 star", count: number },
    { name: "3 star", count: number },
    { name: "4 star", count: number },
    { name: "5 star", count: number }
    ]
}
```

---

## 📦 Installation & Setup

```bash
npm install
npm run dev
```

---

## 🌐 Deployment

This project is deployed using:

* Vercel 

---


## 👨‍💻 Author

* GitHub: [TOFAEL ISLAM](https://github.com/TofaelislamFaruk01)

---
