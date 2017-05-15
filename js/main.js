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
//top navi sub menu
    function sub(id1,id2){
        $(id1).on('mouseover',function(){
            $(this).addClass('h');
            $(id2).show();
        })
        $(id2).on('mouseleave',function(){
            $(this).hide();
            $(id1).removeClass('h');
        })
        $(id1).on('mouseleave',function(){
            $(this).removeClass('h');
            $(id2).hide();
        })
        $(id2).on('mouseover',function(){
            $(this).show();
            $(id1).addClass('h');
        }) 
    }
    sub('#myjd','#myjd_sub');
    sub('#service','#service_sub');
    sub('#webnavi','#webnavi_sub');
    sub('#mobileJD','#QRcode')
//    shopping cart
    $('.cart').on('mouseover',function(){
        $('.cartsub').show();
    })
    $('.cartsub').on('mouseleave',function(){
        $(this).hide();
    })
    $('.cart').on('mouseleave',function(){
        $('.cartsub').hide();
    })
    $('.cartsub').on('mouseover',function(){
        $(this).show();
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
    
    
//    to the top
    
    $('.to_top').on('click',function(){
        $('body,html').animate({scrollTop: 0})
    })
    
//    top search
    
    $(window).scroll(function(){
        var h = $(window).scrollTop()
        if(h >= 600){
            $('.top_search').slideDown()
            
        } else{
            $('.top_search').slideUp()
        }
    })
//    count down
    var s = $('.sk-count-s').text();
    var m = $('.sk-count-m').text();
    var h = $('.sk-count-h').text();
    
    set = setInterval(function(){
        if(s > 0){
            s --;
            $('.sk-count-s').text(s);
        } else if(s == 0){
            s = 59;
            $('.sk-count-s').text(s);
            m --;
            $('.sk-count-m').text(m);
        } else if(s == 0 & m == 0){
            h --;
            $('.sk-count-h').text(h);
            s = 59;
            $('.sk-count-s').text(s);
            m = 59;
            $('.sk-count-m').text(m);
        } else if(s==0 & m ==0 & h ==0){
            clearInterval(set);
        }
        
    },1000)
})

