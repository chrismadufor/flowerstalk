const deliveryFee = {
    ikoyi: 2500,
    vi: 3500,
    marina: 3000,
    lekki: 6300,
    ajah: 7000,
    ikeja: 5000,
    apapa: 6000,
    festac: 8000,
    yaba: 4000,
    ikorodu: 15000,
}

let grandTotal;
let subtotalValue = sessionStorage.getItem('totalCartValue')
let subtotal = document.querySelector('.subtotal')
subtotal.innerHTML = new Intl.NumberFormat().format(subtotalValue)



function getDeliveryFee() {
    let deliveryOption = document.getElementById('delivery-option').value
    let deliveryFees = document.querySelector('.delivery-fee')
    let deliveryFeeValue;
    let total = document.querySelector('.total')
    let pickup = document.getElementById('pickup')
    let delivery = document.getElementById('delivery')
    let button = document.querySelector('.submit-btn')
    if (pickup.checked) deliveryFeeValue = 0;
    if (delivery.checked) deliveryFeeValue = deliveryFee[deliveryOption]
    if (deliveryOption == 'neutral' && delivery.checked) {
        deliveryFeeValue = '0'
        deliveryFees.innerHTML = new Intl.NumberFormat().format(deliveryFeeValue);
        button.style.opacity = '0.5'
        button.style.pointerEvents = 'none'
        grandTotal = Number(subtotalValue) + Number(deliveryFeeValue)
        total.innerHTML = grandTotal
    }
    else {
        deliveryFees.innerHTML = new Intl.NumberFormat().format(deliveryFeeValue);
        button.style.opacity = '1'
        button.style.pointerEvents = 'auto'
        grandTotal = Number(subtotalValue) + Number(deliveryFeeValue)
        total.innerHTML = new Intl.NumberFormat().format(grandTotal)
        console.log('grand', grandTotal)
    }
   
    // total.innerHTML = Number(subtotalValue) + Number(deliveryFeeValue)
}

function saveValue() {
    sessionStorage.setItem('totalCartValue', grandTotal)
    window.location.assign('payment-page.html')
    // save input details
}
