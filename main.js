user = "person"
//₱
let data = [
    {
        desc:"supercalifragilisticexpialidocious",
        price:"1000",
        act:"",
        date:"10/22/2025"
    },
    {
        desc:"no",
        price:"2000",
        act:"in",
        date:"10/22/2025"
    },
    {
        desc:"bringle guy",
        price:"1500",
        act:"out",
        date:"10/22/2025"
    },
    {
        desc:"banana shooter",
        price:"9000",
        act:"",
        date:"10/22/2025"
    },
    {
        desc:"banana man",
        price:"2000",
        act:"in",
        date:"10/22/2025"
    }
]

function set2text(){
    localStorage.setItem("ws-svb-ghjlio",document.getElementById("sv-aj").value)
    onstart()
    openpane(".homepane")
}

function setTransactions(){
    $(".transactlistfull").html("");
    for (let i = data.length - 1; i > -1; i--){
        currentData = data[i]
        $(".transactlistfull").append(`<div class="act ${currentData.act}"><b>₱${currentData.price}</b><br>${currentData.desc} on <b>${currentData.date}</b></div>`)
    }
    for (let i = data.length - 1, j = 0; i >= 0; i--, j++) {

    // Access the data using i (backward index)
        const currentData = data[i];

        console.log(`j (forward count): ${j}, i (backward index): ${i}`);

    // Assuming you have an array/object named 'data' and the properties are accessible
    // Note: currentData.data[i] inside your original loop looked suspicious, 
    // it likely should just be data[i] if 'data' is an array.
    
        $(`.${j + 1}ac`).html(`<b>₱${currentData.price}</b><br>${currentData.desc} on <b>${currentData.date}</b>`);
        if (currentData.act != ""){
            $(`.${j + 1}ac`).addClass(currentData.act);
        }
    }
}

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
    setTransactions()
}
function welcomefunc(){$(".texterm h1").text(`${phrase[Math.floor(Math.random() * 4)]}, ${user}!`);}
$(document).ready(function () {
    welcomefunc()
    onstart()
});