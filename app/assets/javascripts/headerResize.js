$(document).ready(function() {

    var bool = false,
        $header = $('header');

    var setHeaderHeight = function() {
        var heightSource = $(window).height();
        $header.css('height', heightSource);
    };

    $(window).resize(function() {
        setHeaderHeight();
    });

    setHeaderHeight();

});