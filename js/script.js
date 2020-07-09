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
    quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", //the actual quote
    source: "Winston Churchill", //the person or character who said it
    citation: "", //the source of the quote, like the book, movie or song where the quote originates.
    year: "" // When the quote was created.
  },
  {
    quote:
      "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    source: "Og Mandino"
  },
  {
    quote: "We Generate Fears While We Sit. We Overcome Them By Action.",
    source: "Dr. Henry Link"
  },
  {
    quote:
      "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.",
    source: "Helen Keller",
    citation: "Life Quote",
    year: ""
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    source: "Mark Twain",
    citation: "",
    year: "2018"
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
 * This function will print a random qutoe to the screen.
 ***/
function printQuote() {
  const div = document.getElementById("quote-box");
  const getQuotes = getRandomQuote();
  let html = `<p class="quote">${getQuotes.quote}</p>
  <p class="source"> ${getQuotes.source}`;

  if (getQuotes.citation) {
    html += `<span class="citation"> ${getQuotes.citation}</span>`;
  }

  if (getQuotes.year) {
    html += `<span class="year"> ${getQuotes.year}</span></p>`;
  }

  return (div.innerHTML = html);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

//  Every 5 seconds a new qutoe will display.
setInterval(printQuote, 5000);

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
