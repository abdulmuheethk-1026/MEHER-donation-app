import React from "react";
import "./Stories.css";

const stories = [
  {
    text: "Ravi found education through your donations — now he teaches others.",
    img: "/images/story2.jpg",
  },
  {
    text: "Amina’s family received medical care and a new chance at life.",
    img: "/images/story1.jpg",
  },
  {
    text: "Rahul overcame poverty and now helps others through MEHER.",
    img: "/images/story3.jpg",
  },
];

function Stories() {
  return (
    <section className="stories">
      <h2>Stories of Hope</h2>
      <p>See how lives have transformed through your generosity.</p>
      <div className="story-grid">
        {stories.map((s, i) => (
          <div key={i} className="story-card">
            <img src={s.img} alt="Impact story" />
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stories;
