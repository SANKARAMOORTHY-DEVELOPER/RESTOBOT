$(window).scroll(function() {

	var scrollPosition = $(this).scrollTop();
  var halfWindowheight = $(window).height() / 2;
  var page1Top = 0;
  var page2Top = $('.page2').offset().top - halfWindowheight;
  var page3Top = $('.page3').offset().top - halfWindowheight;
  var page4Top = $('.page4').offset().top - halfWindowheight;
  
  
	if(scrollPosition > page1Top && scrollPosition < page2Top) {
		$('.page1-title').addClass('page1-title-active');
		$('.page1-desc').addClass('page1-desc-active');
		$('.plate1').addClass('plate1-active');
		$('.pg2-green-back').removeClass('pg2-green-back-active');
		$('.pg2-white-desc').removeClass('pg2-white-desc-active');
		$('.pg2-photo-wrap').removeClass('pg2-photo-wrap-active');
		$('.pg2-photo').removeClass('pg2-photo-active');
		$('.grapes').removeClass('grapes-active')
		$('.pg3-red-back').removeClass('pg3-red-back-active');
		$('.pg3-white-desc').removeClass('pg3-white-desc-active');
		$('.pg3-photo-wrap').removeClass('pg3-photo-wrap-active');
		$('.pg3-photo').removeClass('pg3-photo-active');
		$('.leafs').removeClass('leafs-active')
		$('.pg4-bezh-back').removeClass('pg4-bezh-back-active');
		$('.pg4-white-desc').removeClass('pg4-white-desc-active');
		$('.pg4-photo-wrap').removeClass('pg4-photo-wrap-active');
		$('.pg4-photo').removeClass('pg4-photo-active');
		$('.dessert').removeClass('dessert-active')
	} else if (scrollPosition > page2Top && scrollPosition < page3Top) {
		$('.pg2-green-back').addClass('pg2-green-back-active');
		$('.pg2-white-desc').addClass('pg2-white-desc-active');
		$('.pg2-photo-wrap').addClass('pg2-photo-wrap-active');
		$('.pg2-photo').addClass('pg2-photo-active');
		$('.grapes').addClass('grapes-active')
		$('.page1-title').removeClass('page1-title-active');
		$('.page1-desc').removeClass('page1-desc-active');
		$('.plate1').removeClass('plate1-active');
		$('.body-wrap').removeClass('body-wrap-active');
		$('.pg3-red-back').removeClass('pg3-red-back-active');
		$('.pg3-white-desc').removeClass('pg3-white-desc-active');
		$('.pg3-photo-wrap').removeClass('pg3-photo-wrap-active');
		$('.pg3-photo').removeClass('pg3-photo-active');
		$('.leafs').removeClass('leafs-active')
		$('.pg4-bezh-back').removeClass('pg4-bezh-back-active');
		$('.pg4-white-desc').removeClass('pg4-white-desc-active');
		$('.pg4-photo-wrap').removeClass('pg4-photo-wrap-active');
		$('.pg4-photo').removeClass('pg4-photo-active');
		$('.dessert').removeClass('dessert-active')	
	} else if (scrollPosition > page3Top && scrollPosition < page4Top) {
		$('.pg3-red-back').addClass('pg3-red-back-active');
		$('.pg3-white-desc').addClass('pg3-white-desc-active');
		$('.pg3-photo-wrap').addClass('pg3-photo-wrap-active');
		$('.pg3-photo').addClass('pg3-photo-active');
		$('.leafs').addClass('leafs-active')
		$('.page1-title').removeClass('page1-title-active');
		$('.page1-desc').removeClass('page1-desc-active');
		$('.plate1').removeClass('plate1-active');
		$('.pg2-green-back').removeClass('pg2-green-back-active');
		$('.pg2-white-desc').removeClass('pg2-white-desc-active');
		$('.pg2-photo-wrap').removeClass('pg2-photo-wrap-active');
		$('.pg2-photo').removeClass('pg2-photo-active');
		$('.grapes').removeClass('grapes-active')		
		$('.pg4-bezh-back').removeClass('pg4-bezh-back-active');
		$('.pg4-white-desc').removeClass('pg4-white-desc-active');
		$('.pg4-photo-wrap').removeClass('pg4-photo-wrap-active');
		$('.pg4-photo').removeClass('pg4-photo-active');
		$('.dessert').removeClass('dessert-active')		
	} else if (scrollPosition > page4Top) {
		$('.pg4-bezh-back').addClass('pg4-bezh-back-active');
		$('.pg4-white-desc').addClass('pg4-white-desc-active');
		$('.pg4-photo-wrap').addClass('pg4-photo-wrap-active');
		$('.pg4-photo').addClass('pg4-photo-active');
		$('.dessert').addClass('dessert-active')
		$('.page1-title').removeClass('page1-title-active');
		$('.page1-desc').removeClass('page1-desc-active');
		$('.plate1').removeClass('plate1-active');	
		$('.pg2-green-back').removeClass('pg2-green-back-active');
		$('.pg2-white-desc').removeClass('pg2-white-desc-active');
		$('.pg2-photo-wrap').removeClass('pg2-photo-wrap-active');
		$('.pg2-photo').removeClass('pg2-photo-active');
		$('.grapes').removeClass('grapes-active')		
		$('.pg3-red-back').removeClass('pg3-red-back-active');
		$('.pg3-white-desc').removeClass('pg3-white-desc-active');
		$('.pg3-photo-wrap').removeClass('pg3-photo-wrap-active');
		$('.pg3-photo').removeClass('pg3-photo-active');
		$('.leafs').removeClass('leafs-active')		
	};
});