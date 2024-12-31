import axios from "axios";


// export const API_BASE_URL = "http://localhost:5151/";
export const API_BASE_URL = "https://sb-finace-backend-1.onrender.com/";

const jwt = localStorage.getItem("jwt")
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json",
    }
})
