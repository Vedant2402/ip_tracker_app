# 🛰️ IP Address Tracker

A sleek, terminal-style IP Address Tracker built with **React**, featuring a dynamic map using **React Leaflet**, real-time data from the **ip-api.com** API, and a neon hacker-themed UI.

---

## 🚀 Features

- 🔍 Track **any public IP address**
- 🌍 Display:
  - Country, Region, City
  - ISP (Internet Service Provider)
  - Timezone
  - 🌐 **Map with marker** pointing to the location
- 💻 **Hacker-style UI** with neon green terminal design
- 🛡️ **Private IP** detection with error handling

---

## 🧪 Demo

> _Coming soon_ – or deploy it easily on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📦 Tech Stack

- ⚛️ React.js
- 🗺️ React Leaflet + Leaflet.js
- 🌐 ip-api.com (public IP geolocation API)

---

## 📁 Project Structure

```
ip-tracker-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── IPInfo.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components/
│       └── IPInfo.css
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/ip-tracker-app.git
cd ip-tracker-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Leaflet and React Leaflet

```bash
npm install leaflet react-leaflet
```

---

## 🧑‍💻 Development

```bash
npm start
```

This will run the app in development mode at:  
`http://localhost:3000`

---

## 📦 Production Build

```bash
npm run build
```

---

## 🧠 Notes

- The app uses **ip-api.com**, which is a free, no-auth IP geolocation API for non-commercial use.
- Private IPs like `192.168.x.x`, `10.x.x.x`, or `127.0.0.1` will return errors — the app handles this with alerts and fallbacks.
- The map uses **CartoDB dark tiles** for a futuristic theme.

---

## 🖼️ Screenshots



---

## 📜 License

MIT License

---

## 🙌 Acknowledgments

- [ip-api.com](https://ip-api.com)
- [React Leaflet](https://react-leaflet.js.org/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [CartoDB Dark Tiles](https://carto.com)

---

## 📬 Contact

Made with 💻 by Vedant Kankate 
[GitHub](https://github.com/vedant2402) • [Portfolio](https://vedant-kankate.netlify.app/) • [LinkedIN](https://www.linkedin.com/in/vedant-kankate/)
