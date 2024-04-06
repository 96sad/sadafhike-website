alert("Welcome To Website Of Hiking");

$(document).ready(function(){
    $(".thirteenth-section-box1").hide();
    $(".btn1").click(function(){

        $(".thirteenth-section-box1").slideUp(2000);

    })

    $(".thirteenth-section-box2").hide();

    $(".btn2").click(function(){

        $(".thirteenth-section-box2").slideDown(2000);
    })

    $(".thirteenth-section-box3").hide();

    $(".btn1").click(function(){

        $(".thirteenth-section-box3").slideToggle(2000);
    })

    $(".thirteenth-section-box4").hide();

    $(".btn2").click(function(){

        $(".thirteenth-section-box4").slideToggle(2000);
    })

    $(".thirteenth-section-box5").hide();

    $(".btn1").click(function(){

        $(".thirteenth-section-box5").slideToggle(2000);
    })

    $(".thirteenth-section-box6").hide();

    $(".btn2").click(function(){

        $(".thirteenth-section-box6").slideToggle(2000);
    })

    $(".thirteenth-section-box7").hide();

    $(".btn1").click(function(){

        $(".thirteenth-section-box7").slideToggle(2000);
    })

    $(".thirteenth-section-box8").hide();

    $(".btn2").click(function(){

        $(".thirteenth-section-box8").slideToggle(2000);
    })

    $(".thirteenth-section-box9").hide();

    $(".btn1").click(function(){

        $(".thirteenth-section-box9").slideToggle(2000);
    })

    $(".thirteenth-section-box10").hide();

    $(".btn2").click(function(){

        $(".thirteenth-section-box10").slideToggle(2000);
    })

    $(".thirteenth-section-box11").hide();

    $(".btn1").click(function(){

        $(".thirteenth-section-box11").slideToggle(2000);
    })

    $(".thirteenth-section-box12").hide();

    $(".btn2").click(function(){

        $(".thirteenth-section-box12").slideToggle(2000);
    })
})



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}