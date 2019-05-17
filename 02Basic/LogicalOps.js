let isGuest = false
let isPayment = true

if (isGuest && isPayment) {
    console.log('true')
} else if (isGuest || isPayment) {
    console.log('false')
}