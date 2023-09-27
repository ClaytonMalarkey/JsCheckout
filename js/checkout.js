function deletebuttonFunction () {
    Cookies.remove('backgroundColor');
}

let deletebuttonClicked = document.getElementById("deleteCookie");
deletebuttonClicked.addEventListener(`click`, deletebuttonFunction);


let cookieitem = Cookies.get("backgroundColor");

// Get the color from cookies -- This is after



// Declare a Color
let color = cookieitem;
// Change the background

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

changeBackgroundColor(color);