
$(document).ready(function() {

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
  
  
  
  // Mark first item in pagination navigation active
  $('#navigation ol li').first().addClass('active');
  
  
  
  
  // The Header
  // -------------------------------------------------
  
  // Sticky header
  // - the menu element must be greater than 0
  // - an element with a top margin or padding should be choosen
  var menu = document.querySelector('#header figure');
  var origOffsetY = menu.offsetTop;

  // - if the mobile menu is visible the sticky header wont be enabled
  function scroll () {
    if (!($('#header .mobile-menu').is(':visible'))) {
      if ($(window).scrollTop() >= origOffsetY) {
        $('body').addClass('sticky');
      } else {
        $('body').removeClass('sticky');
      }
    }
  }
  document.onscroll = scroll;
  
  
  // Click on logo on sticky header
  // - instead loading the frontpage it will scroll top
  // - the second click on the logo will load the frontpage
  $('#header .logo figure a').click(function(event) {
    if ($('body').hasClass('sticky')) {
      event.preventDefault();
      scrollTo($('body'));
    }
  });
  
  // Show search input in the header
  $('#header .search').click(function(event) {
    $(this).find('.icon').hide();
    $(this).find('.text').hide();
    $(this).find('.input').show();
    
    return false;
  });
  
  
  // Show navigation, search & co on click on mobile hamburger icon
  $('#header #hamburger-menu').click(function() {
    $('body').removeClass('sticky');
    $('#header .mobile-navbar').hide();
    $('#header .mobile-menu').slideToggle();
    scrollTo($('body'));
  });
  
  // Show navigation, search & co on click on mobile navbar
  $('#header .mobile-navbar').click(function() {
    $('body').removeClass('sticky');
    $(this).hide();
    $('#header .mobile-menu').slideToggle();
  });
  
  // Close navigation, search & co on click on mobiles
  $('#header #close-menu').click(function() {
    $('#header .mobile-menu').hide();
    $('#header .mobile-navbar').slideToggle();
    scrollTo($('body'));
  });


  
  
  
  // Share buttons in article body
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
  
  
  
  // Common functions
  
  // Scrolling to a div
  // - if no div then scroll to top
  function scrollTo(div) {
    (div.length) ? $("html, body").animate({ scrollTop: $(div).offset().top }, "slow") : $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  } 
 
});
