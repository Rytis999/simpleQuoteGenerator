 const quotes = [{
         quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
         author: "Nelson Mandela"
     },
     {
         quote: "The way to get started is to quit talking and begin doing.",
         author: "Walt Disney"
     },

     {
         quote: 'Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you cant build on it; its only good for wallowing',
         author: 'Katherine Mansfield'
     },

     {
         quote: 'Life does not have to be perfect to be wonderful.',
         author: 'Annette Funicello',

     },

     {
         quote: 'You miss 100 percent of the shots you never take',
         author: 'Wayne Gretzky',
     },

     {
         quote: 'Imagination is more important than knowledge.',
         author: 'Albert Einstein',
     },
 ]





 //  const quoteBox = document.querySelector('.quote-box');
 //  const quoteElem = document.querySelector('.quote');
 //  const authorElem = document.querySelector('.author');
 //  const newQuoteBtn = document.querySelector('.new-quote');


 //  newQuoteBtn.addEventListener('click', displayRandomQuote);

 //  function displayRandomQuote() {
 //      const randomIndex = Math.floor(Math.random() * quotes.length);
 //      const { quote, author } = quotes[randomIndex];
 //      quoteElem.textContent = quote;
 //      authorElem.textContent = author;
 //  }

 //  displayRandomQuote()




 const quoteBox = document.getElementById("quote-box");
 const quoteElem = document.getElementById("quote");
 const authorElem = document.getElementById("author");
 const newQuoteBtn = document.getElementById("new-quote");

 newQuoteBtn.addEventListener("click", displayRandomQuote);

 function displayRandomQuote() {
     const randomIndex = Math.floor(Math.random() * quotes.length);
     const { quote, author } = quotes[randomIndex];
     quoteElem.textContent = quote;
     authorElem.textContent = author;
 }

 // Display a quote when the page first loads
 displayRandomQuote();