// JavaScript Document

$(document).ready(function(){

//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();
        // 點擊menu時，nav會以slide的方式出現或消失
	});

//menu rwd
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
    // 用電腦版時，nav會一直顯示；用手機版時，nav會隱藏，點擊menu才會出現
	});

// swiper
var swiper = new Swiper('.mySwiper', {
        speed:100, // 變換0.1秒
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 30, //圖片停留多久
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        });

//first button + content
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show(); 
    // 先把所有content隱藏，然後只秀出第0個content

//click event
    $(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        // $(this)：指的是當下正在互動（例如被點擊、滑鼠移過）的那個元素~
        // 點到的list加上ch_bg的class設定(也就是變色)，其他的siblings list(其他兄弟姊妹)就要移除顏色，以讓使用者知道自己點了哪個選項！稱為「遍歷」

        var _index = $(this).index();
        // var是在宣告有變數，_index是變數名稱，$(this).index()是抓取當下點擊的list的索引值(0,1,2)，並把它存到_index這個變數裡面。
        // 這樣就可以知道使用者點了哪個list，然後再去對應到content的索引值，讓對應的content秀出來。
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);


});

});