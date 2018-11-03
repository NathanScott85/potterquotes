import React from "react";
import "./css/quotes.css";
const Quote = ({ quote: { text, author } }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{author}</p>
    </div>
  );
};

export default Quote;
