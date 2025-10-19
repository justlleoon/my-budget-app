let user = "Web";
let phrase = [
    "Howdy",
    "Hey",
    "Wsg",
    "Hello",
    "Hi"
]
function openpane(x){
    $(".pane").hide()
    $(x)
}
function welcomefunc(){$(".texterm h1").text(`${phrase[Math.floor(Math.random() * 4)]}, ${user}!`);}
$(document).ready(function () {
    welcomefunc()
});