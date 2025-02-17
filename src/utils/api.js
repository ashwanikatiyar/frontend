//src/utils/api.js


import axios from "axios";

export const API_URL = "http://localhost:2000/api/auth";

export const signupUser = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, formData, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Debugging api.js", formData);
        return response.data;
    } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
        return { message: "Server Error" };
    }
};

export const loginUser = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, formData, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Login ___Debugging api.js", formData);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        return { message: "Server Error" };
    }
};









// const API_URL = "http://localhost:2000/api/auth";

// export const signupUser = async (formData) => {
//     try {
//         const response = await fetch(`${API_URL}/signup`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         });
//         console.log("Debugging api.js",formData)   
//         return await response.json();
//     } catch (error) {
//         console.error("Signup Error:", error);
//         return { message: "Server Error" };
//     }
// };

// export const loginUser = async (formData) => {
//     try {
//         const response = await fetch(`${API_URL}/login`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         });
//         console.log("Login ___Debugging api.js ",formData)   

//         return await response.json();
//     } catch (error) {
//         console.error("Login Error:", error);
//         return { message: "Server Error" };
//     }
// };
