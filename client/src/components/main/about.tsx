import React from 'react';

export function About() {
  return (
    <div className="container">
      <h2>A Rust + WebAssembly Pitch Detector and Pitch Trainer</h2>
      <h3>Authors</h3>
      <span>Pitch Detection: Alessandro Genova, Jason Siefken<br/>Pitch Trainer: Nathan Bushman</span>
      <br />
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
      <br />
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
      <br />
      <h3>Usage</h3>
      <span>Click on the play button to start training.  You will be repeatedly prompted to play a random note.  Upon detection, you'll be prompted to play a new random note.  For instruments, it's best to memorize in a cumulative manner. For instance with a guitar you could start on one string such as the highest string and memorize all the notes and then add the second string by playing notes from both the first and second strings and so on.  If you learn one string and then switch to learning a different string without continuing to practice the first string then you'll be more likey to confuse your brain and forget the notes on the first string.</span>
    </div>
  );
}
