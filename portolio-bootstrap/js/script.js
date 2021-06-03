//event pada saat link di klik

$('.page-scroll').on('click', function(){

        //ambil isi href
        var tujuan = $(this).attr('href');
        //tangkap elemen ybs
        var elemenTujuan = $(tujuan);

        //pindahkan scroll
        $('html , body').animate({
            scrollTop: elemenTujuan.offset().top - 50
           }, 1000, 'swing');
          
           e.preventDefault();
       

});

//parallax effect
//about
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    //portfolio
    if(wScroll>$('.portofolio').offset().top -200){
      $('.portofolio .thumbnail').each(function(i){
        setTimeout(function(){
            $('.portofolio .thumbnail').eq(i).addClass('muncul');
        }, 300 * (i+1));
      });
        // 
    }

    //services
    if(wScroll>$('.services').offset().top -200){
        $('.services .thumbnail').each(function(i){
          setTimeout(function(){
              $('.services .thumbnail').eq(i).addClass('muncul');
          }, 300 * (i+1));
        });
          // 
      }
});