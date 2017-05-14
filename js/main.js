$(function(){
    //close the top ad
    $('.x').on('click',function(){
        $('.ad').fadeOut();
    })
    
    //citys switching
    $('.citys').on('mouseover',function(){
        $(this).addClass('h');
        $('.switch').show();
    })
    $('.switch').on('mouseleave',function(){
        $(this).hide();
        $('.citys').removeClass('h');
    })
    $('.citys').on('mouseleave',function(){
        $(this).removeClass('h');
        $('.switch').hide();
    })
    $('.switch').on('mouseover',function(){
        $(this).show();
        $('.citys').addClass('h');
    })
    
//    submenu switching
    $('li').on('mouseover',function(){
        $('.submenu').show();
    })
    $('li').on('mouseleave',function(){
        $('.submenu').hide();
    })
    
//main - ppt
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
//SK-sellers ppt
    var i = 0;
    $('.next').on('click',function(){
        if(i< 3){
            i ++;
        }else{
            i = 0;
        }
        $('.sellers').stop(true).animate({'left': -i * 1000} )
    })
    $('.prev').on('click',function(){
        if(i > 0){
            i --
        } else {
            i = 3
        }
        $('.sellers').stop(true).animate({'left': -i * 1000} )
    })
    
//tips switching
    $('.tit1').on('mouseover',function(){
        $(this).addClass('h');
        $('.tit2').removeClass('h');
        $('.tips_con').show();
        $('.tips_con_h').hide();
    })
    $('.tit2').on('mouseover',function(){
        $(this).addClass('h');
        $('.tit1').removeClass('h');
        $('.tips_con_h').show();
        $('.tips_con').hide();
    })
                  
})
