"use strict";
import theme from "./theme.js";
import { sourceEditor } from "./ide.js";

const THREAD = [
    {
        role: "system",
        content: "You are professional coding assistant."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("judge0-chat-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const userInput = document.getElementById("judge0-chat-user-input");
        const userInputValue = userInput.value.trim();
        if (userInputValue === "") {
            return;
        }

        userInput.disabled = true;
        event.target.classList.add("loading");

        const userMessage = document.createElement("div");
        userMessage.innerText = userInputValue;
        userMessage.classList.add("ui", "small", "segment", "judge0-message", "judge0-user-message");
        if (!theme.isLight()) {
            userMessage.classList.add("inverted");
        }

        const messages = document.getElementById("judge0-chat-messages");
        messages.appendChild(userMessage);

        userInput.value = "";
        messages.scrollTop = messages.scrollHeight;

        THREAD.push({
            role: "user",
            content: `${userInputValue}\nAdditional context: ${sourceEditor.getValue()}`
        });


        const aiMessage = document.createElement("div");
        aiMessage.classList.add("ui", "small", "basic", "segment", "judge0-message");
        if (!theme.isLight()) {
            aiMessage.classList.add("inverted");
        }

        const aiResponse = await puter.ai.chat(THREAD);
        let aiResponseValue = aiResponse.toString();
        if (typeof aiResponseValue !== "string") {
            aiResponseValue = aiResponseValue.map(v => v.text).join("\n");
        }

        THREAD.push({
            role: "assistant",
            content: aiResponseValue
        });

        aiMessage.innerHTML = DOMPurify.sanitize(marked.parse(aiResponseValue));

        messages.appendChild(aiMessage);
        messages.scrollTop = messages.scrollHeight;

        userInput.disabled = false;
        event.target.classList.remove("loading");
        userInput.focus();
    });
});

document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
            case "p":
                e.preventDefault();
                document.getElementById("judge0-chat-user-input").focus();
                break;
        }
    }
});
