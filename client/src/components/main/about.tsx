import React from 'react';

export function About() {
  return (
    <div className="container">
      <h2>A Rust + WebAssembly Pitch Detector</h2>
      <h3>Authors</h3>
      <span>Pitch Detection: Alessandro Genova, Jason Siefken<br/>Pitch Trainer: Nathan Bushman</span>
      <h3>Core Library</h3>
      <span>
        <a
          href="https://github.com/alesgenova/pitch-detection"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
        <br />
        (rust)
      </span>
      <h3>Demo App</h3>
      <span>
        <a
          href="https://github.com/OtterFlip/pitch-detection-app"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
        <br />
        (wasm, react)
      </span>
    </div>
  );
}
