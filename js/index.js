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

// CART!!

function getCartDetails() {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    if (cartDetails === null) {
        sessionStorage.setItem('cartDetails', JSON.stringify({cartValue: 0, cartItems: []}))
    }
}
getCartDetails();

function getCartValue() {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    const cartNumber = document.querySelector('.cart-number')
    let cartValue = cartDetails.cartValue
    if (cartValue === 0) cartNumber.style.display = 'none'
    else {
        cartNumber.style.display = 'flex'
        cartNumber.innerHTML = cartValue
    }
}
getCartValue()

// The idea here is that every item on the landing page or category page will have an id and when it is added to cart, we can use the id to know what to store in the session. Better ideas are welcome

const dummyData = [
    {
        type : 'Flower',
        name : 'Hibiscus Flower',
        price : 3500,
        img : 'd1.png',
        id: 'p1'
    },
    {
        type : 'Flower',
        name : 'Royal Roses',
        price : 4500,
        img : 'd2.png',
        id: 'p2'
    },
    {
        type : 'Flower',
        name : 'Pride of Barbados',
        price : 4500,
        img : 'd3.png',
        id: 'p3'
    },
    {
        type : 'Flower',
        name : 'Hibiscus Flower',
        price : 3500,
        img : 'd4.png',
        id: 'p4'
    },
    {
        type : 'Flower',
        name : 'Royal Roses',
        price : 4500,
        img : 'd5.png',
        id: 'p5'
    },
    {
        type : 'Flower',
        name : 'Pride of Barbados',
        price : 4500,
        img : 'd6.png', 
        id: 'p6'
    }
]

function addItemToCart(id) {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    let cartValue = cartDetails.cartValue
    let existingCartItem = cartItems.filter(item => item.id === id)
    
    // Check if item is already in cart

    if (!existingCartItem.length) {
        cartValue++
        newCartItem = dummyData.filter(item => item.id === id)
        sessionStorage.setItem('cartDetails', JSON.stringify({...cartDetails, cartValue: cartValue, cartItems: [...cartItems, newCartItem[0]]}))
    }
    else {
        alert('Item already in cart!')
    }
    
    getCartValue()
    getCartDetails()
}