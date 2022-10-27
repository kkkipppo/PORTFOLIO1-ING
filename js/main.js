// home main
$('.mCon1').slick({
    Infinity : true,
    autoplay : true,
    dots : true,
    autoplayspeed : 1000,
    draggable : true,
    nextArrow : '.prev',
    prevArrow : '.next',
});

$('.stop').click(function(){
    $('.mCon1').slick('slickPause')
});


// about
// profile pic
    $('.pConWRap').slick({
        Infinity : true,
        dots : true,
        autoplay : true,
        autoplayspeed : 1000,
        draggable : true,
        nextArrow : '.btnN',
        prevArrow : '.btnP',
    });

// btn_top scroll
    $(window).on('scroll',function(){
        let scr = $(window).scrollTop();

        if(scr > 380){
            $('.top').show();
        }else{
            $('.top').hide();
        }

        if(scr > 2200){
            $('.top p').css({'color' : '#fffcf9'})
        }else{
            $('.top p').css({'color' : '#333'})
        }
    });


//graphic 은 html 밑에 

