$(window).resize(function(){
    var w = window.innerWidth;
    if(w > 1200){
        $('header #nav').css({'position':'relative','left':'0','width':'100%','height':'auto','display':'block'});
    }else if(w<=500){
        $('#gallery').css('left','0');
        $('header #nav').css({'top':'0','left':'100%','height':'100vh','width':'60vw','z-index':'100','position':'fixed'});
    }
    else{
        $('header #nav').css({'top':'0','left':'100%','height':'100vh','width':'60vw','z-index':'100','position':'fixed'});
    }
});
// 메뉴 버튼
$('header .hamb').click(function(){
    $('header #nav').show();
    $('header #nav').css({'left':'50%','transition':'none'})
});
$('header #nav .close').click(function(){
    $('header #nav').hide();
    $('header #nav').css({'left':'100%','transition':'none'})
});
// 줌 토글
$('#search .zoom').click(function(){
    $('#search .srch').toggleClass("active");

});
// 배너 슬라이드
var bannerpic = $('#bannerpic li'),
psts = 0;
bannerpic.eq(0).fadeIn(2000);
bannerpic.eq(1).fadeOut(2000);
bannerpic.eq(2).fadeOut(2000);

var start2=0;

setInterval(function(){
    if(start2==2){
        start2=0;
    }else{
        start2++;
    }
    bannerpic.eq(start2-1).fadeOut(2000);
    bannerpic.eq(start2).fadeIn(2000);
},6000);
$('#banner #btns').eq(0).click(function(){
    bannerpic.eq(0).fadeIn(1000);
    bannerpic.eq(0).css({'display':'block','transition':'all 0.5s'});
    bannerpic.eq(1).css({'display':'none'});
    bannerpic.eq(2).css({'display':'none'});
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
});
$('#banner #btns').eq(1).click(function(){
    bannerpic.eq(1).fadeIn(1000);
    bannerpic.eq(1).css({'display':'block','transition':'all 0.5s'});
    bannerpic.eq(2).css({'display':'none'});
    bannerpic.eq(0).css({'display':'none'});
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
});
$('#banner #btns').eq(2).click(function(){
    bannerpic.eq(2).fadeIn(1000);
    bannerpic.eq(2).css({'display':'block','transition':'all 0.5s'});
    bannerpic.eq(1).css({'display':'none'});
    bannerpic.eq(0).css({'display':'none'});
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
});
// 갤러리 슬라이드
var slides = document.querySelector('#gallery'), 
currentIdx =0,
slideWidth = '20',
prevBtn = document.querySelector('article #btn2'),
nextBtn = document.querySelector('article #btn3'),
slideLeft = document.querySelector('#gallery').style.left;

prevBtn.addEventListener('click',function(){

    if(slides.style.left >= '0%'){
        slides.style.left = '0%';
        moveSlide(0);
    }else{
        moveSlide(currentIdx-1);
    }
    
});

nextBtn.addEventListener('click',function(){
    if(slides.style.left <= '-100%'){
        slides.style.left = '-100%';
        moveSlide(5);
    }else{
        moveSlide(currentIdx+1);}
});

function moveSlide(num){
    slides.style.left = (-num*(slideWidth))+'%';
    slides.style.transition = 'all 0.5s';
    currentIdx = num;
}
// 갤러리 호버
var gallery = $('#gallery li');
var galText = $('#gallery dl');

$(gallery).hover(
    function(){
        $(this).children().stop().animate({top:'50%',opacity:'1'},500).css('color','white');
    },
    function(){
        $(this).children().stop().animate({top:'-50%',opacity:'0'},500).css('color','#222222');
    }
);