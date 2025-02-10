# AI Code Editor
## Table of Content
- [About](#about)
- [Objective](#objective)
- [Background](#background)
- [Features](#features)
- [Judge0 Resources](#judge0-resources)
- [Integration of Large Language Models (LLMs) into the Project](#integration-of-large-language-models-llms-into-the-project)
- [Key APIs](#key-apis)
- [Future Improvements](#future-improvements)
## About
[**Judge0 IDE**](https://ide.judge0.com) is a free and open-source online code editor that allows you to write and execute code from a rich set of languages. It's perfect for anybody who just wants to quickly write and run some code without opening a full-featured IDE on their computer. Moreover, it is also useful for teaching and learning or just trying out a new language.

Judge0 IDE is using [**Judge0**](https://ce.judge0.com) for executing the user's source code.

Visit https://ide.judge0.com, and enjoy happy coding. :)

## Objective
This project aims to take the foundational features of the Judge0 IDE and extend its capabilities with AI-powered functionalities, transforming it into an intelligent code editor. By integrating AI, the enhanced editor offers:
- Real-time autocomplete suggestions to assist with typing and coding efficiency.
- An AI Chat Assistant to provide contextual help, explanations, and debugging suggestions.
- The ability to select and analyze code snippets, allowing users to interact with specific sections of their code for focused assistance.
- Automated suggestions to fix compilation errors, enabling faster debugging and more efficient development.

## Background
Judge0 IDE is an open-source online code editor and compiler that supports multiple programming languages. It offers developers a platform to write, run, and debug code directly in their browsers without needing local setup. Its core functionalities include:
- A powerful and versatile Monaco Editor for code editing.
- Language support for popular programming languages such as Python, Java, C++, and more.
- An API-driven approach for code execution and compilation.

## Features
1. Fix Compilation Errors:
- Automatically detects errors during code compilation and provides specific suggestions to resolve them.
- How It Meets the Requirement:
    - If the user's code doesn't compile, the system identifies errors and sends them to the AI backend.
    - The AI backend analyzes the error messages and suggests actionable fixes, helping users resolve issues quickly.

2. Autocomplete Suggestions:
- While the user types queries or code-related questions in the chat, the editor provides real-time suggestions to complete their input.
- How It Meets the Requirement:
    - Implements real-time autocomplete suggestions using the backend API, making it easier for users to formulate queries or code snippets.
    - This dynamic feature enhances productivity and aligns with the requirement of improving the user experience.

3. Code Selection and Contextual Help:
- Users can highlight specific blocks of code within the editor.
- Once selected, a floating chatbox appears, allowing users to ask questions specific to the highlighted code (e.g., "How can I optimize this code?").
- How It Meets the Requirement:
    - Allows users to select specific code segments and receive inline AI assistance.
    - Provides contextual help based on the highlighted code, meeting the requirement of inline interaction with selected code.

4. AI Chat Assistant:
- The AI assistant is capable of answering coding-related queries, explaining algorithms, and providing debugging suggestions.
- How It Meets the Requirement:
    - Adds a chat interface where users can ask questions and receive AI-generated responses.
    - Integrates seamlessly with the editor, allowing users to interact without switching contexts.


## Judge0 Resources
[![Judge0 IDE Screenshot](./.github/screenshot.png)](https://ide.judge0.com)

[![License](https://img.shields.io/github/license/judge0/ide?color=2185d0&style=flat-square)](https://github.com/judge0/ide/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/judge0/ide?color=2185d0&style=flat-square)](https://github.com/judge0/ide/releases)
[![Stars](https://img.shields.io/github/stars/judge0/ide?color=2185d0&style=flat-square)](https://github.com/judge0/ide/stargazers)

<a href="https://www.producthunt.com/posts/judge0-ide" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179885&theme=light" alt="" height="43px" /></a>
## Community
Do you have a question, feature request, or something else on your mind? Or do you want to follow Judge0 news?

* [Subscribe to Judge0 newsletter](https://subscribe.judge0.com)
* [Join our Discord server](https://discord.gg/GRc3v6n)
* [Watch asciicasts](https://asciinema.org/~hermanzdosilovic)
* [Report an issue](https://github.com/judge0/judge0/issues/new)
* [Contact us](mailto:contact@judge0.com)
* [Schedule an online meeting with us](https://meet.judge0.com)

## Author and Contributors
Judge0 IDE was created by [Herman Zvonimir Došilović](https://github.com/hermanzdosilovic).

Thanks a lot to all [contributors](https://github.com/judge0/ide/graphs/contributors) for their contributions to this project.

## License
Judge0 IDE is licensed under the [MIT License](https://github.com/judge0/ide/blob/master/LICENSE).

## Integration of Large Language Models (LLMs) into the Project
### Why Use LLMs?
    - LLMs like OpenAI’s GPT or similar models are highly proficient at understanding natural language and generating contextually relevant responses.
    - They can analyze code, explain concepts, and provide debugging suggestions based on context.

### How LLMs Are Integrated
1. Error Analysis:
    - User’s code compilation errors are sent to the backend.
    - The LLM analyzes error messages and provides specific fixes.
2. Autocomplete Suggestions:
    - When a user types in the chat, the LLM predicts the most relevant completions dynamically.
    - Suggestions are fetched from the LLM through an API, ensuring they are contextually accurate.
3. Code Context and Explanation:
    - The user highlights a block of code in the editor.
    - The highlighted code and user query are sent to the LLM.
    - The LLM provides a detailed explanation or optimization tips for the selected code.
4. AI Chat Assistant:
    - Users can ask general programming questions.
    - The LLM generates answers that are specific, detailed, and context-aware.

### Why LLMs Enhance the Project
- Context-Aware Responses:
    - LLMs use the user’s input, highlighted code, and error context to provide precise solutions.
- Improved Productivity:
    - Automates repetitive debugging and research tasks, enabling developers to focus on creative problem-solving.
- Dynamic Learning:
    - Helps users learn by offering detailed explanations of code and concepts.

## How you start the project
1. Clone the project
```sh
git clone https://github.com/Ranxin2023/AI_Code_Editor_Ranxin
```
2. install all the dependencies
```sh
npm install
```
3. running the frontend
```sh
python3 -m http.server 8000
```

4. run the backend
```sh
node server.js
```

## Key APIs
### Overview

The backend of this project powers the AI-enhanced code editor by providing various APIs for processing, compilation, and intelligent suggestions. These APIs are designed to handle user interactions, compile code, and provide autocomplete suggestions and AI-powered feedback seamlessly.
1. Compilation API
    - Endpoint: `POST /compile`
    - **Purpose**: Compiles the user's code and returns the results, including error messages if the compilation fails.
    - How It Works:
        - Receives the user’s code and associated parameters.
        - Executes the code using a sandboxed compiler or interpreter.
        - Captures any errors and outputs and returns them to the frontend.
    
2. Autocomplete API
    - Endpoint: `POST /autocomplete`
    - **Purpose**: Provides suggestions as the user types in the chat or code editor.
    - How It Works:
        - Matches the user’s partial input with pre-defined or dynamically generated suggestions.
        - Returns the most relevant suggestions for display in the frontend.
    
3. Chat API
    - Endpoint: `POST /chat`
    - **Purpose**: Processes user questions and provides AI-generated responses using an integrated AI model.
    - How It Works:
        - Processes the user’s message, optionally including a selected code snippet.
        - Sends the message to an AI engine for contextual understanding and response generation.
        - Returns the AI’s reply to the frontend for display.

## Project Structure
```sh
AI_Code_Editor_Ranxin/
├── backend/
│   ├── server.py                  # Flask/Python backend server
│   ├── routes/
│   │   ├── chat.py                # Endpoint for AI chat responses
│   │   ├── autocomplete.py        # Endpoint for autocomplete suggestions
│   │   ├── compile.py             # Endpoint for code compilation and error handling
│   │   └── utils.py               # Helper functions for backend processing
│   ├── models/
│   │   ├── llm_integration.py     # Integration with LLM APIs (e.g., GPT models)
│   │   └── error_analysis.py      # Analysis and suggestions for code errors
│   ├── requirements.txt           # Python dependencies
│   └── README.md                  # Backend setup and documentation
│
├── frontend/
│   ├── index.html                 # Main HTML file with the user interface
│   ├── css/
│   │   ├── styles.css             # Styles for the chatbox, autocomplete, and overall UI
│   ├── js/
│   │   ├── app.js                 # Core JavaScript logic for the frontend
│   │   ├── chat.js                # Handles AI chat interactions
│   │   ├── autocomplete.js        # Logic for autocomplete suggestion box
│   │   ├── code_selection.js      # Enables inline code selection and contextual help
│   │   └── api_integration.js     # Handles communication with the backend
│   ├── vendor/
│   │   ├── monaco-editor/         # Monaco Editor library files
│   └── README.md                  # Frontend setup and documentation
│
├── shared/
│   ├── config/
│   │   ├── api_endpoints.json     # Configuration for API endpoints
│   ├── assets/
│   │   ├── icons/                 # Icons for UI elements
│   │   ├── images/                # Images used in the project
│   └── README.md                  # Shared assets and configuration documentation
│
├── .gitignore                     # Files to ignore in Git
├── README.md                      # Project overview and instructions
├── LICENSE                        # License file for the project
└── docs/
    ├── architecture.md            # Documentation of project architecture
    ├── usage_guide.md             # How to use the project features
    └── future_improvements.md     # Suggested future improvements

```
## Future Improvements
- Improving Compilation Error Feedback: 
    - Provide even more specific and actionable suggestions for common compilation errors.
- Advanced AI Chat Features: 
    - Use AI models to predict possible fixes for detected errors and offer tailored recommendations.
- Expanded Autocomplete Suggestions:
    - Include more contextual suggestions based on user input and code snippets.
