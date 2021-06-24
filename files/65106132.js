const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav__list");

hamburger.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
});


const hamburgerBtn = document.querySelector('.hamburger');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerOpen) {
        hamburgerBtn.classList.add('open');
        hamburgerOpen = true;
    } else {
        hamburgerBtn.classList.remove('open');
        hamburgerOpen = false;
    }
});
:root {
    --fw-normal: 400;
    --fw-dark: 600;
    --fw-bold: 700;

    /***Colors***/
    --clr-primary: #333;
    --clr-text: #fafafa;
    --clr-blue: #22a7ff;
    --clr-purple: #871e5f;
    --clr-green: #19a356;
    --clr-yellow: #ffff2e;
    --clr-red: #cd1a21; 
    --clr-orange: #ff4500;

    /*** Font and Typography ***/
    --ff-body: Georgia, "Times New Roman", Times, serif;
    --ff-header: Verdana, Arial, Helvetica, sans-serif;
    --fs-header: 4.5rem;
    --fs-header1: 2.5rem;
    --fs-header2: 1.5rem;
    --fs-header3: 1.2rem;
    --fs-lg-para: 1.1rem;
    --fs-md-para: 1rem;
    --fs--sm-para: .938rem;

    /*** z index ***/
    --z-index: 99;
}





/***************************************************
2. #Global Styles
***************************************************/

*, ::before, ::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    font-family: var(--ff-body);
    background: var(--clr-text);
    color: var(--clr-primary);
    font-size: var(--fs-para);
    line-height: 1.6;
}

a {
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 2px;
    padding:  1.25em;
    display: inline-block;
    width: 100%;
    text-align: center;
    transition:all .5s;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--ff-header);
    margin: 0;
}

p {
    margin: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* img {
    max-width: 100%;
    width: 100%;
    height: auto;
} */





/************************************************
3. #Typography
************************************************/

    /* Navigation Bar & Hero Section*/
.bg-hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--clr-blue);
    transition: .5s;
}

.navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-right: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__list {
        right: -100%;
        opacity: 0;
    }
.open{
  
        right: 0;
  opacity:1;
}

@media screen and (max-width: 48em) {
    .nav__list {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 80%;
        background: rgba(255,255,255, 0.3);
        backdrop-filter: blur(10px);
        z-index: var(--z-index);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .2s;
        opacity: 0;
    }
}

html .open {
    right: 0;
  opacity:1;
}

.nav__link {
    color: var(--clr-text);
    font-weight: var(--fw-normal);
    font-size: var(--fs-lg-para);
}

.nav__link:hover {
    color: var(--clr-purple);
}

.shopping-cart {
    margin-right: 2em;
    color: var(--clr-text);
}

.social__media {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3em;
    margin-top: 3em;
}

.sm__link {
    background: var(--clr-text);
    width: 2.7em;
    height: 2.7em;
    margin: 1em .625em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sm__link i {
    transition: .1s linear;
}

.sm__link:hover i {
    transform: scale(1.5);
}

.sm__facebook {
    font-size: 1.5rem;
    color: #4267b2;
}

.sm__twitter {
    font-size: 1.5rem;
    color: #1da1f2;
}

.sm__instagram {
    font-size: 1.5rem;
    color: #000;
}

.social__contact {
    display: none;
}





/*****************************************************
4. #Components
*****************************************************/

/*4.1 Cart Basket*/
.cart-item {
    background: linear-gradient(-270deg, #ff7800 8.6%, #ff5000 99.58%, #ff5000 100%);
    border-radius: 50%;
    padding: 1px 3px 2px;
}
 /*4.2 Buttons*/
 .btn-main {
    display: inline-block;
    width: 18em;
    max-width: 100%;
    height: 3em;
    padding: .5em 1.25em;
    border-radius: 1.563em;
    margin-top: 2.5em;
    background: linear-gradient(-270deg, #ff7800 8.6%, #ff5000 99.58%, #ff5000 100%);
    color: var(--clr-text);
    font-weight: 600;
    font-size: .88rem;
}

.fa-angle-right {
    color: #ff7800;
    background: var(--clr-text);
    border-radius: 50%;
    padding: .438em;
    margin-right: -.938em;
}

.btn-main:focus,
.fa-arrow-right:focus {
    color: var(--clr-primary);
    opacity: 0.1;
}

.btn-main:hover,
.fa-arrow-right:hover {
    color: var(--clr-primary);
}

/*4.3 Hamburger*/
.hamburger {
    position: absolute;
    cursor: pointer;
    right: 2%;
    top: 50%;
    transform: translate(-5%,-50%);
    z-index: var(--z-index);
}

.hamburger-btn {
    width: 20px;
    height: 3px;
    background: var(--clr-text);
    margin: .625em;
    transition: all .5s ease-in-out;
}

.hamburger-btn::before,
.hamburger-btn::after {
    content: '';
    position: absolute;
    width:20px;
    height: 3px;
    background: var(--clr-text);
    border-radius: 5px;
    transition: all .5s ease-in-out;
}

.hamburger-btn::before {
    transform: translateY(-7px);
}

.hamburger-btn::after {
    transform: translateY(7px);
}

.hamburger.open .hamburger-btn {
    transform: translateX(-50px);
    background: transparent;
}

.hamburger.open .hamburger-btn::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.hamburger.open .hamburger-btn::after {
    transform: rotate(-45deg) translate(35px, 35px);
}
<section class="bg-hero">
         <nav class="navbar">
            <a href="#" class="company-brand"><img src="#" alt="#" class="#"><span>X&L Limited</span></a>
            <ul class="nav__list">
               <li class="nav__list-item"><a href="" class="nav__link"></a></li>
               <li class="nav__list-item"><a href="" class="nav__link">Products</a></li>
               <li class="nav__list-item"><a href="" class="nav__link">Our Story</a></li>
               <li class="nav__list-item"><a href="" class="nav__link">Blog</a></li>
               <li class="nav__list-item"><a href="" class="nav__link">Contact Us</a></li>
               <div class="social__media">
                  <a href="#" class="sm__link"><i class="fab fa-facebook-f sm__facebook"></i></a>
                  <a href="#" class="sm__link"><i class="fab fa-twitter sm__twitter"></i></a>
                  <a href="#" class="sm__link"><i class="fab fa-instagram sm__instagram"></i></a>
               </div>
            </ul>
            <div>
               <i class="fas fa-shopping-cart fa-lg shopping-cart">&nbsp;<span class="cart-item">0</span></i>
            </div>
            <div class="hamburger">
               <div class="hamburger-btn"></div>
            </div>
         </nav>
         <div class="hero">
            <div class="contentBox">
               <h1 class="hero-title">Do you like <br><span>Smooth Skin?</span></h1>
               <p class="hero-para">Naturally, the skin is supposed to be smooth and soft, however, the only insurance for dry and oily skin is skincare products that consistently offer effective skin protection. To protect dry and oily skin, make the smart choice, because the choice is yours, and it's simple.</p>
               <a class="btn-main" href="#">View Our Products &nbsp;&nbsp;&nbsp;<i class="fas fa-angle-right fa-lg"></i></a>
            </div>
         </div>
      </section>