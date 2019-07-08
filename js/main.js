 $(document).ready(function(){


    //Owl Carousel JS Startup   Code 
    $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplay:true, 
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    //Counter Up JS Code 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
      });



 });
