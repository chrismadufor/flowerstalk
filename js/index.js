function goToHomePage() {
    window.location.assign('index.html')

}
function goToCart() {
    window.location.assign('cart.html')

}


function showMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav')
    if (mobileNav.classList.contains('show-nav')) {
        mobileNav.classList.remove('show-nav')
        document.querySelector('body').classList.add('lock-scroll')
    }
        
    else {
        mobileNav.classList.add('show-nav')
        document.querySelector('body').classList.remove('lock-scroll')
    }
}

window.onclick = function(e) {
    let modal = document.querySelector('.modal')
    if (e.target == modal) {
        closeModal()
    }
}

function closeModal() {
    let modal = document.querySelector('.modal')
    if (modal.style.display == 'none')
        modal.style.display = 'flex'
    else modal.style.display = 'none'
}

function pickDeliveryMethod() {
    let pickUp = document.querySelector('#pickup')
    let delivery = document.querySelector('#delivery')
    let pickupInputs = document.querySelector('.pickup-inputs')
    let deliveryInputs = document.querySelector('.delivery-inputs')

    if(window.innerWidth > 500) {
        if(pickUp.checked) {
            pickupInputs.classList.remove('hide-inputs')
            deliveryInputs.classList.add('hide-inputs')
        }
        if(delivery.checked) {
            pickupInputs.classList.add('hide-inputs')
            deliveryInputs.classList.remove('hide-inputs')
        }
    }else {
        if(pickUp.checked) {
            pickupInputs.classList.remove('hide-inputs')
            deliveryInputs.classList.add('hide-inputs')
        }
        if(delivery.checked) {
            pickupInputs.classList.add('hide-inputs')
            deliveryInputs.classList.remove('hide-inputs')
        }
    }
}







