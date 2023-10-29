let swiper;

let changing_slide = false;

let slides = {
    0: {
        place: 'Стадион',
        date: '25 Июня',
        time: '16:00',
        buy_link: '#',
        left: 'Соперник 1',
        right: 'Соперник 2',
    },
    1: {
        place: 'Стадион',
        date: '25 Июня',
        time: '17:00',
        buy_link: '#',
        left: 'Соперник 3',
        right: 'Соперник 4',
    },
    2: {
        place: 'Стадион',
        date: '26 Июня',
        time: '18:00',
        buy_link: '#',
        left: 'Соперник 5',
        right: 'Соперник 6',
    },
    3: {
        place: 'Стадион',
        date: '28 Июня',
        time: '19:00',
        buy_link: '#',
        left: 'Соперник 7',
        right: 'Соперник 8',
    },
    4: {
        place: 'Стадион',
        date: '29 Июня',
        time: '20:00',
        buy_link: '#',
        left: 'Соперник 9',
        right: 'Соперник 10',
    },
}

let swiper_options = {
    //loop: false,
    speed: 500,
    centeredSlides: true,
    slidesPerView: 5,
    initialSlide: 2,
    slideToClickedSlide: true,
    addSlidesAfter: 1,
    addSlidesBefore: 1,

    /*virtual: { //Не использую виртуальные слайды, т.к. не совсем подходят под требования по задаче
        slides: (function() {
            var slides = [];
            for (var i = 0; i < 5; i++ ) {
            slides.push(
                `<img src="https://via.placeholder.com/704x400" width="352" height="200">`
            );
            }
            console.log(slides)
            return slides;
        })()
    },*/
    on: {
        init: function() {
            transformSlides()
            console.log()
            setSideInfoBlocksData(this.activeIndex)
        },
        
        slideChangeTransitionStart: function() {
            changing_slide = true
            transformSlides()
            setSideInfoBlocksData(this.activeIndex)

        },
        slideChangeTransitionEnd: function() {
            changing_slide = false
            
        }
    }
}

createSlidesLayout(slides);
initSwiper();


function setSideInfoBlocksData(index) {
    let left_span = document.querySelector('.side-info-blocks .left span')
    let left_right = document.querySelector('.side-info-blocks .right span')

    left_span.innerHTML = slides[index].left
    left_right.innerHTML = slides[index].right
}

function createSlidesLayout(slides_obj) {

    let list = document.querySelector('.swiper-wrapper')

    for (let item in slides_obj) {
        let slide_obj = slides_obj[item]

        let slide_element = document.createElement('div')
        //slide_element.classList.add('item-hexagon')
        slide_element.classList.add('swiper-slide')

        let slide_inner = document.createElement('div')
        slide_inner.classList.add('slide-inner')

        let place = document.createElement('div')
        place.classList.add('place')
        place.innerHTML = slide_obj.place

        let date = document.createElement('div')
        date.classList.add('date')
        date.innerHTML = slide_obj.date

        let time = document.createElement('div')
        time.classList.add('time')
        time.innerHTML = slide_obj.time

        let buy_link = document.createElement('a')
        buy_link.classList.add('buy_link')
        buy_link.href = slide_obj.buy_link
        //buy_link.setAttribute('target', '_blank')
        buy_link.innerHTML = 'Купить билет'

        /*let left = document.createElement('div')
        left.classList.add('left')
        left.innerHTML = slide_obj.left

        let right = document.createElement('div')
        right.classList.add('right')
        right.innerHTML = slide_obj.right*/

        slide_inner.append(place)
        slide_inner.append(date)
        slide_inner.append(time)
        slide_inner.append(buy_link)
        /*slide_inner.append(left)
        slide_inner.append(right)*/

        slide_inner.setAttribute('data-before', slide_obj.left)
        slide_inner.setAttribute('data-after', slide_obj.right)

        slide_element.append(slide_inner)

        list.append(slide_element)
    }
}

function initSwiper() {
    swiper = new Swiper('.swiper', swiper_options)

    document.addEventListener("wheel", (event) => {

        if (changing_slide == false && swiper) {
            if (event.wheelDelta > 0) {
                swiper.slideNext()
            } else if (event.wheelDelta < 0) {
                swiper.slidePrev()
            }
        }
        
    });
}

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

    if (document.querySelector('.swiper-slide')) {
        prev1 = document.querySelector('.swiper-slide.swiper-slide-active').previousElementSibling
        next1 = document.querySelector('.swiper-slide.swiper-slide-active').nextElementSibling
    }

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