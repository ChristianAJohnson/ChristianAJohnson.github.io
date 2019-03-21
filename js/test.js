
// Get the modal
var modal = document.getElementById('myProjects');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeColor(i) {
    console.log("this is a test")
    document.getElementsByClassName(i)[0].style.border = "8px solid #ffffff"
}

function changeBack(x) {
    console.log("this is the reset")
    document.getElementsByClassName(x)[0].style.border = "2px solid #ffffff"
}
