$(document).on("scroll", function(){
  var distanceScrolled = $(document).scrollTop();
  var $win = $(window);
  var winH = $win.height();
  var winW = $win.width();

  $(".comma").css("top", distanceScrolled*-2);
  $(".first").css("top", distanceScrolled*-2);
  $(".introparagraph").css("right", distanceScrolled*-3.5);
  $(".behindlink").css("right", distanceScrolled*-2);
  $(".aboutlink").css("left", distanceScrolled*-1);
  $(".insightslink").css("right", distanceScrolled*-1);

  if (distanceScrolled < winW*0.1){
    $(".aboutlink").css("top", 0);
    $(".insightslink").css("top", 0);
  }

  if (distanceScrolled >= winW*0.1){
    $(".aboutlink").css("top", (distanceScrolled-0.1*winW)*-3);
    $(".insightslink").css("top", (distanceScrolled-0.1*winW)*-3);
  }

  if (distanceScrolled <= winW*0.176){
    $(".name").css("font-size", "6.5vw");
    $(".name").css("letter-spacing", "0.4vw");
    $(".name").css("line-height", "1");
    $(".name").css("position", "relative");
    $(".name").css("left", distanceScrolled*-1.25);
    $(".name").css("top", 0);
  }

  if (distanceScrolled > winW*0.176){
    $(".name").css("font-size", 0.065*winW-(distanceScrolled-0.176*winW)*0.04/0.394);
    $(".name").css("letter-spacing", 0.004*winW-(distanceScrolled-0.176*winW)*0.0026/0.394);
    $(".name").css("line-height", "1");
    $(".name").css("position", "absolute");
    $(".name").css("left", "-22vw");
    $(".name").css("top", distanceScrolled*1-winW*0.176);
  }

  if (distanceScrolled >= winW*0.57) {
    $(".name").css("font-size", "2.5vw");
    $(".name").css("letter-spacing", "0.14vw");
    $(".name").css("line-height", "1");
    $(".name").css("position", "fixed");
    $(".name").css("top", "2vw");
    $(".name").css("left", "5vw");
  }

  if (distanceScrolled >= winW*0.57) {
    $(".barmenu").css("position", "fixed");
    $(".barmenu").css("left", "21vw");
  }
  else{
    $(".barmenu").css("position", "relative");
    $(".barmenu").css("left", "15vw");
  }

  if (distanceScrolled >= winW*0.57) {
    $(".whitebar").css("position", "fixed");
  }
  else{
    $(".whitebar").css("position", "relative");
  }
})
