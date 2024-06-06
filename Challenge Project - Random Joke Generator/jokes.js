import jokeList from './jokeList.js';

function getJoke() {
    const jokes = jokeList;
    const rand = Math.floor(Math.random() * jokes.length);
    const text = `"${jokes[rand].joke}"`
    console.log(text);
    document.getElementById('display').innerHTML = text;
}

export default getJoke;
