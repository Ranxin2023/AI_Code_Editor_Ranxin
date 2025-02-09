const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Chat endpoint
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    console.log("post to the server successfully with message: ", userMessage)
    // console.log("openai api key is", process.env.OPENAI_API_KEY)
    try {
        // Replace with your LLM API details
        const apiKey = process.env.OPENAI_API_KEY;
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        const botMessage = response.data.choices[0].message.content;
        res.json({ reply: botMessage });
    } catch (error) {
        console.error("Error communicating with LLM API:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
