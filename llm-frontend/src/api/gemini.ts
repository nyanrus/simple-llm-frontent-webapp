import { createSignal } from "solid-js";

const API_URL = "https://api.gemini.com/v1"; // Replace with the actual Gemini API URL

export const fetchResponse = async (message) => {
    try {
        const response = await fetch(`${API_URL}/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching response from Gemini API:", error);
        throw error;
    }
};