
$(document).ready(function () {


    $('#filterButton').on('click', function(e){
        $('.checked').hide();
    });

  $('#listOfStuff').submit(function(e){
    e.preventDefault();
      var userInput = $('#addStuff').val();

      $('.itemsList').append('<li class="items unchecked">'+userInput+'</li>');
      $('#addStuff').val('');
    });

    $('#clearButton').click(function(){
        $('.itemsList').empty();
    });

      $('#addStuff').on ('click', function(){
         $('#addStuff').val(' ');
    });
      $('.itemsList').on('click', 'li.items', function() {
        $(this).toggleClass('checked unchecked');
    });

    $('#addStuff').on("change",function(){
        var filter = $(this).val(),
            list = $('#newitem');
        list.find('li:contains(' + filter + ')').css("border", "3px solid red");
        list.find('li:not(:contains(' + filter + '))').css("border", "1px dashed green");
        console.log(filter);
    });
});
