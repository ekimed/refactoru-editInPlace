$(document).on('ready', function() {

	var heightOfBox = $('#user-info').innerHeight();
	console.log(heightOfBox);

  $('#user-info').on('click', function(e){
  	$(this).hide("slow");
  	var newText = $('<input type="text">').height(heightOfBox).width('100%');
  	console.log(newText.height());
  	var insertBox = $('.user-info').append(newText);
  	// var inputBox = $('input').width(widthOfBox).height(heightOfBox);
  	$('input').focus();
  	$('input').blur(function(){
  		$(this).hide("slow");
  		var newTextBox = $('<p>This is a new text box.</p>').height('54px');
  		$('.user-info').append(newTextBox);
  	});
  });

});