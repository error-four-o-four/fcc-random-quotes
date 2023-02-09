import path from 'path';
import fs from 'fs';

// const api_urls = ['https://zenquotes.io/api/quotes', 'https://type.fit/api/quotes'];

const url = 'https://type.fit/api/quotes';

const onError = (err) => err && console.error(err);

const scrape = async () => {
	const data = await fetch(url);
	const json = await data.json();
	const file = path.join(process.cwd(), 'src', 'assets', 'quotes.json');
	await fs.writeFile(file, JSON.stringify(json), onError);
};

scrape();

