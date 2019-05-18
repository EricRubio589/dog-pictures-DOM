

function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(responseJson => displayDogs(responseJson));
}

function handleButtonSubmit() {
    $('.formContainer').on('submit', 'form', function repeatFetch(event) {
        event.preventDefault();
        let numberOfDogs = document.getElementById("numberInput").value
        logThePictures(numberOfDogs)
        console.log(numberOfDogs)
        $('.picturesContainer').empty();
    });
}

function logThePictures(number) {
    for (let i=0; i<number; i++){
        getImage();
    }
}

function displayDogs(responseJson) {
    $('.picturesContainer').show()
    $('.picturesContainer')
    .append(`<img src="${responseJson.message}" class="results-img">`);
    console.log(responseJson.message);
}

$(function initialize() {
    console.log("waiting for user selection");
    handleButtonSubmit();
})