$(function() {
    $.scrollify({
      section : ".section",
    });
  });
  
//   window.addEventListener('scroll', function(e) {
    
//                 if( $(window).scrollTop() <= 600) {
//                     $('.wow').removeClass('animated');
//                     $('.wow').removeAttr('style');
//                     new WOW().init();
//                 }
//     });
//     new WOW().init();

// Helper function for add element box list in WOW
WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
  };

  // Init WOW.js and get instance
  var wow = new WOW();
  wow.init();

  // Attach scrollSpy to .wow elements for detect view exit events,
  // then reset elements and add again for animation
  $('.wow').on('scrollSpy:exit', function() {
    $(this).css({
      'visibility': 'hidden',
      'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
  }).scrollSpy();
