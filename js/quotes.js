const quotes = [
  {
    quote: "Sometimes the smallest things take up the most room in your heart.",
    author: "Pooh",
  },
  {
    quote: "How do you spell love? You don't spell love, You feel it",
    author: "Pooh",
  },
  {
    quote: "Hope is the greatest of the gifts well receive.",
    author: "Belle",
  },
  {
    quote: "Today’s special moments are tomorrow’s memories.",
    author: "Aladdin",
  },
  {
    quote: "I have just met you and I love you.",
    author: "Dug",
  },
  {
    quote: "Because when I look at you, I can feel it. And I look at you and I’m home.",
    author: "Dory",
  },
  {
    quote: "Love is putting someone else’s needs before yours.",
    author: "Olaf",
  },
  {
    quote: "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
    author: "Ratatouille",
  },
  {
    quote: "The very things that hold you down are going to lift you up",
    author: "Dumbo",
  },
  {
    quote: "When life gets you down, do you wanna know what you've gotta do? Just keep swimming, swimming and swimming",
    author: "Nemo",
  },
  {
    quote: "The only thing predictable about life is it's unpredictability",
    author: "Ratatouille",
  },
  {
    quote: "Happiness is a warm puppy.",
    author: "Lucy Van Pelt",
  },
  {
    quote: "Hope is the greatest of the gifts well receive.",
    author: "Charlie Brown",
  },
  {
    quote: "Hope is the greatest of the gifts well receive.",
    author: "Sally Brown",
  }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;