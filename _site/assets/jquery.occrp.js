
$(document).ready(function() {

  
  // Simple slider
  // - a list of articles is transformed into a slider
  // - mostly on mobile displays
  // - navigation arrows are inserted into the container
  simpleSlider($('.frontpage #products'));
  
  function simpleSlider(container) {
    container.prepend("<span class='before'></span>");
    container.append("<span class='after'></span>");
    
    container.find('span').click(function() {
      var index = container.find('article:visible').index() + 1;
      container.find('article').hide();
      container.find('article:eq(' + index + ')').show();
    });
  }
  
  
  // Slider for featured content
  // -------------------------------------------------------------------------
  // - on mobiles the navigator / paginator is present inside every article
  $('.frontpage #slider article').hide();
  $('.frontpage #slider article').first().show();
  $('.frontpage #slider nav ol li').removeClass('active');
  $('.frontpage #slider nav ol li').first().addClass('active');
  
  $('.frontpage #slider nav ol li').click(function() {
    var index = $(this).index();
    var article = $('.frontpage #slider article:eq(' + index + ')');
    
    $('.frontpage #slider nav ol li').removeClass('active');
    $(this).addClass('active');
    // for mobiles
    article.find('nav ol li:eq(' + index + ')').addClass('active');
    
    $('.frontpage #slider article').hide();
    article.show();
    
    return false;
  });
  
  
  // Mark first item in pagination navigation active
  // $('.navigation ol li').first().addClass('active');
  $('.navigation').each(function() {
    $(this).find('ol li').first().addClass('active');
  });
  
  
  
  
  // The Header
  // -------------------------------------------------
  
  // Sticky header
  // - if the mobile menu is visible the sticky header wont be enabled
  function scroll () {
    if (!($('#header .close-icon').is(':visible'))) {
      if ($(window).scrollTop() >= 10) {
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
      event.preventDefault();chrome://web-developer/content/generated/view-responsive-layouts.html
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
  
  
  // Show navigation, search & co on click on mobile navbar
  $('#header .mobile-menubar').click(function() {
    $('body').removeClass('sticky');
    $(this).hide();
    $('#header nav').slideToggle();
    $("#header").addClass('mobile-menu-active');
  });
  
  // Close navigation, search & co on click on mobiles
  $('#header .close-icon').click(function() {
    scrollTo($('body'));
    $('#header').removeClass('mobile-menu-active');
    $('#header .mobile-menubar').show();  
    $('#header nav').slideToggle();
  });


  
  
  
  // Share buttons in article body
  $('.share-buttons .twitter').sharrre({
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
  
  $('.share-buttons .facebook').sharrre({
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
  
  $('.share-buttons .google-plus').sharrre({
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
  
  $('.share-buttons .linkedin').sharrre({
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
