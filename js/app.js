$(document).ready(function () {
  //get items input
  $('#addstuffbutton').click(function(){

  var userInput = $('#addstuff').val();
  console.log(userInput);

  $('#newitem').append('<li class="items">'+userInput+'</li>');
  $('#addstuff').val('');

//clear the data within the addstuff button
//make .keydown enter #addstuff to the list

  // alert(userInput);


});

})
