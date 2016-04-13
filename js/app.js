$(document).ready(function() {
    var makeProperNoun = function(string) {
        return string && string[0].toUpperCase() + string.slice(1);
    };

    $('form').submit(function(e) {
        e.preventDefault();
        var userInput = makeProperNoun($('.addStuff').val());

        $('.itemsList').append('<li class="item unchecked">' + userInput + '</li>');
        $('.addStuff').val('');
        console.log(userInput)
    });

    $('.addStuff').on('click', function() {
        $('.addStuff').val(' ');
    });

    $('.itemsList').on('click', '.item', function() {
        $(this).toggleClass('checked unchecked');
    });

    $('.addStuff').on("change", function() {
        var filter = $(this).val(),
            list = $('.itemsList');
        list.find('li:contains(' + filter + ')').slideUp();
        list.find('li:not(:contains(' + filter + '))').slideDown();
    });

    $('.filterBtn').on('click', function(e) {
        $('.checked').hide();
    });

    $('.clearBtn').click(function() {
        $('.itemsList').empty();
    });
});
