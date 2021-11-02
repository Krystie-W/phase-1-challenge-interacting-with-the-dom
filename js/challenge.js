//count seconds up from 1
let counter = document.querySelector('#counter');
let seconds = 0
let intervalId = 0


document.addEventListener("DOMContentLoaded", () => {
intervalId = setInterval(increment, 1000);
});

function increment () {
counter.innerHTML = seconds++;
};

//event listener on minus button to decrease counter
const minusButton = document.querySelector('#minus')

minusButton.addEventListener('click', () => {
    counter.innerHTML = seconds--;
});


//event listener on plus to increase counter
const plusButton = document.querySelector('#plus')

plusButton.addEventListener('click', () => {
    counter.innerHTML = seconds++;
});

//event listener on heart to record that the number is liked and write the like comment below it
const heartButton = document.querySelector('#heart');
let likes = document.querySelector('.likes');
const numbersLiked = [];
let howMany;
let uniqueArray = [];

heartButton.addEventListener('click', () => {
    likes.innerHTML = "";
    const currentNumberLiked = seconds -1;
    numbersLiked.push(currentNumberLiked);
    render(numbersLiked);
    });


function findingLikes (num) {
    const newArray = numbersLiked.filter(number => number === num);
    howMany = newArray.length;
}

function unique (array) {
    uniqueArray = array.filter(function(itm, i, a) {
        return i === array.indexOf(itm);
    });
    };

const render = (arrayLiked) => {
    let html = '';
    unique(arrayLiked);
    uniqueArray.forEach(element => {
        findingLikes(element);
        if(howMany <= 1) {
            html = html + `<li> ${element} has been liked 1 time </li>`;
        } else html = html +`<li> ${element} has been liked ${howMany} times </li>`;
    });
    return likes.innerHTML = html;
};
   


//event listener on the pause button to stop counter and grey out the other buttons (all other buttons) and for the button text to change to "resume".
//event listener on the resume button to resume counter and ungrey the rest of the buttons
const pauseButton = document.querySelector('#pause')
let pauseButtonStatus = 'Counting';

pauseButton.addEventListener('click', () => {
    if (pauseButtonStatus === 'Counting') {
        pauseButtonStatus = 'Stopped';
        clearInterval(intervalId);
        pauseButton.innerHTML = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        submitButton.disabled = true;
        heartButton.disabled = true;
    } else if (pauseButtonStatus === 'Stopped') {
        intervalId = setInterval(increment, 1000);
        pauseButtonStatus = 'Counting';
        pauseButton.innerHTML = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        submitButton.disabled = false;
        heartButton.disabled = false;
    }
});


//event listener on the submit button to take the text input and insert as a comment

const submitButton = document.querySelector('#submit');
const submitForm = document.querySelector('#comment-form');
const commentText = document.querySelector('#comment-input');
const storeComments = document.querySelector('#list');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateComment(commentText.value);
    submitForm.reset();
})


function updateComment (text) {
    const newListItem = document.createElement ('li');
    newListItem.innerHTML = `${text}`;
    storeComments.appendChild(newListItem);
}