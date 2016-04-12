$(document).ready(function () {

  var filterItems = function(){
    $('.checked').hide();
  }

  $('#listofstuff').submit(function(e){
    e.preventDefault();
      var userInput = $('#addstuff').val();

      $('#newitem').append('<li class="items">'+userInput+'</li>');
      $('#addstuff').val('');
    });

    $('#clearbutton').click(function(){
            $('#newitem').empty();
    });

      $('#addstuff').on ('click', function(){
         $('#addstuff').val(' ');
    });
      $('#newitem').on('click', 'li.items', function() {
        $(this).toggleClass('checked');
      });
});
