# 🌍 Travel Journal 2025

A  minimal travel journal web app built with **React**, showcasing my destinations with images, details, and links to Google Maps.

---

## 🧰 Tech Stack

- **React.js** — Component-based UI framework  
- **CSS3** — Custom styling for layout and design  
- **@media Queries** — Used for full mobile responsiveness  
- **JavaScript (ES6+)** — Logic and interactivity  

---

## 💡 Features

- Clean and responsive layout for desktop & mobile  
- Reusable React components for each travel entry  
- Google Maps link integration for each location  
- Fixed navigation bar with smooth design  

---

## 📱 Responsiveness

Responsive behavior is achieved using CSS media queries:

```css
@media (max-width: 768px) {
  /* Adjust layout for mobile view */
  article.journal-entry {
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    width: 90%;
    height: auto;
  }
}
