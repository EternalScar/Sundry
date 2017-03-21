/**
 * Created by lele on 2017/1/17.
 */
$(function () {

    $('html,body').animate({scrollTop:0},500);

    $('.carousel-inner img').load(function () {
       console.log('加载完成');
    });

    /*联系我们左边点击事件*/
    $('.contList li').bind('click', function () {

        $(this).addClass('actived').siblings().removeClass();
        var index = $(this).index();

        var secSecTop = $('.conRight > section').eq(1).offset().top-66;
        var thrSecTop = $('.conRight > section').eq(2).offset().top-66;


        if(index == 1){
            $("body,html").animate({scrollTop:secSecTop},500);
        }else if(index == 2){
            $("body,html").animate({scrollTop:thrSecTop},500);
        }else{
            $("body,html").animate({scrollTop:'150px'},200);
        }

    });


    /*window scroll、resize、load事件*/
    $(window).on('resize load', function() {

        var psTops = $('.ps').offset().top;

        var psHeight = $('.proService').height()+160;
        var pdHeight = $('.proDevelop').height()+180;
        var ppHeight = $('.telPlatform').height()+200;

        $('.ps').css({'height':psHeight});
        $('.pd').css({'height':pdHeight,'top':psTops+psHeight});
        $('.pp').css({'height':ppHeight,'top':psTops+psHeight+pdHeight});

        var psTop = $('.proService').offset().top-66;
        var pdTop = $('.proDevelop').offset().top-66;
        var ppTop = $('.telPlatform').offset().top-66;
       // console.log(psTop+'---'+pdTop+'---'+ppTop);

        $('.cyNav').delegate('li','click',function(){

            var index = $(this).index();

            if(index == 0){
                $('.imgDiv').hide();
                $('.myCar,.ps,.pd,.pp').show();
                $("body,html").animate({scrollTop:0},200);
            }else if(index == 1){
                $('.imgDiv').hide();
                $('.myCar,.ps,.pd,.pp').show();
                $("body,html").animate({scrollTop:psTop},500);
            }else if(index == 2){
                $('.imgDiv').hide();
                $('.myCar').show();
                $("body,html").animate({scrollTop:pdTop},500);
            }else if(index == 3){
                $('.imgDiv').hide();
                $('.myCar,.ps,.pd,.pp').show();
                $("body,html").animate({scrollTop:ppTop},500);
            }else if(index == 4){
                $('.headInfo').empty();
                $('.headInfo').append('人才<span>招募</span>');
                $('.imgDiv').show();
                $("body,html").animate({scrollTop:0},200);
                $('.myCar,.ps,.pd,.pp').hide();
            }else if(index == 5){
                $('.headInfo').empty();
                $('.headInfo').append('<span>关于</span>我们');
                $('.imgDiv').show();
                $("body,html").animate({scrollTop:0},200);
                $('.myCar,.ps,.pd,.pp').hide();
                $('.tactRight').append('<iframe src="map.html" frameborder="0" scrolling="no"></iframe>');
            }

        });
    });
});
