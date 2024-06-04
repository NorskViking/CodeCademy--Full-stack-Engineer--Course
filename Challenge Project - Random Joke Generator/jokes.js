import data from './jokes.json' assert { type: 'json'};

function getJoke() {
    const jokes = data;
    const rand = Math.floor(Math.random() * jokes.length);
    const text = `"${jokes[rand].joke}"`
    const jokeHtml = generate_html(text)
    $('.display').empty().append(jokeHtml)
    console.log(jokeHtml)
    //    document.getElementById('display').innerHTML = jokeHtml;
}

function generate_html(joke) {
    const jokeHTML = "<i>" + joke + "</i>";
    return jokeHTML;
}

export default getJoke;
