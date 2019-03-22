var projectmodal = document.getElementById('myProjects');
var projectspan = document.getElementsByClassName("projectclose")[0];

projectspan.onclick = function ()
{
    projectmodal.style.display = "none";
}

window.onclick = function (event) 
{
    if (event.target == projectmodal) 
    {
        projectmodal.style.display = "none";
    }
}

var infomodal = document.getElementById('myInfo');
var infospan = document.getElementsByClassName("infoclose")[0];

infospan.onclick = function () 
{
    infomodal.style.display = "none";
}

window.onclick = function (event) 
{
    if (event.target == infomodal) 
    {
        infomodal.style.display = "none";
    }
}

var skillsmodal = document.getElementById('mySkills');
var skillspan = document.getElementsByClassName("skillsclose")[0];

skillspan.onclick = function () {
    skillsmodal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == skillsmodal) {
        skillsmodal.style.display = "none";
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
