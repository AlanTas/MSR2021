$.fn.parallax = function(resistance, mouse) {
  $e = $(this);
  gsap.to($e, 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};


$('body').mousemove(function(e) {
  $('.mouse-with img').parallax(-10, e);
});
$('body').mouseout(function(e) {
  if (!$(e.relatedTarget).closest('body').is(this))
  gsap.to($('.mouse-with img'), 0.5, {
    x: 0,
    y: 0
  });
});
html {
  font-size: 16px;
  height: 100%;
}

body {
  font-size: 1em;
  font-family: Arial, Helvetica, Sans-serif;
  color: #000;
  line-height: 100%;
  min-height: 100%;
  margin: 0px;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
}

.mouse-with {
  margin: -150px 0 0 -200px;
  position: absolute;
  top: 50%;
  left: 50%;
}

a {
  position: fixed;
  top: 10px;
  right: 10px;
}