function goToHomePage() {
    window.location.assign('index.html')

}

function goToCart() {
    window.location.assign('cart.html')
}
function goToPaymentPage() {
    window.location.assign('payment-page.html')
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
        id: 1,
        count: 1,
        stock: 105
    },
    {
        type : 'Flower',
        name : 'Royal Roses',
        price : 4500,
        img : 'd2.png',
        id: 2,
        count: 1,
        stock: 95
    },
    {
        type : 'Flower',
        name : 'Pride of Barbados',
        price : 4500,
        img : 'd3.png',
        id: 3,
        count: 1,
        stock: 165
    },
    {
        type : 'Flower',
        name : 'Hibiscus Flower',
        price : 3500,
        img : 'd4.png',
        id: 4,
        count: 1,
        stock: 20
    },
    {
        type : 'Flower',
        name : 'Royal Roses',
        price : 4500,
        img : 'd5.png',
        id: 5,
        count: 1,
        stock: 10
    },
    {
        type : 'Flower',
        name : 'Pride of Barbados',
        price : 4500,
        img : 'd6.png', 
        id: 6,
        count: 1,
        stock: 70
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

function removeCartItem(id) {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    const items = cartItems.filter(item => item.id !== id)
    const cartNumber = document.querySelector('.cart-number')
    let cartValue = cartDetails.cartValue
    cartValue--
    if (cartValue <= 0) cartNumber.style.display = 'none'
    else {
        cartNumber.style.display = 'flex'
        cartNumber.innerHTML = cartValue
    }
    sessionStorage.setItem('cartDetails', JSON.stringify({...cartDetails, cartItems: items, cartValue: cartValue}))
}

function addItemToCartOnProductPage(id) {
    
    let button = document.querySelector('button')
    // console.log('button', button)
    if (button.innerHTML === 'Add to cart') {
        addItemToCart(id)
        button.style.backgroundColor = '#fd2929'
        button.innerHTML = 'Remove from cart'
    } 
    else if (button.innerHTML === 'Remove from cart') {
        removeCartItem(id)
        button.style.backgroundColor = '#001514'
        button.innerHTML = 'Add to cart'
    }
}

// Product details page

function goToProductPage(id) {
    sessionStorage.setItem('currentPageId', id);
    window.location.assign('product-details.html')
}

function checkIfProductIsInCart() {
    let button = document.querySelector('button')
    let currPage = sessionStorage.getItem('currentPageId')
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    let existingCartItem = cartItems.filter(item => item.id == currPage)
    if (existingCartItem.length !== 0) {
        button.style.backgroundColor = '#fd2929'
        button.innerHTML = 'Remove from cart'
        
    } else console.log('Not in cart')
}

function productDetailsPage() {
    const pageWrap = document.querySelector('.product-details-container')
    let currentPageId = sessionStorage.getItem('currentPageId')
    let currentProduct = dummyData.filter(item => item.id == currentPageId)
    pageWrap.innerHTML = `
        <div class="product-image">
            <img src='img/${currentProduct[0].img}' alt="">
        </div>
        <div class="product-details">
            <div>
                <h1>${currentProduct[0].name}</h1>
                <p class="stock light-text">In stock - ${currentProduct[0].stock}</p>
                <div class="price">Price: ${currentProduct[0].price}</div>
            </div>
            <button onclick = 'addItemToCartOnProductPage(${currentPageId})'>Add to cart</button>
        </div>
    `
}
productDetailsPage()