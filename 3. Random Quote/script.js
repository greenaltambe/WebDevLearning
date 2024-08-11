function generate() {
    let quotes = {
        "Oscar Wilde": "Be yourself; everyone else is already taken.",
        "Marilyn Monroe": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Frank Zappa" : "So many books, so little time.",
        "Albert Einstein": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Marcus Tullius Cicero": "A room without books is like a body without a soul.",
        "Mahatma Gandhi" : "Be the change that you wish to see in the world.",
    }

    let authors = Object.keys(quotes); // Creates an array of quotes keys

    let author = authors[Math.floor(Math.random() *authors.length)];

    document.getElementById("author").innerHTML = "-" + author;

    document.getElementById("quote").innerHTML = quotes[author];
}