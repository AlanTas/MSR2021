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
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == 'block') {
            slides[i].className = slides[i].className.replace("r1", "r2");
        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (document.querySelectorAll('.mySlides.r2').length == 0) {
        // first slide to fade....
        slides[slideIndex-1].style.display = "block";
    }
    dots[slideIndex-1].className += " active";
}

document.querySelectorAll('.mySlides').forEach(function(ele) {
    ele.addEventListener('animationend', function(e) {
        var prevEle = document.querySelector('.mySlides.r2');
        if (prevEle != null) {
            prevEle.style.display = 'none';
            prevEle.classList.remove("r2");
            prevEle.classList.add("r1");
            var slides = document.getElementsByClassName("mySlides");
            slides[slideIndex - 1].style.display = "block";
        }
    })
})
/* animation Classes start */
.r1 {
    animation: fadeInUp 1000ms both
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
.r2 {
    animation: fadeOutUp 1000ms both
}
@keyframes fadeOutUp {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
}
/* animation Classes End */
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
/* Slideshow container */
.slideshow-container {
    position: relative;
    background: #f1f1f1f1;
}
/* Slides */
.mySlides {
    display: none;
    padding: 80px;
    text-align: center;
}
/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -30px;
    padding: 16px;
    color: #888;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
}
/* Position the "next button" to the right */
.next {
    position: absolute;
    right: 0;
    border-radius: 3px 0 0 3px;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
    color: white;
}
/* The dot/bullet/indicator container */
.dot-container {
    text-align: center;
    padding: 20px;
    background: #ddd;
}
/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}
/* Add a background color to the active dot/circle */
.active, .dot:hover {
    background-color: #717171;
}
/* Add an italic font style to all quotes */
q {font-style: italic;}

/* Add a blue color to the author */
.author {color: cornflowerblue;}
<div class="slideshow-container">

    <div class="mySlides r1">
        <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
        <p class="author">- John Keats</p>
    </div>

    <div class="mySlides r1">
        <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
        <p class="author">- Ernest Hemingway</p>
    </div>

    <div class="mySlides r1">
        <q>I have not failed. I've just found 10,000 ways that won't work.</q>
        <p class="author">- Thomas A. Edison</p>
    </div>

    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>

</div>

<div class="dot-container">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
</div>
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
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == 'block') {
            slides[i].className = slides[i].className.replace("r1", "r2");
        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (document.querySelectorAll('.mySlides.r2').length == 0) {
        // first slide to fade....
        slides[slideIndex-1].style.display = "block";
    }
    dots[slideIndex-1].className += " active";
    setTimeout(function() {
        var prevEle = document.querySelector('.mySlides.r2');
        if (prevEle != null) {
            prevEle.style.display = 'none';
            prevEle.classList.remove("r2");
            prevEle.classList.add("r1");
            var slides = document.getElementsByClassName("mySlides");
            slides[slideIndex - 1].style.display = "block";
        }
    }, 200);
}
/* animation Classes start */
.r1 {
    animation: fadeInUp 1000ms both
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
.r2 {
    animation: fadeOutUp 1000ms both
}
@keyframes fadeOutUp {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
}
/* animation Classes End */
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
/* Slideshow container */
.slideshow-container {
    position: relative;
    background: #f1f1f1f1;
}
/* Slides */
.mySlides {
    display: none;
    padding: 80px;
    text-align: center;
}
/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -30px;
    padding: 16px;
    color: #888;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
}
/* Position the "next button" to the right */
.next {
    position: absolute;
    right: 0;
    border-radius: 3px 0 0 3px;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
    color: white;
}
/* The dot/bullet/indicator container */
.dot-container {
    text-align: center;
    padding: 20px;
    background: #ddd;
}
/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}
/* Add a background color to the active dot/circle */
.active, .dot:hover {
    background-color: #717171;
}
/* Add an italic font style to all quotes */
q {font-style: italic;}

/* Add a blue color to the author */
.author {color: cornflowerblue;}
<div class="slideshow-container">

    <div class="mySlides r1">
        <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
        <p class="author">- John Keats</p>
    </div>

    <div class="mySlides r1">
        <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
        <p class="author">- Ernest Hemingway</p>
    </div>

    <div class="mySlides r1">
        <q>I have not failed. I've just found 10,000 ways that won't work.</q>
        <p class="author">- Thomas A. Edison</p>
    </div>

    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>

</div>

<div class="dot-container">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
</div>