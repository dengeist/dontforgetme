var cartManager, showList, userInput, newItem,
shoppingCart = [];

var makeProperNoun = function(string) {
    return string && string[0].toUpperCase() + string.slice(1);
};

showList = function(shoppingCart){
    shoppingCart.forEach(function(item, i){

    });
}

cartManager = function(shoppingCart) {
    $('form').on("submit", function(event) {
        userInput = $('.addStuff').val();
        newItem = makeProperNoun(userInput);
        event.preventDefault();
        shoppingCart.push(newItem);
        showList(shoppingCart);
    });
}

$(document).ready(function() {
    $('.addStuff').on('click', function() {
        $('.addStuff').val('');
    });

    $('.itemsList').on('click', '.item', function() {
        $(this).toggleClass('checked unchecked');
    });

    $('.addStuff').on("change", function() {
        var filter = makeProperNoun($('.addStuff').val()),
        list = $('.itemsList');
        list.find('li:contains(' + filter + ')').slideUp();
        list.find('li:not(:contains(' + filter + '))').slideDown();
    });

    $('.filterBtn').on('click', function() {
        $('.checked').hide();
    });

    $('.clearBtn').click(function() {
        $('.itemsList').empty();
    });
    cartManager(shoppingCart);
});
