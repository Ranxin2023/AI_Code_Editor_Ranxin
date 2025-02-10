# Judge0 IDE
[![Judge0 IDE Screenshot](./.github/screenshot.png)](https://ide.judge0.com)

[![License](https://img.shields.io/github/license/judge0/ide?color=2185d0&style=flat-square)](https://github.com/judge0/ide/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/judge0/ide?color=2185d0&style=flat-square)](https://github.com/judge0/ide/releases)
[![Stars](https://img.shields.io/github/stars/judge0/ide?color=2185d0&style=flat-square)](https://github.com/judge0/ide/stargazers)

<a href="https://www.producthunt.com/posts/judge0-ide" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179885&theme=light" alt="" height="43px" /></a>

## About
[**Judge0 IDE**](https://ide.judge0.com) is a free and open-source online code editor that allows you to write and execute code from a rich set of languages. It's perfect for anybody who just wants to quickly write and run some code without opening a full-featured IDE on their computer. Moreover, it is also useful for teaching and learning or just trying out a new language.

Judge0 IDE is using [**Judge0**](https://ce.judge0.com) for executing the user's source code.

Visit https://ide.judge0.com, and enjoy happy coding. :)

## Background
Judge0 IDE is an open-source online code editor and compiler that supports multiple programming languages. It offers developers a platform to write, run, and debug code directly in their browsers without needing local setup. Its core functionalities include:
    - A powerful and versatile Monaco Editor for code editing.
    - Language support for popular programming languages such as Python, Java, C++, and more.
    - An API-driven approach for code execution and compilation.



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
2. Autocomplete API
    - Endpoint: `POST /autocomplete`
    - Purpose: Provides suggestions as the user types in the chat or code editor.
    
3. Chat API
    - Endpoint: `POST /chat`
    - **Purpose**: Processes user questions and provides AI-generated responses using an integrated AI model.
    - How It Works:
        - Processes the user’s message, optionally including a selected code snippet.
        - Sends the message to an AI engine for contextual understanding and response generation.
        - Returns the AI’s reply to the frontend for display.
    