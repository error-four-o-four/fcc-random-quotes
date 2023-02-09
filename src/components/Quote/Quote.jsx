import React from 'react';
import PropTypes from 'prop-types';

const getTweetUrl = (text, author) => {
  const base = 'https://twitter.com/intent/tweet';
  const params = new URLSearchParams({
    hashtags: 'quotes',
    text: encodeURI(`${text} - ${author}`),
  });
  return `${base}?${params}`;
};

const Quote = ({ author, text, src }) => {
  return (
    <>
      <img src={src} alt={`Portrait of ${author}`} />
      <p id="text">{text}</p>
      <p id="author">{author}</p>
      <a id="tweet-quote" href={getTweetUrl(text, author)} alt="Tweet quote">
        Tweet
      </a>
    </>
  );
};

Quote.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
};

export default Quote;
