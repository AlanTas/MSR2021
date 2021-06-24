$(document).ready(function() {
        /*Look here*/

        $('.pour')
            .css({
                height: '360px'
            })
            .delay(0)
            .slideUp(500);

        $('#liquid')
            .css({
                height: '170px'
            });

        $('.beer-foam')
            .css({
                bottom: '200px'
            });
       
    });
body { background-color: #0065bd }
    
    h2 {
        margin: 0 auto;
        width: 400px;
        font-size: 36px;
        text-align: center;
        font-family: 'Lato', Arial, sans-serif;
        color: whiteSmoke;
    }
    
    #container {
        height: 370px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        top: -20px;
        width: 248px;
    }
    
    #container div { position: absolute; }
    
    .pour {
        position: absolute;
        left: 45%;
        width: 20px;
        height: 0px;
        background-color: #0065bd;
        border-radius: 10px
    }
    
    #beaker {
        border: 10px solid #FFF;
        border-top: 0;
        border-radius: 0 0 30px 30px;
        height: 200px;
        left: 14px;
        bottom: 0;
        width: 200px;
    }
    
    #beaker:before,
    #beaker:after {
        border: 00px solid #FFF;
        border-bottom: 0;
        border-radius: 30px 30px 0 0;
        content: '';
        height: 30px;
        position: absolute;
        top: -40px;
        width: 30px;
    }
    
    #beaker:before { left: -50px; }
    #beaker:after { right: -50px; }
    
    #liquid {
        background-color: #0065bd;
        border: 10px solid #0065bd;
        border-radius: 0 0 20px 20px;
        bottom: 0;
        height: 0px;
        overflow: hidden;
        width: 180px;
    }
    
    #liquid:after {
        background-color: rgba(255, 255, 255, 0.25);
        bottom: -10px;
        content: '';
        height: 200px;
        left: -40px;
        position: absolute;
        transform: rotate(30deg);
        -webkit-transform: rotate(15deg);
        width: 110px;
    }
    
    #liquid .bubble {
        -webkit-animation-name: bubble;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        background-color: rgba(255, 255, 255, 0.2);
        bottom: 0;
        border-radius: 10px;
        height: 20px;
        width: 20px;
    }
    
    @-webkit-keyframes bubble {
        0% { bottom: 0; }
        
        50% {
            background-color: rgba(255, 255, 255, 0.2);
            bottom: 80px;
        }
        
        100% {
            background-color: rgba(255, 255, 255, 0);
            bottom: 160px;
        }
    }
    
    .bubble1 {
        left: 10px;
        -webkit-animation-delay: 1000ms;
        -webkit-animation-duration: 1000ms;
    }
    
    .bubble2 {
        left: 50px;
        -webkit-animation-delay: 700ms;
        -webkit-animation-duration: 1100ms;
    }
    
    .bubble3 {
        left: 100px;
        -webkit-animation-delay: 1200ms;
        -webkit-animation-duration: 1300ms;
    }
    
    .bubble4 {
        left: 130px;
        -webkit-animation-delay: 1100ms;
        -webkit-animation-duration: 700ms;
    }
    
    .bubble5 {
        left: 170px;
        -webkit-animation-delay: 1300ms;
        -webkit-animation-duration: 800ms;
    }
    
    /* Foam */
    
    .beer-foam {
        position: absolute;
        bottom: 10px;
    }
    
    .foam-1, .foam-2, .foam-3, .foam-4,
    .foam-5, .foam-6, .foam-7 {
        float: left;
        position: absolute;
        z-index: 999;
        width: 50px;
        height: 50px;
        border-radius: 30px;
        background-color: #fefefe;
    }
    .foam-1 {
        top: -30px;
        left: -10px;
    }
    .foam-2 {
        top: -35px;
        left: 20px;
    }
    .foam-3 {
        top: -25px;
        left: 50px;
    }
    .foam-4 {
        top: -35px;
        left: 80px;
    }
    .foam-5 {
        top: -30px;
        left: 110px;
    }
    .foam-6 {
        top: -20px;
        left: 140px;
    }
    .foam-7 {
        top: -30px;
        left: 160px;
    }
    
    /* Drunk Text */
    
    @-moz-keyframes drunk {
        0% {
            -moz-transform: rotate(0);
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        20%, 60% {
            -moz-transform: rotate(80deg);
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        40% {
            -moz-transform: rotate(60deg);
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        80% {
            -moz-transform: rotate(60deg) translateY(0); opacity: 1;
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        100% {
            -moz-transform: translateY(700px);
            opacity: 0;
        }
    }
    
    @keyframes drunk {
        0% {
            transform: rotate(0);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        
        20%, 60% {
            transform: rotate(80deg);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        
        40% {
            transform: rotate(60deg);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        
        80% {
            transform: rotate(60deg) translateY(0);
            opacity: 1; transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        100% {
            tran
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div id="container">
    <div class="pour"></div>
    <div id="beaker">
        <div class="beer-foam">
            <div class="foam-1"></div>
            <div class="foam-2"></div>
            <div class="foam-3"></div>
            <div class="foam-4"></div>
            <div class="foam-5"></div>
            <div class="foam-6"></div>
            <div class="foam-7"></div>
        </div>
        
        <div id="liquid">
            
            <div class="bubble bubble1"></div>
            <div class="bubble bubble2"></div>
            <div class="bubble bubble3"></div>
            <div class="bubble bubble4"></div>
            <div class="bubble bubble5"></div>
        </div>
    </div>
</div>

<h2 class="animated drunk">Please Wait! While you are entered in Game</h2>
$(document).ready(function() {
        /*Look here*/

        setTimeout( () => {
            $('.bubble').css("animation-play-state", "paused");
        }, 5700)

        $('.pour')
            .delay(2000)
            .animate({
                height: '360px'
            }, 1500)
            .delay(1600)
            .slideUp(500);

        $('#liquid')
            .delay(3400)
            .animate({
                height: '170px'
            }, 2500);

        $('.beer-foam')
            .delay(3400)
            .animate({
                bottom: '200px'
            }, 2500);
       
    });
body { background-color: #0065bd }
    
    h2 {
        margin: 0 auto;
        width: 400px;
        font-size: 36px;
        text-align: center;
        font-family: 'Lato', Arial, sans-serif;
        color: whiteSmoke;
    }
    
    #container {
        height: 370px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        top: -20px;
        width: 248px;
    }
    
    #container div { position: absolute; }
    
    .pour {
        position: absolute;
        left: 45%;
        width: 20px;
        height: 0px;
        background-color: #0065bd;
        border-radius: 10px
    }
    
    #beaker {
        border: 10px solid #FFF;
        border-top: 0;
        border-radius: 0 0 30px 30px;
        height: 200px;
        left: 14px;
        bottom: 0;
        width: 200px;
    }
    
    #beaker:before,
    #beaker:after {
        border: 00px solid #FFF;
        border-bottom: 0;
        border-radius: 30px 30px 0 0;
        content: '';
        height: 30px;
        position: absolute;
        top: -40px;
        width: 30px;
    }
    
    #beaker:before { left: -50px; }
    #beaker:after { right: -50px; }
    
    #liquid {
        background-color: #0065bd;
        border: 10px solid #0065bd;
        border-radius: 0 0 20px 20px;
        bottom: 0;
        height: 0px;
        overflow: hidden;
        width: 180px;
    }
    
    #liquid:after {
        background-color: rgba(255, 255, 255, 0.25);
        bottom: -10px;
        content: '';
        height: 200px;
        left: -40px;
        position: absolute;
        transform: rotate(30deg);
        -webkit-transform: rotate(15deg);
        width: 110px;
    }
    
    #liquid .bubble {
        -webkit-animation-name: bubble;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        background-color: rgba(255, 255, 255, 0.2);
        bottom: 0;
        border-radius: 10px;
        height: 20px;
        width: 20px;
    }
    
    @-webkit-keyframes bubble {
        0% { bottom: 0; }
        
        50% {
            background-color: rgba(255, 255, 255, 0.2);
            bottom: 80px;
        }
        
        100% {
            background-color: rgba(255, 255, 255, 0);
            bottom: 160px;
        }
    }
    
    .bubble1 {
        left: 10px;
        -webkit-animation-delay: 1000ms;
        -webkit-animation-duration: 1000ms;
    }
    
    .bubble2 {
        left: 50px;
        -webkit-animation-delay: 700ms;
        -webkit-animation-duration: 1100ms;
    }
    
    .bubble3 {
        left: 100px;
        -webkit-animation-delay: 1200ms;
        -webkit-animation-duration: 1300ms;
    }
    
    .bubble4 {
        left: 130px;
        -webkit-animation-delay: 1100ms;
        -webkit-animation-duration: 700ms;
    }
    
    .bubble5 {
        left: 170px;
        -webkit-animation-delay: 1300ms;
        -webkit-animation-duration: 800ms;
    }
    
    /* Foam */
    
    .beer-foam {
        position: absolute;
        bottom: 10px;
    }
    
    .foam-1, .foam-2, .foam-3, .foam-4,
    .foam-5, .foam-6, .foam-7 {
        float: left;
        position: absolute;
        z-index: 999;
        width: 50px;
        height: 50px;
        border-radius: 30px;
        background-color: #fefefe;
    }
    .foam-1 {
        top: -30px;
        left: -10px;
    }
    .foam-2 {
        top: -35px;
        left: 20px;
    }
    .foam-3 {
        top: -25px;
        left: 50px;
    }
    .foam-4 {
        top: -35px;
        left: 80px;
    }
    .foam-5 {
        top: -30px;
        left: 110px;
    }
    .foam-6 {
        top: -20px;
        left: 140px;
    }
    .foam-7 {
        top: -30px;
        left: 160px;
    }
    
    /* Drunk Text */
    
    @-moz-keyframes drunk {
        0% {
            -moz-transform: rotate(0);
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        20%, 60% {
            -moz-transform: rotate(80deg);
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        40% {
            -moz-transform: rotate(60deg);
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        80% {
            -moz-transform: rotate(60deg) translateY(0); opacity: 1;
            -moz-transform-origin: top left;
            -moz-animation-timing-function: ease-in-out;
        }
        
        100% {
            -moz-transform: translateY(700px);
            opacity: 0;
        }
    }
    
    @keyframes drunk {
        0% {
            transform: rotate(0);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        
        20%, 60% {
            transform: rotate(80deg);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        
        40% {
            transform: rotate(60deg);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        
        80% {
            transform: rotate(60deg) translateY(0);
            opacity: 1; transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        100% {
            tran
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div id="container">
    <div class="pour"></div>
    <div id="beaker">
        <div class="beer-foam">
            <div class="foam-1"></div>
            <div class="foam-2"></div>
            <div class="foam-3"></div>
            <div class="foam-4"></div>
            <div class="foam-5"></div>
            <div class="foam-6"></div>
            <div class="foam-7"></div>
        </div>
        
        <div id="liquid">
            
            <div class="bubble bubble1"></div>
            <div class="bubble bubble2"></div>
            <div class="bubble bubble3"></div>
            <div class="bubble bubble4"></div>
            <div class="bubble bubble5"></div>
        </div>
    </div>
</div>

<h2 class="animated drunk">Please Wait! While you are entered in Game</h2>
 #liquid .bubble {
        visibility: hidden;  /*Look here*/
        -webkit-animation-name: bubble;
        -webkit-animation-iteration-count: 3;   /*Look here*/
        -webkit-animation-timing-function: linear;
        background-color: rgba(255, 255, 255, 0.2);
        bottom: 0;
        border-radius: 10px;
        height: 20px;
        width: 20px;
    }
    
    @-webkit-keyframes bubble {
        0% { visibility: visible;  /*Look here*/
             bottom: 0; }
        
        50% {
            background-color: rgba(255, 255, 255, 0.2);
            bottom: 80px;
        }
        
        100% {
            background-color: rgba(255, 255, 255, 0);
            bottom: 160px;
        }
    }
