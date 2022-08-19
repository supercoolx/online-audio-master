import axios from "./base";

const userService = {
    me: () => axios.get("/auth/me"),
    signup: (data) => axios.post("/auth/signup", data),
    login: (data) => axios.post("/auth/login", data),
}

export default userService