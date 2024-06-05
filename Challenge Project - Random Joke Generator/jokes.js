import data from './jokes.json';

function getJoke() {
    const jokes = data;
    const rand = Math.floor(Math.random() * jokes.length);
    const text = `"${jokes[rand].joke}"`
    document.getElementById('display').innerHTML = text;
}

export default getJoke;
