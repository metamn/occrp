
$(document).ready(function() {
 
 
 // The window onload script
  // - here we put all scripts which must run after the page is completelly loaded
  $(window).load(function(){
    $('#investigations').isotope({ 
      itemSelector : 'investigations',
      layoutMode : 'fitRows' 
    });
  });
});
