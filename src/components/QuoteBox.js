import React from "react";
function QuoteBox({ cita, author, image, change, color }) {
  return (
    <div id="quote-box">
      <i className="fas fa-quote-left icon" style={{ color }}></i>
      <div className="quote-info">
        <blockquote>
          <img src={image} alt="" />
          <p style={{ color }} id="text">
            {cita}
          </p>
        </blockquote>
        <h3 style={{ color }} id="author">
          {author}
        </h3>
      </div>
      <a
        href="https://twitter.com/intent/tweet"
        rel="noopener noreferrer"
        target={"_blank"}
      >
        <i
          className="fa fa-twitter icon-2"
          style={{ color }}
          title="Tweet this quote!"
        />
      </a>
      <button onClick={change} style={{ background: color }} id="new-quote">
        Next
      </button>
    </div>
  );
}

export default QuoteBox;
