$(function(){
 
    
//scroll bg    

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('bg')
    }
    else{
        $('.navbar').removeClass('bg')
    }
}); 
    
//slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,    
}); 
    
// veno box
$('.venobox').venobox();    
    
//team silder
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
responsive: [
    
    {
      breakpoint: 991,
      settings: {
      slidesToShow: 3,
      }
      
    },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 2,
      }
      
    },
    {
      breakpoint: 576,
      settings: {
      slidesToShow: 2,
      }
      
    }
   
    
  ]    
  
}); 
    
//feedback slider
$('.feedback-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
});    
    
// back to top
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1500);
});
    
$(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.navbar').addClass('bg');
        }else{
            $('.navbar').removeClass('bg');
        }
        
        if(scrolling>200){
            $('.back-top').fadeIn(500);
        }else{
            $('.back-top').fadeOut(500);
        }
        
    });    
    

    
});









