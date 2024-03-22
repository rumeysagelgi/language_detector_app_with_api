# LANGUAGE DETECTOR APP

## Demonstration Link:
https://language-detector-app-with-api-rumeysa-gelgis-projects.vercel.app

## Description:
Language Detector is a versatile solution developed to precisely determine the language of input text, offering extensive support for 45 languages.

## Features:
- Identifies language of any given text
- Supported languages: Afrikaans 🇿🇦, Arabic 🇸🇦, Bangla 🇧🇩, Bulgarian 🇧🇬, Catalan 🇦🇩, Chinese 🇨🇳, Croatian 🇭🇷, Czech 🇨🇿, Danish 🇩🇰, Dutch 🇳🇱, English 🇬🇧, Estonian 🇪🇪, Finnish 🇫🇮, French 🇫🇷, German 🇩🇪, Greek 🇬🇷, Hebrew 🇮🇱, Hindi 🇮🇳, Hmong Daw 🇱🇦, Hungarian 🇭🇺, Icelandic :flag_iceland:, Indonesian :flag_indonesia:, Italian :flag_italy:, Japanese :flag_japan:, Korean :flag_south_korea:, Latvian :flag_latvia:, Lithuanian :flag_lithuania:, Maltese :flag_malta:, Persian :flag_iran:, Polish :flag_poland:, Portuguese :flag_portugal:, Romanian :flag_romania:, Russian :flag_russia:, Slovak :flag_slovakia:, Slovenian :flag_slovenia:, Spanish :flag_spain:, Swahili :flag_kenya:, Swedish :flag_sweden:, Tamil :flag_sri_lanka:, Thai :flag_thailand:, Turkish :flag_turkey:, Ukrainian :flag_ukrain:, Urdu :flag_pakistan:, Vietnamese :flag_vietnam:, Welsh :flag_wales:
- Responsive and mobile-friendly for all devices
- Single-page application
- Server-side rendering

## Tech Stack:
- **Next.js:** a JavaScript framework for building full-stack web applications with React
- **Tailwind CSS:** a utility-first CSS framework with predefined classes for responsive and visually appealing designs
- **Axios:** a promise-based HTTP library for making API requests and fetching data
- Powered by **<a href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text" target="_blank">Microsoft Translator Text API</a>** on **<a href="https://rapidapi.com/hub" target="_blank">RapidAPI Hub</a>**

## How to Run:
Download the project and unzip it. 

On your code editor, go inside the project's root directory and open `pages/index.js`.

Scroll down to the bottom of `index.js` and find `getServerSideProps` function. Change `"https://language-detector-app-with-api-rumeysa-gelgis-projects.vercel.app/api/detect"` to `“https://localhost:3000/api/detect”`.

Open your terminal and navigate to the root.

Install dependencies with `npm install`.

Create `.env.local` file.

Go to <a href="https://rapidapi.com/hub" target="_blank">RapidAPI Hub</a> on your browser and create or sign in to an account. Go to <a href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text" target="_blank">Microsoft Translator Text API</a> and subscribe to it for free. Now you will have a `x-rapidapi-key`.

Go back to `.env.local` file on your editor and paste `NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY`. Replace `YOUR-RAPIDAPI-KEY` with your own API key.

Run the app with `npm run dev` and open https://localhost:3000

## Files:
<ins>***components***</ins> :

- ***layout.js*** : Container for the overall structure of the application.
  
- ***seo.js*** : Stores HTML head and meta tags.

<ins>***pages***</ins> :

- ***_app.js*** : Exports a custom App component to define global behavior.

- ***index.js*** : Main entry point for the application. Stores `fetchTextInfo()` function as well as the input field for API to fetch.

- ***api/detect.js*** : API endpoint for detecting language.

<ins>***tailwind.config.js***</ins> : Stores Tailwind CSS configurations.
