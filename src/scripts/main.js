document.addEventListener('DOMContentLoaded', function() {
  var frame = document.getElementById('frame');
  var frames = document.getElementsByClassName('slide');
  var trigger = document.getElementById('trigger');

  trigger.addEventListener('click', function() {
    frame.className += " clickOne";
  });

var parallax = document.querySelectorAll(".parallax"),
    speed = 0.5;

window.onscroll = function(){
  [].slice.call(parallax).forEach(function(el,i){

    var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

    el.style.backgroundPosition = elBackgrounPos;

  });
};

    // scroll to bottom
    document.querySelector('.js-scroll-to-about').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ bottom: document.body.clientHeight - window.innerHeight, right: 0, behavior: 'smooth' });
    });


  // scroll to top
  document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  });

});
