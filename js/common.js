'use strict'
$(function () {
    // copyright, credit, scroll-down 표시 / 메뉴 선택 표시 구현
    let section = $('.mainbox_01').offset(); // 해당 요소 좌표 가져오기
    let section1 = $('.mainbox_02').offset();
    let section2 = $('.mainbox_03').offset();
    let section3 = $('.mainbox_04').offset();
    let section4 = $('.mainbox_05').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > section.top - 200) {
            $('.copyright').css('display', 'none')
            $('.credit').css('display', 'block')
        }
        if ($(document).scrollTop() > section1.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .distribution').addClass('on')
            $('.copyright').css('display', 'block')
            $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section2.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .marketing').addClass('on')
            $('.copyright').css('display', 'block')
            $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section3.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .upstream').addClass('on')
            $('.scroll-down').css('display', 'block')
            $('.copyright').css('display', 'block')
            $('.credit').css('display', 'none')
        }
        if ($(document).scrollTop() > section4.top - 200) {
            $('.nav ul li').removeClass('on');
            $('.nav .subscription').addClass('on')
            $('.scroll-down').css('display', 'none')
            $('.copyright').css('display', 'none')
            $('.credit').css('display', 'none')
        }
    });

    // 사이드 메뉴 구현
    $('.btn-wrap .service').click(function(){
      console.log('click');
      $('.modal-box').addClass('on');
      $('.modal-bg').addClass('on');
    });

    $('.call-nav').hover(function(){
          $(this).toggleClass('on');
    });

    $('.call-nav').click(function(){
        $('.modal-bg').addClass('on');
        $('.service-box').addClass('on');
    });

    $('.modal-bg, .modal-close').click(function () {
        $('.modal-bg').removeClass('on');
        $('.service-box').removeClass('on');
        $('.modal_box').removeClass('on');
    });

    $('.call-nav').click(function(){
        $('.modal-bg').addClass('on');
        $('.service-box').addClass('on');
    });

    $('.modal-btn_2').click(function(){
      $('.mainBox2_modal.modal_box').addClass('on');
    })

    $('.modal-btn_3').click(function(){
      $('.mainBox3_modal.modal_box').addClass('on');
    })

    $('.modal-btn_4').click(function(){
      $('.mainBox4_modal.modal_box').addClass('on');
    })

    $('.modal-btn_5').click(function(){
      $('.mainBox5_modal.modal_box').addClass('on');
      $('.mainBox6_modal.modal_box').addClass('on');
    })

    $('.modal-btn_5').click(function(){
      $('.mainBox5_modal.modal_box').addClass('on');
      $('.mainBox6_modal.modal_box').addClass('on');
    })

    $('.subscriptionBox.Box_02').click(function(){
      $('.subscriptionBox').removeClass('on');
      $(this).addClass('on');
    })

    $('.subscriptionBox.Box_03').click(function(){
      $('.subscriptionBox').removeClass('on');
      $(this).addClass('on');
    })

    // 스크롤 메뉴 구현
    /*
    메뉴를 클릭하면,
    몇번째 메뉴를 클릭했는지 순번 확인,
    그 순번에 해당하는 내용이 화면 상단에서 얼만큼 떨어져 있는지 거리 확인
    html, body에 스크롤 양을 확인한 수치만큼  animate 메소드를 이용하여 애니메이션이 되게 한다.
    */

    let menu = $('.navBtn ul li');
    let contents = $('.mainbox');
    menu.click(function(){
      let idx = $(this).index();
      let tt = contents.eq(idx).offset().top;
      console.log(tt);

      $('html, body').animate({scrollTop: tt});
    });

    $(window).scroll(function(){
      let sct = $(this).scrollTop(); // 현재 스크롤 양
      contents.each(function(i){
        let tg = $(this);
        // console.log(tg);
        if(tg.offset().top - 10 < sct){ // 현재 스크롤을 해당 컨텐츠의 화면 상단에서의 거리보다 많이 했다면
          menu.removeClass('on');
          menu.eq(i).addClass('on');
        }
      })
    });
});
