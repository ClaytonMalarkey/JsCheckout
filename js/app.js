
let redbuttonClicked = document.getElementById("redbutton");
redbuttonClicked.addEventListener(`click`, redbuttonFunction);


let yellowbuttonClicked = document.getElementById("yellowbutton");
yellowbuttonClicked.addEventListener(`click`, yellowbuttonFunction);


let blackbuttonClicked = document.getElementById("blackbutton");
blackbuttonClicked.addEventListener(`click`, blackbuttonFunction);


function redbuttonFunction () {
    Cookies.set('backgroundColor', 'red');
}
function yellowbuttonFunction () {
    Cookies.set('backgroundColor', 'yellow');
}

function blackbuttonFunction () {
    Cookies.set('backgroundColor', 'black');
}





