import axios from "axios";

const api = axios.create({
    baseURL: "https://vercel-backend-brown.vercel.app"
})

export default api