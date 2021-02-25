//smooth scroll from nav links

$("#landing-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        "slowly");
});

//lebron pic toggler

let lebronContainer = document.getElementsByClassName("lebron-pic-container")[0];

let lebronToggleSrc = document.getElementsByClassName("lebron-toggle")[0].src;

console.log(lebronToggleSrc);

lebronContainer.onclick = function(){
    console.log("clicked");
    if (lebronToggleSrc = "ssets/Images/lebron_before.jpg") {
        console.log("before");
        lebronToggleSrc = "assets/Images/lebron_after-text.jpg";
    } else {
        lebronToggleSrc = "ssets/Images/lebron_before.jpg";
    }
}; 