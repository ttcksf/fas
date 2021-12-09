$(function(){
$('a[href^="#"]').click(function(){
var speed = 800; //スクロール速度
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top - 30;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});
});