//src/utils/api.js

const API_URL = "http://localhost:3000/api/auth";

export const signupUser = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        return await response.json();
    } catch (error) {
        console.error("Signup Error:", error);
        return { message: "Server Error" };
    }
};

export const loginUser = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        return await response.json();
    } catch (error) {
        console.error("Login Error:", error);
        return { message: "Server Error" };
    }
};
