function handleError(err) {
    console.log('Error');
    console.log(err);
}
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.acudit p');

const endpoint = 'http://api.icndb.com/jokes/random';
const jokePromise = fetch(endpoint);

async function getJoke() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.value;

    // jokePromise.then(res => {
    //     return res.json();
    // }).then(data => {
    //     return data;
    // }).catch(handleError);
}

function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if(item === not) {
        console.log('Ahh we used that one last time, look again');
        return randomItemFromArray(arr, not);
    }
    return item;

}

async function handleClick() {
    const { joke } = await getJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(
        buttonText,
        jokeButton.textContent
    );
}

jokeButton.addEventListener('click', handleClick);



const buttonText = [
    'lol',
    'Ugh',
    'omg',
    'please stop',
    'that was the worst one',
];