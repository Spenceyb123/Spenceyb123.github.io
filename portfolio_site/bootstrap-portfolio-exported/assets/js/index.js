//smooth scroll from nav links

$("#landing-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        "slowly");
});

//lebron pic toggler

let lebronToggle = document.getElementById("lebron-toggle");

lebronToggle.onclick = function(e){
    if (lebronToggle.src === "https://spencebrown.github.io/assets/img/lebron_before.jpg")
 {
        lebronToggle.src = "https://spencebrown.github.io/assets/img/lebron_after-text.jpg";
    } else {
        lebronToggle.src = "https://spencebrown.github.io/assets/img/lebron_before.jpg";
    }
}; 