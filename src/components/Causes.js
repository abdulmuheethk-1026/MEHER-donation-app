import React from "react";
import "./Causes.css";

const causes = [
  { name: "Poverty", img: "/images/poverty.png" },
  { name: "Education", img: "/images/education1.png" },
  { name: "Orphanage", img: "/images/orpahanage.png" },
  { name: "Medical", img: "/images/medical.png" },
];

function Causes() {
  return (
    <section className="causes">
      {causes.map((cause) => (
        <div key={cause.name} className="cause">
          <img src={cause.img} alt={cause.name} />
          <p>{cause.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Causes;
