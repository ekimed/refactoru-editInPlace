
$(document).on('ready', function(){
  $('.item').on('click', function(){
    if ($(this).children('.input-box').length>0){
      var value = $(this).children('.input-box').text();
      var newText = $('<input class="text-box" type="type" value="'+value+'">');
      var input = $(this).find('.input-box').replaceWith(newText);
    }
    else{
      $('.item').children('.text-box').on('keydown', function(e){
        console.log('check');
        console.log(e.keyCode);
        if (e.keyCode == 13){
          console.log('if');
          var input_value = $(this).val();
          console.log(input_value);
          var new_div = $('<div class="input-box">'+input_value+'</div>');
          var stored_text = $(this).replaceWith(new_div);
        }
      })
    }
  })

});
