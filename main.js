user = "person"
//₱
function defaultvalues(){
    localStorage.setItem("ws-name-ghjlio","User")
    localStorage.setItem("ws-svb-ghjlio","20000")
    localStorage.setItem("ws-wlb-ghjlio","2000")
    localStorage.setItem("ws-set-ghjlio", true)
    location.reload();
}
if (!localStorage.getItem("ws-set-ghjlio")){
    defaultvalues();
}
let phrase = [
    "Howdy",
    "Hey",
    "Wsg",
    "Hello",
    "Hi"
]
function openpane(x){
    $("*.pane").hide()
    $(x).show()
}
function onstart(){
    $(".cashdb h1").text(`₱${localStorage.getItem("ws-wlb-ghjlio")}`)
    $(".savedb h1").text(`₱${localStorage.getItem("ws-svb-ghjlio")}`)
}
function welcomefunc(){$(".texterm h1").text(`${phrase[Math.floor(Math.random() * 4)]}, ${user}!`);}
$(document).ready(function () {
    welcomefunc()
    onstart()
});