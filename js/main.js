$(function(){

 // 페이지 스크롤 기능 카페 3021번 게시물 들어가도 긁어올 수 있음
  $('#gnb a').on('click', function(){
    var hash = this.hash;
    
    var top = $(hash).offset().top;

    
    $('html, body').animate({
      scrollTop: top
    }, 500)
    
    return false;
  })
  //모바일 토글 버튼
  
  $('#btn-toggle').click(function(){
    $('#gnb')
      .slideToggle(0.4)
      .toggleClass('show');
    
    if($('#gnb').hasClass('show')){
      $(this)
        .find('i')
        .removeClass('fa-bars')
        .addClass('fa-times');
    } else{
      $(this)
        .find('i')
        .removeClass('fa-times')
        .addClass('fa-bars')
    }
  });

  $(window).resize(function(){
    var w = $(window).width();
    if (w >= 768){
      $('#gnb').css('display', 'none');
    }
  })

  //500으 0.5초 
  var duration = 500;
  $('#scroll a').on('click', function(){
    var hash = this.hash;
    console.log(hash)
    
    var top = $(hash).offset().top;
    console.log(top);
    
    $('html, body').animate({
      scrollTop: top
    }, duration)
    
    return false;
  })
  
})

