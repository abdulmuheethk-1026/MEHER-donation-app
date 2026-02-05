import React from "react";
import "./Quotes.css";

const quotes = [
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    img: "/images/gandhi.jpg",
  },
  {
    text: "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    img: "/images/churchill.jpg",
  },
  {
    text: "No one has ever become poor by giving.",
    author: "Anne Frank",
    img: "/images/annefrank.jpg",
  },
];

function Quotes() {
  return (
    <section className="quotes">
      {quotes.map((quote) => (
        <div key={quote.author} className="quote-card">
          <img src={quote.img} alt={quote.author} />
          <blockquote>{quote.text}</blockquote>
          <p>- {quote.author}</p>
        </div>
      ))}
    </section>
  );
}

export default Quotes;
