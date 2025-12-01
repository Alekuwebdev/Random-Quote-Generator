// 1. A list of quotes (you can add more!)
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    }
];

// 2. Select elements from the HTML by their ID
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// 3. The function that generates a random quote
function generateQuote() {
    // Generate a random index based on the quotes array length
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update the text content in the HTML
    quoteEl.textContent = `"${randomQuote.quote}"`;
    authorEl.textContent = randomQuote.author;
}

// 4. Add an "event listener" for the button click
newQuoteBtn.addEventListener('click', generateQuote);

// Load a quote when the page first opens
generateQuote();
