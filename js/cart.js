//Populate page with cart items from session storage

function fillCartPage() {
    const cartItemsWrap = document.querySelector('.cart-items-wrap')
    cartItemsWrap.innerHTML = ''
    let stage = []
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    cartItems.map(item => {
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="cart-item flex between">
            <div class="cart-info flex between">
                <div class="item-name-wrap flex">
                    <img src="img/${item.img}" alt="">
                    <div class="item-name">
                        <p class="cart-text">${item.name}</p>
                        <p class="light-text">In stock - ${item.stock}</p>
                    </div>
                </div>
                <div class="price-wrap flex between">
                    <p>N${item.price}</p>
                    <p>x</p>
                    <div class="count-wrap flex">
                        <i class="far fa-minus-circle" onclick="decreaseItemNumber(${item.id})"></i>
                        <input type="text" class="itemNumber" value= ${item.count}>
                        <i class="far fa-plus-circle" onclick="increaseItemNumber(${item.id})"></i>
                    </div>
                </div>
            </div>
            <div class="total one flex between">
                <div class="total-text flex column ">
                    <p class="light-text">Sub total</p>
                    <p class="cart-text item-price">${item.price * item.count}</p>
                </div>
                <i class="far fa-trash" onclick="deleteCartItem(${item.id})"></i>
            </div>                
        </div>
        `
        stage.unshift(div)
    })
    stage.forEach(item => cartItemsWrap.appendChild(item))

    // Total of the cart items
    const totals = document.querySelectorAll('.item-price')
    totalsArray = []
    totals.forEach(total => totalsArray.push(Number(total.innerHTML)))
    const total = totalsArray.reduce((curr, acc) => curr + acc, 0)
    document.getElementById('grand-total').innerHTML = `N${total}`
}
fillCartPage()

function decreaseItemNumber(id) {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    item = cartItems.filter(item => item.id === id)
    if(item[0].count > 1)item[0].count--
    sessionStorage.setItem('cartDetails', JSON.stringify(cartDetails))
    fillCartPage()

}

function increaseItemNumber(id) {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    item = cartItems.filter(item => item.id === id)
    item[0].count++
    sessionStorage.setItem('cartDetails', JSON.stringify(cartDetails))
    fillCartPage()
}

function deleteCartItem(id) {
    let cartDetails = JSON.parse(sessionStorage.getItem('cartDetails'))
    let cartItems = cartDetails.cartItems
    const items = cartItems.filter(item => item.id !== id)
    sessionStorage.setItem('cartDetails', JSON.stringify({...cartDetails, cartItems: items}))
    fillCartPage()
}
// Delete an item from cart
