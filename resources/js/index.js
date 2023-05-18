//mixItUp
var mixer = mixitup('.works-grid-itms');

//scrollify
$(function() {
      $.scrollify({
           section : ".scrollify",
           setHeights: false,
           updateHash: false,
      });
  });

// HEMBER MENU
function openMenu(){
  document.getElementById("hambergar").style.height ="100%"}
  function closeMenu(){
    document.getElementById("hambergar").style.height = "0%"
  }

  //scrollify function
  $(function(){
     $('.hembergar a, .animation-down a').on('click',function(){
  $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
       },1000);
       return false;
    });
  });