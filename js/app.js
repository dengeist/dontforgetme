$(document).ready(function () {

  $('#listofstuff').submit(function(e){
    e.preventDefault();
      var userInput = $('#addstuff').val();
      console.log(userInput);

      $('#newitem').append('<li class="items">'+userInput+'</li>');
      $('#addstuff').val('');
    });

    $('#clearbutton').click(function(){
      // alert('testing');
      $('#newitem').empty();
    });

      $('#addstuff').on ('click', function(){
         $('#addstuff').val(' ');
    });
      $('#newitem').on('click', 'li.items', function() {
        $(this).wrap("<strike>");
      });

});


//get items input
//
// $('#clearbutton').click(function(){
// $('#newitem').clear();

//clear the data within the addstuff button
//make .keydown enter #addstuff to the list

  // alert(userInput);
