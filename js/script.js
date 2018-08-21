function mute() {
    var button = document.getElementById("myAudio");
    var button_icon = document.getElementsByClassName('button-mute');
    if (button.muted == true) {
        button.muted = false;
        button_icon[0].innerHTML = `<i class="fas fa-volume-up"></i>`;
    } else {
        button.muted = true;
        button_icon[0].innerHTML = `<i class="fas fa-volume-off"></i>`;
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}