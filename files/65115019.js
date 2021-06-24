$('.wf-btn').click(function() {
  $('.wf-btn').removeClass('active');  // we remove class for all btn
  $(this).addClass('active');  // we add class to the current btn
  
  // we set all img src btn with _blue.png to _grey.png
  $('.wf-btn').each(function() { 
    var SRCLoop = $(this).find('img').attr('src');
    
    if (SRCLoop.substr(SRCLoop.length-9) == '_blue.png') {
     var newSRCLoop = SRCLoop.replace('_blue.png','');
     $(this).find('img').attr('src', newSRCLoop + '_grey.png');
    }
  });

  var btnSRC = $(this).find('img').attr('src'); // we get the src of the current img btn
  
  // we change src img btn
  if (btnSRC.substr(btnSRC.length-9) != '_blue.png') {
   var newSRC = btnSRC.replace('_grey.png','');
   $(this).find('img').attr('src', newSRC + '_blue.png'); 
  } else {
   var newSRC = btnSRC.replace('_blue.png','');
   $(this).find('img').attr('src', newSRC + '_grey.png');   
  }
})
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div id="worldfilter">
    <button class="wf-btn active"><img src="world_blue.png"> Welt </button>
    <button class="wf-btn"><img src="europe_grey.png"></button>
    <button class="wf-btn"><img src="north_america_grey.png"></button>
    <button class="wf-btn"><img src="south_america_grey.png"></button>
    <button class="wf-btn"><img src="africa_grey.png"></button>
    <button class="wf-btn"><img src="orient_grey.png"></button>
    <button class="wf-btn"><img src="asia_grey.png"></button>
    <button class="wf-btn"><img src="oceania_grey.png"></button>
  </div>