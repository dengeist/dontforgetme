$(document).ready(function() {

    $('#filterButton').on('click', function(e) {
        $('.checked').hide();
    });

    $('form').submit(function(e) {
        e.preventDefault();
        var userInput = $('#addStuff').val();
        $('.itemsList').append('<li class="item unchecked">' + userInput + '</li>');
        $('#addStuff').val('');
    });

    $('#clearButton').click(function() {
        $('.itemsList').empty();
    });

    $('#addStuff').on('click', function() {
        $('#addStuff').val(' ');
    });

    $('.itemsList').on('click', 'li.item', function() {
        $(this).toggleClass('checked unchecked');
    });

    $('#addStuff').on("change", function() {
        var filter = $(this).val(),
            list = $('.itemsList');
        list.find('li:contains(' + filter + ')').slideUp();
        list.find('li:not(:contains(' + filter + '))').slideDown();
    });
});
