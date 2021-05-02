document.getElementById('image').addEventListener('click', ci)
function ci() { document.getElementById('hi').src= "images/hello.png" }
document.getElementById("TEXT").addEventListener('click', ct)
function ct () { document.getElementById("text").innerHTML="TEXT"}
document.getElementById('hide').addEventListener('click', ht)
function ht () { document.getElementById('text').style.display="none"}
document.getElementById('show').addEventListener('click', st)
function st () {document.getElementById('text').style.display="block"}
document.getElementById('background').addEventListener('click', bgc)
function bgc (){document.body.style.backgroundColor="blue"}