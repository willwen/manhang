
const url = "http://app.linkedin-reach.io/words";

let header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data'
});


// let myHeaders = new Headers({
//     "Content-Type": "text/plain",
//     "Content-Length": content.length.toString(),
//     "X-Custom-Header": "ProcessThisImmediately",
// });

let fetchOptions = {
    // mode: 'no-cors',
    method: 'GET',
    // credentials: 'include',
    headers: {
        "Access-Control-Allow-Origin": '*',
        "Content-Type": 'text/plain'
    }
}

//====INITIATES GAME once response is obtained.
fetch("../words.txt", fetchOptions)
    // fetch(url, fetchOptions)
    .then(res => {

        // if response is ok
        if (res.ok) {
            
            return res.text();//a promise
        } else {
            console.error(res)
            throw new Error('ERROR: Network response wat not ok.');

        }
    })
    .then(text => {

        //may have to restructure so that gui loads before all the response
        //====INITIATES GAME
        initGame(text.split('\n'));
    });



// Original function I used for my typing game
//-------------------------------------
function stringOfWordsToArray(wordsToFilter) {

    //separate string by line breaks and join by spaces
    let arrayOfAllWords = wordsToFilter.split('\n').join(' ');

    //remove '.' / only one such entry
    arrayOfAllWords = arrayOfAllWords.split('.').join(' ');

    // remove ','
    arrayOfAllWords = arrayOfAllWords.split(',').join(' ');

    //split by spaces and returs array
    arrayOfAllWords = arrayOfAllWords.split(' ');

    return arrayOfAllWords;
}