$(window).scroll(function() {
    if($(this).scrollTop()>0){
        $(".scroll-bg").css("background-color","white");
        $(".header-left__logo--img").hide();
        $(".scroll-img").show();
        $(".scroll-title").css("color","#000000");
        $(".scroll-text").css("color","#000000");
        $(".bar").css("background-color","#000000");
    }else if($(this).scrollTop()==0){
        $(".scroll-bg").css("background-color","transparent");
        $(".header-left__logo--img").show();
        $(".scroll-img").hide();
        $(".scroll-title").css("color","#ffffff");
        $(".scroll-text").css("color","#ffffff");
        $(".bar").css("background-color","#ffffff");
    }

    $(".header-bar").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(".modal-wrapper").removeClass("active");
        }else{
            $(this).addClass("active");
            $(".modal-wrapper").addClass("active");
        }
    })

    $('.notice-link').click(function() {
 
        // ②クリックされたタブの順番を変数に格納
        var index = $('.notice-content__link a').index(this);
     
        // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
        $(".notice-link").removeClass('active');
     
        // ④クリックされたタブにクリック済みデザインを適用する
        $(this).addClass('active');
     
        // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
        $('.notice-list').removeClass('show').eq(index).addClass('show');
     
    });

    const config = {
        mode: "range"
      }
      flatpickr('.flatpickr', config);

    $(".header-right__book").click(function(){
        $(".book-wrapper").fadeIn();
        $(".black-bg").fadeIn();
    })

    $(".modal-cansel-btn").click(function(){
        $(".book-wrapper").fadeOut();
        $(".black-bg").fadeOut();
    })

    $(".black-bg").click(function(){
        $(".book-wrapper").fadeOut();
        $(".black-bg").fadeOut();
    })
});