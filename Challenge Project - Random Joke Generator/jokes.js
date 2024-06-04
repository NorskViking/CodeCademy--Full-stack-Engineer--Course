import data from './jokes.json' assert { type: 'json'};

const jokes = data;
const joke = Math.floor(Math.random() * jokes.length);

const getJoke = jokes[joke].joke;

console.log(getJoke);