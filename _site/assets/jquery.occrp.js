
$(document).ready(function() {


  // Show search input in the header
  $('#header #search').click(function() {
    $(this).find('#icon').hide();
    $(this).find('#text').hide();
    $(this).find('#input').show();
  });
  

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


  
  // Share buttons
  $('#share #twitter').sharrre({
    share: {
      twitter: true
    },
    enableHover: false,
    enableTracking: true,
    buttons: { twitter: {via: 'OCCRP'}},
    click: function(api, options){
      api.simulateClick();
      api.openPopup('twitter');
    }
  });
  
  $('#share #facebook').sharrre({
    share: {
      facebook: true
    },
    enableHover: false,
    enableTracking: true,
    click: function(api, options){
      api.simulateClick();
      api.openPopup('facebook');
    }
  });
  
  $('#share #google-plus').sharrre({
    share: {
      facebook: true
    },
    enableHover: false,
    enableTracking: true,
    click: function(api, options){
      api.simulateClick();
      api.openPopup('googlePlus');
    }
  });
  
  $('#share #linkedin').sharrre({
    share: {
      facebook: true
    },
    enableHover: false,
    enableTracking: true,
    click: function(api, options){
      api.simulateClick();
      api.openPopup('linkedIn');
    }
  });



    
  // The window onload script
  // - here we put all scripts which must run after the page is completelly loaded
  $(window).load(function(){
    
    // Generate random pictures
    $('article figure img').each(function() {
      var url = $(this).attr('src');
      if (url.indexOf('lorempixel') > 0 ) {
        var rnd =  Math.floor((Math.random()*10)+1); 
        $(this).attr('src', url + '/' + rnd);
      }
    });
   
  }); 
 
});
