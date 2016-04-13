$(document).ready(function() {
    var makeProperNoun = function(string) {
        return string && string[0].toUpperCase() + string.slice(1);
    };

    $('form').submit(function(e) {
        var newItem = makeProperNoun($('.addStuff').val());
        e.preventDefault();
        $('.itemsList').append('<li class="item unchecked">' + newItem + '</li>');
        $('.addStuff').val('');
    });

    $('.addStuff').on('click', function() {
        $('.addStuff').val(' ');
    });

    $('.itemsList').on('click', '.item', function() {
        $(this).toggleClass('checked unchecked');
    });

    $('.addStuff').on("change", function() {
        var filter = makeProperNoun($('.addStuff').val())
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
