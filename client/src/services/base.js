import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.withCredentials = true;

export default axios;
