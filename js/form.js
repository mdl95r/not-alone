function showPopup() {
 	$(".up").css("display", "none");
	$(".popup").css("display", "block");
	$("body").css("overflow", "hidden");

	// при открытии формы, закрыть попап внизу страницы
	$(".popup-main").slideUp(200);
}

$(document).ready(function() {
	$(".popup_bg,.btn-close").click(function(){
		const height = $(document).scrollTop();
		if ( height >= 300 ) {
    	 	$(".up").css("display", "block");
    	 } else {
    	 if ( height < 300 ) 
    	 	$(".up").css("display", "none");
    	};
		$(".popup").css("display", "none");
		$("body").css("overflow", "visible");
	});

	$(window).keydown(function(e){
		if (e.keyCode == 27) {
           $(".popup").fadeOut(80);
           $("body").css("overflow", "visible");
		}
	});
});