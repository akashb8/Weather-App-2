import { create } from "zustand";
import type { weatherState } from "../types/type";
import { axiosInstance } from "../api/axiosInstance";
import { endPoints } from "../api/endPoints";

export const useWeatherStore=create<weatherState>((set)=>({
    weather:null,
    loading:false,
    error:null,
    fetchWeather:async(city:string)=>{
        const apiKey = import.meta.env.VITE_API_KEY || "425f1ebb45ba0270f43f23eacc1b59fd";
        set({loading:true,error:null});
        try{
            const response=await axiosInstance.get(endPoints.query,{
                params:{
                    q:city,
                    appid:apiKey,
                    units:"metric"
                }
            });

            set ({weather:response.data,loading:false});
        }  catch(err:any){
            set({
                error:err.response?.data?.message || "Something went wrong",
                loading:false,
                weather:null
            })
        }
    }
}))