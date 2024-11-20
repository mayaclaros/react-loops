import React from "react";

export default function Cities() {
  let cities = ["Paris", "Tokyo", "New York", "Lisbon"];

  return (
    <div className="Cities">
      <ul>
        {cities.map(function (city) {
          return <li>{city}</li>;
        })}
      </ul>

      {city}
    </div>
  );
}
