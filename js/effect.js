// JavaScript Document
$(document).ready(function(){

$('.menu').hover(function(){$('.menu').animate({left: '-25px'},100);},function(){$('.menu').animate({left: '-256.5px'},100);})

$('.proj').click(function(){
	$('#c1,.cdetail').fadeIn();						 
});

$('.intern').click(function(){
	$('#c2,.cdetail').fadeIn();						 
});

$('#cclose').click(function(){
	$('#c1,#c2,.cdetail').fadeOut();	
});

});