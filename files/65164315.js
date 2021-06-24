$('#startButton').on('click', function() {
    // run animation on click
    document.getElementById("rightHand").animate([
        { transform: 'translateY(80px)' }, 
        { transform: 'translateY(0px)' }
    ], {
        duration: 100
    });

    // say after 3 seconds to trigger secondpart

    setTimeout(function(){ secondpart(); }, 3000);
    
    });


function secondpart()
{   
        //run second part
    $('#portfolio').show();
    $('.footer').show();
    var hash = $('#portfolioSection');
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800);

    }
