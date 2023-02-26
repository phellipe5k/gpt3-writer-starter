import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import openAi from '../service/openAi';

const Home = () => {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRequest = async () => {
    setIsGenerating(true);
    const $response = await openAi.create(input);
    console.log("response: ", $response.text);
    setResponse($response.text);
    setIsGenerating(false)
  };

console.log(input)
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Account generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>Here you can generate an account data to fill a form</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            onChange={({ target }) =>setInput(target.value)}
            value={input}
            placeholder="start typing here" className="prompt-box" />
        </div>
        <div className="prompt-buttons">
        <a
          className={isGenerating ? 'generate-button loading' : 'generate-button'}
          onClick={handleRequest}
        >
          <div className="generate">
          {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
        </a>
      </div>
      {response && (
        <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Output</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{response}</p>
          </div>
        </div>
      )}
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
