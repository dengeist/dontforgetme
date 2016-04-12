$(document).ready(function () {

  var filterItems = function(e){
      e.preventDefault();
    $('.checked').hide();
    $('#filterbutton').click(
        function(){
         alert('button is being pressed');
     });
};



  $('#listofstuff').submit(function(e){
      var userInput = $('#addstuff').val();

      $('#newitem').append('<li class="items unchecked">'+userInput+'</li>');
      $('#addstuff').val('');
    });

    $('#clearbutton').click(function(){
            $('#newitem').empty();
    });

      $('#addstuff').on ('click', function(){
         $('#addstuff').val(' ');
    });
      $('#newitem').on('click', 'li.items', function() {
        $(this).toggleClass('checked unchecked');
      });
});

filterItems();
