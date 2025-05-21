var images = ["../images/top-images/top-image1.png", "../images/top-images/top-image2.png", "../images/top-images/top-image3.png", "../images/top-images/top-image4.png"];
var index = 0; 
setInterval(function() {
    index = (index + 1) % images.length;
    document.getElementById('top-image').src = images[index];
}, 5000);



//HOVER: "EXPERIENCE"
function hovertosee() {
    var text = getElementById(text-experience);
    text = document.innerHTML("Experience");
}

function hoverChangeBGEffect() {
    document.body.style.transition = "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    document.body.style.background = "radial-gradient(circle, rgba(234,104,10,1) 0%, rgba(7,9,10,1) 55%)";  // rgba(234,104,10,1) 0%, rgba(7,9,10,1) 79%)
}

function resethoverChangeBGEffect() {
    document.body.style.transition = "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    document.body.style.background = "radial-gradient(circle, rgba(7,9,10,1) 0%, rgba(7,9,10,1) 100%)";
}

var heading = [
    "Spot the Red Flag", "#ProfileCheck", "Catch the Scam"
];
var p = [
    "Learn about spotting the signs of an online scam.", "Does that profile represent a legit person? Learn how to differentiate a legit account to a fake one.", "Tell which is a scam and which is not."
];
var img = [
    "../images/redflags.png", "../images/verified.png", "../images/scamcatch.png"
]
var link = [
    "HTML/tutorials.html#spot", "HTML/tutorials.html#verify", "HTML/tutorials.html#catch"
]

var num = 0;

function next() {
    var textheading = document.getElementById("index-heading");
    var textParagraph = document.getElementById("index-p");
    var imageElement = document.getElementById("index-img");
    var linkElement = document.getElementById("index-link");

    num++;
    if (num >= heading.length) {
        num = 0;
    }

    textheading.innerHTML = heading[num];
    textParagraph.innerHTML = p[num];
    imageElement.src = img[num];
    linkElement.href = link[num];
}

function prev() {
    var textheading = document.getElementById("index-heading");
    var textParagraph = document.getElementById("index-p");
    var imageElement = document.getElementById("index-img");
    var linkElement = document.getElementById("index-link");

    num++;
    if (num >= heading.length-1) {
        num = 0;
    }

    textheading.innerHTML = heading[num];
    textParagraph.innerHTML = p[num];
    imageElement.src = img[num];
    linkElement.href = link[num];
}

//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY
});


