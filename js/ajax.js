$(document).ready(function() {
	$(".form-top").submit(function(event) {

    try {
      yaCounter63313444.reachGoal('formSubmit'); 
    } catch (e) {
      console.log('Отправка данных не удалась', e); 
    }

    $(".popup").fadeOut(200);
    $("body").css("overflow", "visible");
    event.preventDefault();
    $data = $(this).serialize();

    if(!$(this).attr("method")) { 
      var $method = "post"; 
    } else { 
      var $method = $(this).attr("method"); 
    }
    
    const $url = "./handler.php"
    
    $.ajax({
      url: $url,
      type: $method,
      data: $data, 
      dataType: "json",
      complete: function(){ 
        $('.form-top')[0].reset();
      }
    });
  });
});