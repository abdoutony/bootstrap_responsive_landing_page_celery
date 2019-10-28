$(function(){

	var header=$('.navstyle');
   $(window).scroll(function(){
   	 var ss = $(window).scrollTop();
   	 if (ss >= 100) {
            header.removeClass('navstyle').addClass("upper_nav1");
      } else {
            header.removeClass("upper_nav1").addClass('navstyle');
            }       
   });	
});
