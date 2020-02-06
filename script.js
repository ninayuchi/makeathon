// $(window).scroll(function() {
//     var winScrollTop = $(window).scrollTop();
//     var winHeight = $(window).height();
//     var floaterHeight = $('#floater').outerHeight(true);
//     //true so the function takes margins into account
//     var fromBottom = 20;

//     var top = winScrollTop + winHeight - floaterHeight - fromBottom;
//     $('#floater').css({'top': top + 'px'});
// });



var path = document.querySelector('#cls-1');

// Get length of path... ~577px in this demo
var pathLength = path.getTotalLength();


// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// When the page scrolls...
window.addEventListener("scroll", function(e) {

  // What % down is it?
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

});
