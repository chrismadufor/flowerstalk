function goToHomePage() {
    window.location.assign('index.html')

}
function goToCart() {
    window.location.assign('cart.html')

}

$('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:2
    //     },
    //     1000:{
    //         items:3
    //     }
    // }
})