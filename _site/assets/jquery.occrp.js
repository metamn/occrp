
$(document).ready(function() {

  // Cache container
  var $container = $('.container'); 
  
  
  // The window onload script
  // - here we put all scripts which must run after the page is completelly loaded
  $(window).load(function(){
    // Initialize isotope filter plugin
    // Set options
    
    $container.isotope({
      itemSelector : '.section',
      
      
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
