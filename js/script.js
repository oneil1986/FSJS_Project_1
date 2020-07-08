/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: "1", //the actual quote
    source: "", //the person or character who said it
    citation: "", //the source of the quote, like the book, movie or song where the quote originates.
    year: "" // When the quote was created.
  },
  {
    quote: "2",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "3",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "4",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "5",
    source: "",
    citation: "",
    year: ""
  }
];

/***
 * `getRandomQuote` function
 * This function will generate a random quote
 * from the quotes array of objects.
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

console.log(getRandomQuote());

/***
 * `printQuote` function
 ***/
function printQuote() {}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
