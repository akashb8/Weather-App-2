export interface WeatherData{
   name:string;
    main: {
    temp: number;
    humidity: number;
  };
  weather:[{description:string;icon:string;main:string}]

    wind: {
        speed: number
    };
   
}

export interface weatherState{
    weather:WeatherData|null;
    loading:boolean;
    error:string|null;
    fetchWeather:(city:string)=>Promise<void>;
}

