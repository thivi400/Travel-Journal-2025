# 🌍 Travel Journal 2025

A  minimal travel journal web app built with **React**, showcasing my destinations with images, details, and links to Google Maps.

## Live Preview   
https://mytraveljournal2025.netlify.app/



## 🧰 Tech Stack

- **React.js** — Component-based UI framework  
- **CSS3** — Custom styling for layout and design  
- **@media Queries** — Used for full mobile responsiveness  
- **JavaScript (ES6+)** — Logic and interactivity  


## 💡 Features

- Clean and responsive layout for desktop & mobile  
- Reusable React components for each travel entry  
- Google Maps link integration for each location  
- Fixed navigation bar   


## 📱 Responsiveness

Responsive behavior is achieved using CSS media queries:

```css
@media (max-width: 768px) {
  article.journal-entry{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mobile-h2{
    display: block ;
    text-align: center;
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 19px;
  }
  .content>h5{
    padding-top: 10px;
  }
  .content>h2{
    display: none;
  }
  .container p{
    display: -webkit-box;
    /* -webkit-line-clamp: 3;      number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```
