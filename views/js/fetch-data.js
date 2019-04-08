
const url = "http://app.linkedin-reach.io/words";

let header = new Headers({
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods": "GET, HEAD",
    "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
    "Content-Type": 'text/plain', 
    "Access-Control-Request-Method": "POST"
});
// console.log(header)


//====INITIATES GAME once response is obtained.
// fetch("../words.txt", fetchOptions)
fetch(url, {
    mode: 'cors',
    method: 'OPTIONS',
    headers: {
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": "GET, HEAD",
        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
        "Content-Type": 'text/plain', 
        "Access-Control-Request-Method": "POST"
    }
})
    .then(function (response) {

        console.log(response.headers)
        // if responseponse is ok
        if (response.ok) {

            return response.text();//a promise
        } else {
            // console.error(response)
            console.error('in else')
            throw new Error('ERROR: Network response wat not ok.');

        }
    })
    .then(text => {

        //may have to restructure so that gui loads before all the response
        //====INITIATES GAME
        initGame(text.split('\n'));
    }).catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
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