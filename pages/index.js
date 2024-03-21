import { useState } from "react";
import axios from "axios";

export default function Home({ value: lang }) {
  const [text, setText] = useState("");
  const [detectedLang, setDetectedLang] = useState("");

  // Detect text language
  const fetchTextInfo = async () => {
    if (!text.trim()) {
      setDetectedLang(`Please write or paste a text to detect language.`);
      return; // Exit the function early if the textarea is empty
    }

    try {
      setDetectedLang(`Detecting language...`);
      const res = await axios.post(`/api/detect`, { text });
      const { data } = res;
      setDetectedLang(
        `This text is written in ${
          lang.dictionary[data[0].language].name
        } and the language's native name is ${
          lang.dictionary[data[0].language].nativeName
        }.`
      );
    } catch (err) {
      setDetectedLang(`Language cannot be detected.`);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <h1 className="font-slackside text-7xl md:text-5xl text-primary pt-14 pb-6">
        Language Detector
      </h1>

      <div className="flex flex-col items-center w-5/6 h-96 mt-12">
        <textarea
          type="text"
          className="resize-none outline-none w-3/5 h-4/5 md:w-full md:h-full px-4 py-2 rounded-sm shadow-textarea font-raleway text-base md:text-sm"
          placeholder="Write or paste a text"
          onChange={(e) => setText(e.target.value)}
          autoFocus={true}
        />
        <div className="flex flex-col items-center">
          <button onClick={fetchTextInfo} className="relative mt-16 px-12 py-4 md:px-8 font-raleway font-bold text-lg md:text-sm text-primary group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue bg-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-primary"></span>
            <span className="relative">Detect</span>
          </button>
        </div>
      </div>
      

      {detectedLang && (
          <div className="flex flex-col items-center w-3/5 md:w-4/5 my-6">
            <p className="font-raleway font-bold text-lg md:text-sm text-primary text-center mt-20 border-blue border-double border-2 shadow-detected p-4 md:p-2 rounded-3xl tracking-wide">
               {`${detectedLang}`}
            </p>
          </div>
        )}
  
      <div className="flex justify-center items-end h-52 md:h-44">
        <p className="text-primary text-base md:text-xs font-raleway pb-8">
          © Created and developed by {" "}
          <a className="underline" href="https://rumeysagelgi.com/" target="_blank">
            Rumeysa Gelgi
          </a>
          {" "} | 2024
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://language-detector-app-with-api-rumeysa-gelgis-projects.vercel.app/api/detect");
  const { data: value } = res;

  if (!value) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      value,
    },
  };
}
