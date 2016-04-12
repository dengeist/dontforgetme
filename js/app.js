
$(document).ready(function () {


    $('#filterbutton').on('click', function(e){
        $('.checked').hide();
    });

  $('#listofstuff').submit(function(e){
    e.preventDefault();
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

    $('#addstuff').on("change",function(){
        var filter = $(this).val(),
            list = $('#newitem');
        list.find('li:contains(' + filter + ')').css("border", "3px solid red");
        list.find('li:not(:contains(' + filter + '))').css("border", "1px dashed green");
        console.log(filter);
    });
});
