import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
	const [{ content, carriage }, setContent] = useState({ content: '', carriage: 0 });

	useEffect(() => {
		if (carriage == text.length) return;
		const delay = setTimeout(() => {
			setContent({ content: content + text[carriage], carriage: carriage + 1 });
			clearTimeout(delay);
		}, 0 | (Math.random() * 50 + 50));
	}, [content]);

	return <p id="text">{content}</p>;
};

export default Typewriter;
