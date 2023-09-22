const result = document.getElementById('quote');

const quote = [
    "Private people know how to post on social media all day and still live a life you know nothing about",
    "DON'T GIVE UP",
    "life is a long lesson in humility. - James M. Barrie",
    "Confident is not 'will they like me' Confident is 'I'll will be fine if they don't'.",
    "The measure of intelligence is the ability to change. - Albert Einstein",
    "The more you learn, the more you earn"
];

function quoteBtn() {
    const random = getRandomQuote();
    result.innerHTML = random;
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quote.length);
    return quote[randomIndex]
}

function reset() {
    const reset = null
    result.innerHTML = reset;
}