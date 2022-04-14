import React, { useState, useEffect } from "react";

function Slides({ slides }) {
  const [slide, setSlide] = useState(slides[0]);
  const [index, setIndex] = useState(0);
  const [restart, setRestart] = useState(true);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (index > 0) {
      setRestart(false);
      setPrev(false);
    } else {
      setRestart(true);
      setPrev(true);
    }

    if (index === slides.length - 1) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [index, slides]);

  const handleRestart = () => {
    setSlide(slides[0]);
    setIndex(0);
  };

  const handlePrev = () => {
    setSlide(slides[index - 1]);
    setIndex(index - 1);
  };

  const handleNext = () => {
    setSlide(slides[index + 1]);
    setIndex(index + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={handleRestart}
          disabled={restart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          onClick={handlePrev}
          disabled={prev}
          className="small"
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={next}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slide.title}</h1>
        <p data-testid="text">{slide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
