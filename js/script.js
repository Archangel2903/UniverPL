(function(){
    let containers = document.querySelectorAll('.swiper-container');
    if (containers.length > 0) {
        let slider;
        let slide = document.querySelectorAll('.swiper-container .swiper-slide').length;

        if (slide > 1) {
            slider = new Swiper('.swiper-container', {
                observer: true,
                observeParents: true,
                loop: true,
                autoplay: true,
                spaceBetween: 40,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                dynamicBullets: true,
                /*navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },*/
                /*scrollbar: {
                    el: '.swiper-scrollbar',
                },*/
            });
        }
    }
})();

(function (){
    // scrollToAnchor
    const anchors = document.querySelectorAll('a[href*="#"].scroll-bottom');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
})();

