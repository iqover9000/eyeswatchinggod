$(function() {
  $('nav a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});

// $(document).ready(function() {
//   var hashTagActive = "";
//   $("nav a").click(function (event) {
      
//     var offsetTop = 70;
  
//     if (hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
//       event.preventDefault();
//       //calculate destination place
//       var dest = 0;
//       if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
//           dest = $(document).height() - $(window).height() - offsetTop;
//       } else {
//           dest = $(this.hash).offset().top - offsetTop;
//       }
//       //go to destination
//       $('html,body').animate({
//           scrollTop: dest
//       }, 1000, 'swing');
//       hashTagActive = this.hash;
//     }
//   });
// });