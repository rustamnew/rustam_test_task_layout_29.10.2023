console.log('test log');

let changing_slide = false;






const slider = new Swiper('.slider', {
    loop: false,
    speed: 500,
    centeredSlides: true,
    slidesPerView: 5,
    initialSlide: 2,
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next'
    },
    addSlidesAfter: 1,
    addSlidesBefore: 1,
    on: {
        init: function() {
            transformSlides()
        },
        
        slideChangeTransitionStart: function() {
            changing_slide = true
            transformSlides()

        },
        slideChangeTransitionEnd: function() {
            changing_slide = false
        }
    }
})

document.addEventListener("wheel", (event) => {

    if (changing_slide == false) {
        if (event.wheelDelta > 0) {
            slider.slideNext()
        } else if (event.wheelDelta < 0) {
            slider.slidePrev()
        }
    }
    
});
  



function transformSlides() {

    if (document.querySelector('.swiper-slide-prev')) {
        document.querySelector('.swiper-slide-prev').classList.remove('swiper-slide-prev')
    }
    if (document.querySelector('.swiper-slide-next')) {
        document.querySelector('.swiper-slide-next').classList.remove('swiper-slide-next')
    }

    if (document.querySelector('.swiper-slide-prev-2')) {
        document.querySelector('.swiper-slide-prev-2').classList.remove('swiper-slide-prev-2')
    }
    if (document.querySelector('.swiper-slide-next-2')) {
        document.querySelector('.swiper-slide-next-2').classList.remove('swiper-slide-next-2')
    }

    if (document.querySelector('.swiper-slide-prev-3')) {
        document.querySelector('.swiper-slide-prev-3').classList.remove('swiper-slide-prev-3')
    }
    if (document.querySelector('.swiper-slide-next-3')) {
        document.querySelector('.swiper-slide-next-3').classList.remove('swiper-slide-next-3')
    }


    let next1
    let next2
    let next3

    let prev1
    let prev2 
    let prev3

    prev1 = document.querySelector('.swiper-slide.swiper-slide-active').previousElementSibling

    if (prev1) {
        prev1.classList.add('swiper-slide-prev')
        prev2 = document.querySelector('.swiper-slide.swiper-slide-active').previousElementSibling.previousElementSibling
        
        if (prev2) {
            prev2.classList.add('swiper-slide-prev-2')
            prev3 = document.querySelector('.swiper-slide.swiper-slide-active').previousElementSibling.previousElementSibling.previousElementSibling

            if (prev3) {
                prev3.classList.add('swiper-slide-prev-3')
            }
        }
    }

    next1 = document.querySelector('.swiper-slide.swiper-slide-active').nextElementSibling

    if (next1) {
        next1.classList.add('swiper-slide-next')
        next2 = next1.nextElementSibling
        
        if (next2) {
            next2.classList.add('swiper-slide-next-2')
            next3 = next2.nextElementSibling
    
            if (next3) {
                next3.classList.add('swiper-slide-next-3')
            }
        }
    }
    
}