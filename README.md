# 🎬 React Movie Discovery App

A sleek, responsive movie exploration web application built with **React.js**. This project demonstrates how to handle asynchronous data fetching, manage complex UI states, and implement a modern search interface.

![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 🚀 Live Demo

**[View Live Project](https://react-movie-practice-project.vercel.app/)**

---

## ✨ Features

- **Real-time Movie Search:** Instantly find movies from the TMDB database.
- **Dynamic Hero Section:** Showcases trending or featured content on the home page.
- **Detailed Movie Cards:** Displays posters, ratings, and release dates at a glance.
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop viewing.
- **Seamless Navigation:** Smooth transitions between search results and home views.

## 🛠️ Tech Stack

| Technology   | Purpose                               |
| :----------- | :------------------------------------ |
| **React**    | Component-based UI Architecture       |
| **CSS3**     | Custom styling and responsive design  |
| **TMDB API** | External movie data source            |
| **Vercel**   | High-performance hosting & deployment |

## 📦 Local Setup & Installation

Follow these steps to get a local copy up and running:

1. **Clone the repository**
```bash
   git clone (https://github.com/ferdaous-wahid/react-movie-practice-project.git)
```
2. **Install dependencies**

```bash
   npm install
```

3. **Get your API Key Sign up for an API key at The Movie Database (TMDB).**
4. **Set up Environment Variables Create a .env file in the root directory:**

```bash
   REACT_APP_TMDB_API_KEY=your_key_here
```

5. **Run the application**f

```bash
   npm start
```

**🧠 What I Learned**
**_Handling Asynchronous Data:_** Implementing useEffect to fetch data from a REST API without causing memory leaks or infinite loops.

***Conditional Rendering:*** Displaying loading spinners and "No Results Found" states to improve UX.

**_State Management:_** Using useState to manage search queries and API response data across components.
