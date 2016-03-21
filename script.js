/*$(document).on('ready', function() {
	


$('.a').on('click', function(event) {
 $('this').next().hide();
 
});

});
*/
$(document).on("ready",function(){

$(".elementos").on("click",".label",function(){
	var este= $(this);
	var cont= este.next();

	//recorro a todo los demas
	var allcont=este.parent().siblings().find('.contenido');
	cont.slideToggle();
	allcont.slideUp();
	
});


});