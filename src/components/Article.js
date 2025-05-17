import React from "react";

function Article({title, date="January 1, 1970", preview, minutes = 0}) {

  // If minutes are less than 30, use coffee cups
  const roundedMinsForCoffee = minutes < 30 ? Math.ceil(minutes / 5) * 5 : 0;
  // Display coffee cup emoji
  const coffeeCups = roundedMinsForCoffee > 0 ? "☕️".repeat(roundedMinsForCoffee / 5) : '';

  // If minutes are 30 or more, use bento boxes
  const roundedMinsForBento = minutes >= 30 ? Math.ceil(minutes / 10) * 10 : 0;
  const bentoBoxes = roundedMinsForBento > 0 ? "🍱".repeat(roundedMinsForBento / 10) : '';

  const emojis = minutes >= 30 ? bentoBoxes : coffeeCups;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {emojis} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;