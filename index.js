var dropbtn = $(".dropbtn");
var myDropdown = $(".dropdown-content");
var bell = $('#bellevue');
var issy = $("#issaquah");
var red = $("#redmond");
var slu = $("#slu");
var uw = $("#uw");

var bellevent= $("#bellevuelocation");
var issyevent= $("#issaquahlocation");
var redevent= $("#redmondlocation");
var sluevent= $("#slulocation");
var uwevent= $("#uwlocation");
var eventsContainer = $(".eventsContainer");

$(".dropbtn").click(function(){
  $(".dropdown-content").toggle();
});

$("#bellevue").click(function(){
  $('.eventsContainer').hide();
  $(".showEvent").empty();
  $(".showEvent").append(bellevent);
});

$("#issaquah").click(function(){
  $('.eventsContainer').hide();
  $(".showEvent").empty();
  $(".showEvent").append(issyevent);
});

$("#redmond").click(function(){
  $('.eventsContainer').hide();
  $(".showEvent").empty();
  $(".showEvent").append(redevent);
});

$("#slu").click(function(){
  $('.eventsContainer').hide();
  $(".showEvent").empty();
  $(".showEvent").append(sluevent);
});

$("#uw").click(function(){
  $('.eventsContainer').hide();
  $(".showEvent").empty();
  $(".showEvent").append(uwevent);
});
