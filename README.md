
# 🍰 Ajoke’s Cake Palace – React Bakery Menu App

**Ajoke’s Cake Palace** is a simple yet elegant **React.js bakery app** that displays a curated menu of handcrafted cakes.  
The app dynamically renders cake items, shows availability, and updates content based on business hours — providing a real-world simulation of a modern bakery website.

---

## 🌟 Project Overview

This React app is designed to demonstrate **component composition**, **conditional rendering**, and **dynamic UI logic**.  
It includes a **Header**, **Menu**, and **Footer** section — each built as independent components — following clean React best practices.

When the bakery is open (10 AM – 8 PM), customers can see an **Order** button.  
Outside business hours, a friendly message invites them to come back later.

---

## ✨ Features

✅ Displays a menu of handcrafted cakes  
✅ Shows detailed cake info — name, ingredients, and price  
✅ Dynamically updates UI for open and closed hours  
✅ Handles “Sold Out” cakes with conditional styling  
✅ Simple, responsive design suitable for small business showcases  

---

## 🧠 What You’ll Learn

This project strengthens understanding of:
- React **functional components**  
- **Props** and data passing  
- **Conditional rendering**  
- **Dynamic classes** using template literals  
- **Component composition and modular structure**  
- Static **data mapping** using `.map()`  

---

## 🛠️ Tech Stack

- **React.js** – UI framework  
- **JavaScript (ES6+)** – Logic and interactivity  
- **CSS** – Custom styling for layout and visuals  

---

## ⚙️ Installation & Setup

To run the app locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/ajokes-cake-palace.git

# 2️⃣ Navigate into the project directory
cd ajokes-cake-palace

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
````

The app should open automatically at **[http://localhost:3000/](http://localhost:3000/)** 🎂

---


---

## 🎂 How It Works

1. **Header** displays the bakery name – “Ajoke’s Cake Palace”.
2. **Menu** dynamically renders six cakes from a static array.

   * Each cake shows ingredients and price.
   * Sold-out cakes are grayed out with “SOLD OUT” labels.
3. **Footer** checks the current system time:

   * If between 10:00–20:00 → Displays **Order** button.
   * Otherwise → Displays a “we’re closed” message.

---

## 🍰 Sample Data

Each cake object contains:

```javascript
{
  name: "Butter Cake",
  ingredients: "All-purpose flour, butter, sugar, eggs",
  price: 500,
  photoName: "Images/butter-cake.jpeg",
  soldOut: false
}
```

---

## 💡 Future Improvements

* 🛒 Add a real order form or cart system
* 🌐 Fetch menu data dynamically from an API or backend
* 📱 Improve mobile responsiveness
* ☀️/🌙 Add light/dark mode
* 💾 Store open-hour settings in a configuration file

---

## 🙌 Author

**Sir Herlerdhyre**
Frontend Developer | React Enthusiast | Lifelong Learner

> *“Freshly baked. Lovingly made.”* 🧁

---

## 📜 License

This project is open-source under the **MIT License**.

```

