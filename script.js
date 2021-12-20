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
        quote:"What we've got here is failure to communicate.",
        source:"Cool Hand Luke" ,
        citation:"Paul Newman",
        year:1967
    },    {
        quote:"Life is what happens when you’re busy making other plans.",
        source:"John Lennon" ,
        year:1995
    },    {
        quote:"Get busy living or get busy dying.",
        source:"Stephen King" ,
        year:2010
    },    {
        quote:"You only live once, but if you do it right, once is enough.",
        source: "Mae West",
    },    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        source:"Thomas A. Edison" ,
        citation:"",
    }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote =()=>{
   let randomise = Math.floor(Math.random()*5);
   return quotes[randomise]
}

/***
 * `printQuote` function
***/

// Random background color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}


const printQuote = () => {
    let randomQuote = getRandomQuote();

    html = `<p class="quote">${randomQuote.quote}</p>
            <p class="source">${randomQuote.source}`;
    if (randomQuote.hasOwnProperty('year')){
        html+= `<span class="year">${randomQuote.year}</span>`;
    }
    if(randomQuote.hasOwnProperty(`citation`)){
        html+= `<span class="citation">${randomQuote.citation}</span>`;
    }
    html += `</p>`
    document.getElementById('quote-box').innerHTML = html;
    random_bg_color();
}

let counter = 15;
let timer = setInterval(()=>{
    if (counter > 0){
        counter--;
    }
    else if(counter == 0){
        counter = 15;
        printQuote();

    }

    document.getElementById('timer').innerHTML = `<span>Next quote in: ${counter} seconds</span>`

}, 1000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// hello