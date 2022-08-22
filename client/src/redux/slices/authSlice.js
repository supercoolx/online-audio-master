import { createSlice } from "@reduxjs/toolkit";
import userService from "services/userService";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers: {
        login: (state) => {
            userService.me((res) => {
                state.isLoggedIn = true;
                state.user = res.data;
            })
            .catch(console.log);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});

export default authSlice;