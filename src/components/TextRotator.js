import React, { useEffect, useState } from 'react';
import './TextRotator.css';

const TextRotator = () => {
  const words = [
    "product design",
    "digital marketing",
    "web development",
    "motion graphics",
    "UX research",
    "branding"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 2 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="text-rotator">
      <p className="paragraph-17">10 year career ranging in</p>
      <div className="wrapper">
        <div className="mover">
          <p className="paragraph-17">{words[currentWordIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default TextRotator;
