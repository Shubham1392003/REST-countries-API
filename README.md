<div align="center">

# 🌍 Countries Explorer

### Discover the World, One Country at a Time

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel)](https://rest-countries-api-sand-alpha.vercel.app/)
[![REST Countries API](https://img.shields.io/badge/API-REST%20Countries-blue?style=for-the-badge)](https://restcountries.com/)

*A beautifully crafted web application that brings the world to your fingertips. Explore countries, their cultures, and fascinating details through an intuitive and modern interface.*

[View Demo](https://rest-countries-api-sand-alpha.vercel.app/)

</div>

---

## ✨ Features at a Glance

<table>
<tr>
<td width="50%">

### 🎯 Core Features
- 🗺️ **Browse 195+ Countries** - Explore all independent nations
- 🔍 **Smart Search** - Find countries instantly with real-time search
- 🌐 **Region Filters** - Filter by continents and regions
- 🌓 **Dark Mode** - Easy on the eyes, day or night
- 📱 **Responsive Design** - Perfect on any device

</td>
<td width="50%">

### 📊 Country Details
- 🏴 High-resolution flags
- 👥 Population statistics
- 🗣️ Native names & languages
- 💰 Currencies with symbols
- 🗺️ Geographic information
- 🔗 Clickable border countries
- 📍 Direct Google Maps integration

</td>
</tr>
</table>

---

## 🚀 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST%20API-009688?style=for-the-badge&logo=fastapi&logoColor=white)

</div>

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **API**: [REST Countries API v3.1](https://restcountries.com/)
- **Icons**: Font Awesome
- **Typography**: Google Fonts (Nunito)
- **Storage**: LocalStorage for theme persistence

---

## 📂 Project Structure

```
countries-explorer/
│
├── 📄 index.html          # Home page with country grid
├── 📄 country.html        # Individual country details page
│
├── 🎨 style.css           # Global styles & animations
├── 🎨 country.css         # Country page specific styles
│
├── 🔧 script.js           # Main app logic & API calls
├── 🔧 country.js          # Country details functionality
├── 🔧 theme.js            # Dark/Light mode controller
│
└── 📖 README.md           # You are here!
```

---

## 🛠️ How It Works

### 1️⃣ **Fetching Countries**
```javascript
fetch('https://restcountries.com/v3.1/independent?status=true')
  .then(response => response.json())
  .then(data => renderCountries(data));
```
The app fetches all independent countries and dynamically creates interactive cards.

### 2️⃣ **Real-Time Search**
```javascript
countries.filter(country => 
  country.name.common.toLowerCase().includes(searchValue)
);
```
Instantly filters countries as you type—no page reload needed!

### 3️⃣ **Region Filtering**
```javascript
fetch(`https://restcountries.com/v3.1/region/${region}`)
```
One click to explore Africa, Asia, Europe, and more.

### 4️⃣ **Country Details**
```javascript
// URL: country.html?name=India
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
```
Deep-dive into any country with comprehensive information and navigation to neighboring nations.

### 5️⃣ **Persistent Dark Mode**
```javascript
localStorage.setItem('theme', 'dark');
document.body.classList.toggle('dark-mode');
```
Your theme preference is saved and automatically applied on your next visit.

---

## 🎯 API Integration

This project leverages the powerful **REST Countries API**:

| Endpoint | Purpose |
|----------|---------|
| `/v3.1/independent?status=true` | Fetch all independent countries |
| `/v3.1/region/{region}` | Filter by geographic region |
| `/v3.1/name/{country}?fullText=true` | Get detailed country information |

📚 [Full API Documentation](https://restcountries.com/)

---

## 🚧 Roadmap

<details>
<summary><b>🔮 Future Enhancements</b></summary>

- [ ] 🗺️ **Interactive Map View** - Embedded Google Maps with country markers
- [ ] ❤️ **Favorites System** - Save and bookmark your favorite countries
- [ ] 📊 **Compare Countries** - Side-by-side country comparison
- [ ] ⏳ **Loading Skeletons** - Beautiful loading states
- [ ] 🌐 **Pagination** - Optimized performance for large datasets
- [ ] 🎮 **Country Quiz** - Test your geography knowledge
- [ ] 📱 **PWA Support** - Install as a mobile app
- [ ] 🌍 **Multi-language Support** - Interface in multiple languages

</details>

---

## 💡 Key Features Breakdown

### 🔍 Smart Search
Type any country name and watch the list update instantly. The search is case-insensitive and lightning-fast.

### 🌍 Region Filters
Quick filters for:
- 🌍 Africa
- 🌎 Americas
- 🌏 Asia
- 🌐 Europe
- 🌊 Oceania

### 🌙 Dark Mode
A carefully crafted dark theme that:
- Reduces eye strain
- Saves battery on OLED screens
- Remembers your preference
- Smooth transition animations

### 📍 Border Countries
Click any neighboring country to instantly navigate to its details page—perfect for exploring regions!

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

<div align="center">

### **Shubham Madhav Kendre**

*AI/ML & Full Stack Developer*

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://sk-coral.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and lots of ☕**

</div>
