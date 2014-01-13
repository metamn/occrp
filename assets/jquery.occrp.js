
$(document).ready(function() {

  

  // Mark first item in category navigation active
  $('#navigation ol li').first().addClass('active');

  // Slider
  $('.frontpage #slider article').hide();
  $('.frontpage #slider article').first().show();
  $('.frontpage #slider nav ol li').removeClass('active');
  $('.frontpage #slider nav ol li').first().addClass('active');
  
  $('.frontpage #slider nav ol li').click(function() {
    $('.frontpage #slider nav ol li').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    $('.frontpage #slider article').fadeOut('slow');
    $('.frontpage #slider article:eq(' + index + ')').fadeIn('slow');
    return false;
  });
  
  

  // Sticky header
  var menu = document.querySelector('#header');
  var origOffsetY = menu.offsetTop;

  function scroll () {
    if ($(window).scrollTop() >= origOffsetY) {
      $('body').addClass('sticky');
    } else {
      $('body').removeClass('sticky');
    } 
  }
  document.onscroll = scroll;


  // jQuery Isotope 
  var $container = $('#investigationssssssssssssss'); 
    
  // The window onload script
  // - here we put all scripts which must run after the page is completelly loaded
  $(window).load(function(){
    
    // Generate random pictures
    
  
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
