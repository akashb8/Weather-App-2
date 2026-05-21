import axios, {  type AxiosInstance } from "axios";
import {baseURL} from "./endPoints"

export const axiosInstance:AxiosInstance=axios.create({
    baseURL
})