

function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(responseJson => console.log(responseJson))
}

function handleButtonSubmit() {
    $('.formContainer').on('submit', 'form', function repeatFetch(event) {
        event.preventDefault();
        let numberOfDogs = document.getElementById("numberInput").value
        logThePictures(numberOfDogs)
        console.log(numberOfDogs)
    });
}

function logThePictures(number) {
    for (let i=0; i<number; i++){
        getImage();
    }
}

$(function initialize() {
    console.log("waiting for user selection");
    handleButtonSubmit();
})