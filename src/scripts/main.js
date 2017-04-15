document.addEventListener('DOMContentLoaded', function() {
  var frame = document.getElementById('frame');
  var frames = document.getElementsByClassName('slide');
  var trigger = document.getElementById('trigger');

  trigger.addEventListener('click', function() {
    frame.className += " clickOne";
  });


  (function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

});
