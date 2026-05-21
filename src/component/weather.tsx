import React, { useState } from "react";
import { useWeatherStore } from "../store/store";

const WeatherApp: React.FC = () => {
    const [city, setCity] = useState('');
    const { weather, loading, error, fetchWeather } = useWeatherStore();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (city.trim()) fetchWeather(city);
    };

    return (
        <>
        <div
            className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/weather_bg.png')`
            }}
        >
            <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] pointer-events-none z-0"></div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-0 w-[500px] h-[300px] bg-slate-700/20 rounded-full blur-[100px] animate-drift-slow"></div>
                <div className="absolute top-[40%] left-0 w-[700px] h-[400px] bg-indigo-900/25 rounded-full blur-[120px] animate-drift-medium"></div>
                <div className="absolute top-[65%] left-0 w-[400px] h-[250px] bg-slate-800/25 rounded-full blur-[90px] animate-drift-fast"></div>

                <svg className="absolute top-[20%] left-0 w-80 h-auto text-slate-600/10 blur-[1px] animate-drift-medium" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M10 50 C10 40, 25 35, 35 45 C45 35, 65 35, 70 48 C80 48, 90 55, 85 68 C80 75, 20 75, 10 68 Z" />
                </svg>
                <svg className="absolute top-[50%] left-0 w-[450px] h-auto text-slate-800/12 blur-[2px] animate-drift-slow" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M10 50 C10 38, 28 32, 38 42 C48 32, 70 32, 75 46 C86 46, 95 53, 90 68 C85 75, 20 75, 10 68 Z" />
                </svg>
            </div>

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="w-full max-w-md flex flex-col items-center relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 mb-2 uppercase select-none">
                        WEATHER APP
                    </h1>
                    <p className="text-xs tracking-widest text-slate-500 font-semibold uppercase">Professional Weather Station by Akash B.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2 mb-8 w-full max-w-md relative z-20">
                    <input
                        type="text"
                        placeholder="Search for a city..."
                        className="flex-1 px-4 py-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-medium"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 rounded-2xl transition-all duration-200 transform active:scale-95 text-sm tracking-wider shadow-lg shadow-blue-600/25">
                        SEARCH
                    </button>
                </form>

                {loading && (
                    <div className="animate-pulse text-blue-400 font-semibold text-sm tracking-wider py-4">
                        Please Wait...
                    </div>
                )}

                {error && !loading && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3 rounded-2xl text-sm font-medium w-full max-w-md text-center">
                        {error}
                    </div>
                )}

                {weather && !loading && (
                    <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md text-center transition-all duration-300 hover:scale-[1.01] hover:border-slate-700/50 relative overflow-hidden group">
                        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 bg-blue-500 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-1 drop-shadow-sm">{weather.name}</h2>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 mb-6">Current Location</p>

                            <div className="my-6 transform transition-transform duration-300 hover:scale-105">
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                                    alt={weather.weather[0].description}
                                    className="w-32 h-32 mx-auto drop-shadow-md"
                                />
                            </div>

                            <p className="text-6xl font-extrabold text-white tracking-tighter mb-1">
                                {Math.round(weather.main.temp)}°C
                            </p>

                            <p className="text-slate-300 font-medium capitalize mb-6 text-sm tracking-wide">
                                {weather.weather[0].description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6">
                                <div className="bg-slate-950/40 border border-slate-800/30 p-4 rounded-2xl text-center">
                                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-1">Humidity</p>
                                    <p className="font-extrabold text-lg text-white">{weather.main.humidity}%</p>
                                </div>

                                <div className="bg-slate-950/40 border border-slate-800/30 p-4 rounded-2xl text-center">
                                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-1">Wind Speed</p>
                                    <p className="font-extrabold text-lg text-white">{weather.wind.speed} m/s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default WeatherApp;