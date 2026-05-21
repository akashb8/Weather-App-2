# 🌤️ Professional Weather Station

A premium, high-fidelity weather forecasting application built using **React 19**, **TypeScript**, **Vite**, **Zustand**, and **Tailwind CSS v4**. 

Featuring an immersive, cinematic **moving sky background** with volumetric slow-drifting clouds and professional glassmorphic layouts, this application balances gorgeous visual design with ultra-fast search execution.

---

## ✨ Features

- **🌐 Live OpenWeatherMap Integration**: Fetch real-time temperature, wind speed, humidity, and weather description details for any city globally.
- **☁️ Cinematic Moving Background**: Beautiful multi-layered volumetric drifting clouds (at varying blur thresholds and wind speeds) combined with organic cloud vector SVGs that travel gracefully across the screen.
- **💎 Premium Glassmorphism UI**: High-end translucent weather card containers (`backdrop-blur-xl`), input search fields, and metric widgets with elegant thin borders and subtle ambient glows.
- **⚡ Supercharged State Management**: Lightweight, reactive, and global state handling powered by **Zustand** (under 1.5kB overhead).
- **📱 Completely Responsive**: Tailored layouts using standard Tailwind utility classes to ensure a visually striking experience across desktop, tablet, and mobile screens.
- **🛠️ Zero-Comment Clean Code**: Structured strictly according to the clean-code paradigm with 100% comment-free component logic.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## 📦 Directory Structure

```
openWeather/
├── public/                # Static assets (including generated professional backgrounds)
├── src/
│   ├── api/               # Axios instance config and endpoint mappings
│   ├── component/         # WeatherApp main component with sliding background animations
│   ├── store/             # Zustand global weather store
│   ├── types/             # TypeScript interface and type declarations
│   ├── App.css            # Component-level styles
│   ├── index.css          # Tailwind directives and cloud drift keyframe animations
│   ├── App.tsx            # Root application entry
│   └── main.tsx           # Dom renderer wrapper
├── package.json           # Project dependencies & script entries
└── tsconfig.json          # TypeScript compiler configurations
```

---

## 🛠️ Installation & Setup

Follow these simple steps to run the application locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd openWeather
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the root of the project directory and add your OpenWeatherMap API key:
```env
VITE_API_KEY=your_openweathermap_api_key_here
```
> 💡 *To get a free API key, sign up at [OpenWeatherMap](https://openweathermap.org/api).*

### 5. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 6. Build for Production
To bundle the application for production deployment:
```bash
npm run build
```

---

## 🧑‍💻 Author

Created with 💙 by [Akash B.](https://github.com/akashb8)
