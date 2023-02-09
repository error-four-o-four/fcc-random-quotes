import { useState, useEffect } from 'react';
import quotes from './assets/quotes.json';

import './App.css';

import Typewriter from './Typewriter.jsx';

const getRandomQuote = () => {
	let index = Math.floor(Math.random() * quotes.length);
	return quotes.splice(index, 1)[0];
};

// https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22If%20the%20wind%20will%20not%20serve%2C%20take%20to%20the%20oars.%22%20Latin%20Proverb
const getTweetUrl = ({text, author}) => {
  const base = 'https://twitter.com/intent/tweet'
  const params = new URLSearchParams({
    hashtags: 'quotes',
    text: encodeURI(`${text} - ${author}`),
  })
  return `${base}?${params}`
}

// https://youtu.be/b9eMGE7QtTk?t=3806
// https://www.youtube.com/watch?v=-bEzt5ISACA

function App() {
	const [quote, setQuote] = useState(null);

  const updateQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  }

	useEffect(() => {
		updateQuote();
	}, []);

	return (
		<div className="App">
			<div id="quote-box">
				{quote ? (
					<>
						<p id="text">{quote.text}</p>
						<p id="author">{quote.author}</p>
					</>
				) : (
					<p>Loading ...</p>
				)}
				<a
					id="tweet-quote"
					title="Tweet this quote!"
					target="_top"
					href={(quote) ? getTweetUrl(quote) : '#'}>
					Tweet
				</a>
				<button id="new-quote" type="button" onClick={updateQuote}>
					New quote
				</button>
			</div>
		</div>
	);
}

export default App;
