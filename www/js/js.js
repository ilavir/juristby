function equalHeight(group) {
    tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
function sidebar1InnerHeight() {
    var sidebar1Height = $('.sidebar1').height();
    var menuLeftFirstHeight = $('.menu-left:first-child').height();
    $('.menu-left').eq(1).css('height', sidebar1Height - menuLeftFirstHeight);
}
function basketPaymentDisabledHeight() {
    var basketPaymentContHeight = $('.payment-inner').outerHeight();
    var basketPaymentContWidth = $('.payment-inner').outerWidth();
    var basketPaymentDisabledPadding = $('.basket-payment .payment-disabled').css('padding-top');
    $('.basket-payment .payment-disabled').height(basketPaymentContHeight).width(basketPaymentContWidth);
}
$(document).ready(function () {
    //equalHeight($(".jtab-inner"));
    equalHeight($(".sidebar"));
    equalHeight($(".filter-cont .filter-item"));
    sidebar1InnerHeight();
    basketPaymentDisabledHeight();
});

$('.basket-button-perejtikoplate').live('click', function () {
    var paymentExpanded = $('.basket-payment .payment-disabled').css('display');
    if (paymentExpanded == 'block') {
        $('.basket-payment .payment-disabled').fadeOut('1000');
    } else {

    }
});

$('.filter-cont .title-toggle a').live("click", function () {
    var filterExpanded = $('.filter-cont .filter-inner').css('display');
    if (filterExpanded == 'none') {
        $('.filter-cont .filter-inner').animate({height:"toggle"}, 1000);
        $(this).text('Свернуть').css("background", "url('images/button-filter-toggle-bg.png') no-repeat right");
    } else {
        $('.filter-cont .filter-inner').animate({height:"toggle"}, 1000);
        $(this).text('Развернуть').css("background", "url('images/button-filter-toggle-bga.png') no-repeat right");
    }
});

$(window).bind('resize', function () {
    basketPaymentDisabledHeight();
    equalHeight($(".jtab-inner"));
});

$('.main-journal-cont div.jtab-inner').live("click", function (e) {
    e.preventDefault();
    $(".main-journal-cont .jtab-content").hide(); //Скрыть все сожержание
    $('.main-journal-cont div.jtab-inner').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('id')).show();
});