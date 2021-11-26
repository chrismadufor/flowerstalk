//Populate page with cart items from session storage

function fillCartPage() {
    const cartItemsWrap = document.querySelector('.cart-items-wrap')
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
                    <div class="item-name flex column">
                        <p class="cart-text">${item.name}</p>
                        <p class="light-text">In stock - 200</p>
                    </div>
                </div>
                <div class="price-wrap flex between">
                    <p>${item.price}</p>
                    <p>x</p>
                    <div class="count-wrap flex">
                        <i class="far fa-minus-circle" onclick="decreaseItemNumber()"></i>
                        <input type="text" class="itemNumber" value='2'>
                        <i class="far fa-plus-circle" onclick="increaseItemNumber()"></i>
                    </div>
                </div>
            </div>
            <div class="total one flex between">
                <div class="total-text flex column ">
                    <p class="light-text">Sub total</p>
                    <p class="cart-text">N${item.price}</p>
                </div>
                <i class="far fa-trash" onclick="deleteCartItem(${item.id})"></i>
            </div>                
        </div>
        `
        stage.unshift(div)
    })
    stage.forEach(item => cartItemsWrap.appendChild(item))
    
}
fillCartPage()

function decreaseItemNumber() {
    console.log("Click!")

}

function increaseItemNumber() {
    console.log("Clicked!")

}

function deleteCartItem(id) {
    console.log("Deleted! " + id)

}
// Delete an item from cart
