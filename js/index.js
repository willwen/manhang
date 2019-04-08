'use strict';
function initGame(ALL_WORDS) {
    let singleWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];

    console.log('word: ' + singleWord);

    //create a string of the lenght of the word that holds the length of of the word in blanks
    let blanksString = '';

    for (let i = 0; i < singleWord.length; i++) {
        blanksString += '_';
    }

    //check length is same as blanks
    console.log('lenght equal:', blanksString.length === singleWord.length);

    //add blanks to div
    document.querySelector('#word-display').innerText = blanksString;

    /* create a for loop, loop through lenght of word.
    
    Reveal letter: if word [i] matches letter, add letter in spot of the new blank, 
    If word[i] === letter, blank[i] = letter
    will need temporary word

    if all letters match , game should end
    if there is no match, there should be an increase in the number of missed, and if it reaches 6, the game should end
    */

    for (let i = 0; i < singleWord.length; i++) {

    }


    addListeners();
}

function addListeners() {
    let input = document.querySelector('main>input');
    let displayUsedLettersP = document.querySelector('#display-used-letters');

    console.log(displayUsedLettersP)

    input.addEventListener('input', (evt) => {
        let letter = evt.target.value;
        displayUsedLettersP.innerHTML += letter + " ";
        input.value = '';


    })
}

