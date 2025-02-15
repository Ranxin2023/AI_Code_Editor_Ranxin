const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = 3000;
const cors = require("cors");
const { exec } = require("child_process");
const suggestionsData = [
    "What is the purpose of this code?",
    "How does this algorithm work?",
    "What is the error here?",
    "Can you explain this syntax?",
    "How do I fix this issue?",
    "What is the structure of this program?",
    "What are the best practices for this?",
    "How to optimize this code?",
    "What is the time complexity?",
    "What does this function do?"
];
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

app.post("/compile", (req, res) => {
    const { code } = req.body;

    // Save the code to a temporary file
    const filePath = "./temp.cpp";
    require("fs").writeFileSync(filePath, code);

    // Compile the code using g++
    exec(`g++ ${filePath} -o temp.out`, (error, stdout, stderr) => {
        if (error) {
            // Parse errors from stderr and send them back
            const errors = stderr
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line) => {
                    const match = line.match(/:(\d+):(\d+): (.+)/);
                    if (match) {
                        return {
                            line: parseInt(match[1], 10),
                            column: parseInt(match[2], 10),
                            message: match[3],
                        };
                    }
                    return { message: line };
                });

            return res.json({ errors });
        }

        res.json({ success: true, output: stdout });
    });
});
// Autocomplete endpoint
app.post("/autocomplete", (req, res) => {
    const { query } = req.body; // User input query
    if (!query || query.trim() === "") {
        return res.status(400).json({ suggestions: [] });
    }

    // Filter suggestions based on query
    const filteredSuggestions = suggestionsData.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
    );

    // Limit the number of suggestions to return
    const limitedSuggestions = filteredSuggestions.slice(0, 5);
    console.log("suggestions", limitedSuggestions)
    // Respond with the filtered suggestions
    res.json({ suggestions: limitedSuggestions });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
