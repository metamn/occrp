
$(document).ready(function() {
  // The isotope cache container
  var $container = $('#investigations');
  
  // The window onload script
  // - here we put all scripts which must run after the page is completelly loaded
  $(window).load(function(){
    
    // Initialize isotope filter plugin
    // Set options  
    $container.isotope({
      itemSelector : 'article',
      
      // The CSS animation was too fancy, we've switched to a simpler one
      animationEngine: 'jquery',
      animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false
       }
    });
  });
  
});
