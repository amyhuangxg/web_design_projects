    //declarations
const d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayofweekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //applications
$(".month").append(monthNames[d.getMonth()]);
$(".date").append(d.getDate());
$(".dayofweek").append(dayofweekNames[d.getDay()]);
    //api
jQuery.getJSON('https://api.openweathermap.org/data/2.5/weather?id=5870294&APPID=4d83367d237d1e89b096e93a68157c35&units=imperial',function(data){

var weatherMain=data.weather[0].main;
var high=data.main.temp_max;
var low=data.main.temp_min;
var weatherIcon=data.weather[0].icon;

var highRounded=Math.round(high);
var lowRounded=Math.round(low);

$(".first .weather").append(weatherMain);
$(".first .high").append(highRounded);
$(".first .low").append(lowRounded);

if (weatherIcon=="01d"||weatherIcon=="01n"){
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/sunny.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_happy dayMain1"></div>');
}else
if (weatherIcon=="02d"||weatherIcon=="02n"){
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/mostly_sunny.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_happy dayMain1"></div>');
}else
if (weatherIcon=="03d"||weatherIcon=="03n"){
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/partly_cloudy.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_sad dayMain1"></div>');
}else
if (weatherIcon=="04d"||weatherIcon=="04n"){
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/cloudy.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_sad dayMain1"></div>');
}else
if (weatherIcon=="13d"||weatherIcon=="13n"){
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/snowing.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_sad dayMain1"></div>');
}else
if (weatherIcon=="50d"||weatherIcon=="50n"){
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/foggy.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_confused dayMain1"></div>');
}else{
  $(".imgFirst").append('<img class="dayPage icon main first" src="../assets/question_mark.svg">');
  $(".iconFirst").append('<div class="sprite_polar_bear_confused dayMain1"></div>');
  }
});

jQuery.getJSON('https://api.openweathermap.org/data/2.5/weather?id=6255152&APPID=e7f4d601bc49b715df12405ff7d48a72&units=imperial',function(data){

var weatherMain=data.weather[0].main;
var high=data.main.temp_max;
var low=data.main.temp_min;
var weatherIcon=data.weather[0].icon;

var highRounded=Math.round(high);
var lowRounded=Math.round(low);

$(".second .weather").append(weatherMain);
$(".second .high").append(highRounded);
$(".second .low").append(lowRounded);

if (weatherIcon=="01d"||weatherIcon=="01n"){
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/sunny.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_happy dayMain2"></div>');
}else
if (weatherIcon=="02d"||weatherIcon=="02n"){
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/mostly_sunny.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_happy dayMain2"></div>');
}else
if (weatherIcon=="03d"||weatherIcon=="03n"){
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/partly_cloudy.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_sad dayMain2"></div>');
}else
if (weatherIcon=="04d"||weatherIcon=="04n"){
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/cloudy.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_sad dayMain2"></div>');
}else
if (weatherIcon=="13d"||weatherIcon=="13n"){
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/snowing.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_sad dayMain2"></div>');
}else
if (weatherIcon=="50d"||weatherIcon=="50n"){
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/foggy.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_confused dayMain2"></div>');
}else{
  $(".imgSecond").append('<img class="dayPage icon main second" src="../assets/question_mark.svg">');
  $(".iconSecond").append('<div class="sprite_penguin_confused dayMain2"></div>');
  }
});
