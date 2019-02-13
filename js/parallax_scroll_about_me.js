$(document).on("scroll", function(){
  var distanceScrolled = $(document).scrollTop();
  var $win = $(window);
  var winH = $win.height();
  var winW = $win.width();

  $(".zero").css("top", distanceScrolled*-2);
  $(".one").css("top", distanceScrolled*-1.8);
  $(".two").css("top", distanceScrolled*-1.6);
  $(".three").css("top", distanceScrolled*-1.4);
  $(".four").css("top", distanceScrolled*-1.2);
  $(".five").css("top", distanceScrolled*-1);
  $(".six").css("top", distanceScrolled*-0.8);
  $(".seven").css("top", distanceScrolled*-0.6);
  $(".eight").css("top", distanceScrolled*-0.4);
  $(".nine").css("top", distanceScrolled*-0.2);
  $(".ten").css("top", distanceScrolled*0);
})
