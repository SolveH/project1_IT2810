var cakebtn = document.getElementById("cakebtn");
var muffinbtn = document.getElementById("muffinbtn");
var piebtn = document.getElementById("piebtn");
var cakecontent = document.getElementById("cakecontent");
var muffincontent = document.getElementById("muffincontent");
var piecontent = document.getElementById("piecontent");
function cakecontentClick(){
    cakebtn.style.backgroundColor = "#008CBA";
    cakebtn.style.color = "#fff";
    muffinbtn.style.backgroundColor = "#fff";
    muffinbtn.style.color = "#000";
    piebtn.style.backgroundColor = "#fff";
    piebtn.style.color = "#000";
    cakecontent.style.display = "inline";
    muffincontent.style.display = "none";
    piecontent.style.display = "none";
}
function muffincontentClick(){
    cakebtn.style.backgroundColor = "#fff";
    cakebtn.style.color = "#000";
    muffinbtn.style.backgroundColor = "#008CBA";
    muffinbtn.style.color = "#fff";
    piebtn.style.backgroundColor = "#fff";
    piebtn.style.color = "#000";
    cakecontent.style.display = "none";
    muffincontent.style.display = "inline";
    piecontent.style.display = "none";
}
function piecontentClick(){
    cakebtn.style.backgroundColor = "#fff";
    cakebtn.style.color = "#000";
    muffinbtn.style.backgroundColor = "#fff";
    muffinbtn.style.color = "#000";
    piebtn.style.backgroundColor = "#008CBA";
    piebtn.style.color = "#fff";
    cakecontent.style.display = "none";
    muffincontent.style.display = "none";
    piecontent.style.display = "inline";
}

cakecontentClick();