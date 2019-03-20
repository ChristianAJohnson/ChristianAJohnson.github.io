function changeColor(i) {
    console.log("this is a test")
    document.getElementsByClassName(i)[0].style.border = "8px solid #ffffff"
}

function changeBack(x) {
    console.log("this is the reset")
    document.getElementsByClassName(x)[0].style.border = "2px solid #ffffff"
}