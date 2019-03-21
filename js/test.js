
// Get the modal
var projectmodal = document.getElementById('myProjects');

// Get the <span> element that closes the modal
var projectspan = document.getElementsByClassName("projectclose")[0];

// When the user clicks on <span> (x), close the modal
projectspan.onclick = function ()
 {
    projectmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) 
{
    if (event.target == projectmodal) {
        projectmodal.style.display = "none";
    }
}

// Get the modal
var infomodal = document.getElementById('myInfo');

// Get the <span> element that closes the modal
var infospan = document.getElementsByClassName("infoclose")[0];

// When the user clicks on <span> (x), close the modal
infospan.onclick = function () {
    infomodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == infomodal) {
        infomodal.style.display = "none";
    }
}

function changeColor(i) 
{
    document.getElementsByClassName(i)[0].style.border = "8px solid #ffffff"
}

function changeBack(x) 
{
    document.getElementsByClassName(x)[0].style.border = "2px solid #ffffff"
}
