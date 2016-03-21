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

$(document).on("scroll",function(){

	var altura=$(document).height();
	var scrollTop= $(this).scrollTop();
	var pixel=scrollTop/70;

	if (pixel>=4) {
		$("header").css({
			"-webkit-filter": "blur("+ 2 +"px"
		});
	}else{
		$("header").css({
			"-webkit-filter": "blur("+0 +"px"
		});
	}
})




});