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
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: "Winston Churchill",
    tag: "Inspirational"
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
    citation: "Life Quote"
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    source: "Mark Twain",
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

/***
 *  `randomColor` function
 * This function will generate a new background
 * color every time a new quote appears
 ***/
function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return (rgb = `rgb(${red}, ${green}, ${blue})`);
}

function randomBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

/***
 * `printQuote` function
 * This function will print a random quote to the screen.
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
    html += `<span class="year"> ${getQuotes.year}</span>`;
  }

  if (getQuotes.tag) {
    html += `<span class="tag">, ${getQuotes.tag}</span>`;
  }

  html += `</p>`;

  randomBackgroundColor();

  return (div.innerHTML = html);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

//  Every 10 seconds a new qutoe will display.
setInterval(printQuote, 10000);

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
