let shoppingCart = []
let total = 0
let itemInCart = {
	name: '',
	price: 0
}
const modal = document.querySelector('#shoppingCart')
const cartButton = document.querySelector('#cart-button')
const close = document.querySelector('#close')
const clear = document.querySelector('#clear')
const contentList = document.querySelector('#content-list')

let addToCart = document.querySelectorAll('li button')
let cartItemCount = document.querySelector('#cart-item-count')

cartItemCount.innerHTML = shoppingCart.length

for (let i = 0; i < addToCart.length; i++) {
	addToCart[i].addEventListener('click', () => {
		const item = addToCart[i].className
		console.log(item);
		addItemToCartArray(item)

	})
}

const addItemToCartArray = (className) => {
	let itemSelector = document.querySelectorAll('.' + className)
	itemInCart.name = itemSelector[0].innerHTML
	itemInCart.price = parseFloat(itemSelector[1].innerHTML.slice(1))
	shoppingCart.push(itemInCart)
	total += itemInCart.price
	cartItemCount.innerHTML = shoppingCart.length
	itemInCart = {
		name: '',
		price: 0
	}
}

cartButton.addEventListener('click', () => {
	modal.style.display = 'block'
	console.log(shoppingCart)
	renderList(shoppingCart)
})

close.addEventListener('click', () => {
	modal.style.display = 'none'
})

const renderList = (shoppingCartArray) => {
	let list = document.querySelector('#content-list')
	for (let i = 0; i < shoppingCartArray.length; i++) {
		let li = document.createElement('li')
		let span = document.createElement('span')
		span.setAttribute('class', 'content-price')
		span.innerHTML = '$' + shoppingCartArray[i].price
		li.appendChild(document.createTextNode(shoppingCartArray[i].name))
		li.appendChild(span)
		list.appendChild(li)
		document.querySelector('#total').innerHTML = '$' + total.toFixed(2)
	}
}

const clearCart = () => {
	shoppingCart = []
	total = 0
	document.querySelector('.modal-content').innerHTML = ''
	document.querySelector('#total').innerHTML = '$' + 0
	document.querySelector('#cart-item-count').innerHTML = 0
}

clear.addEventListener('click', () => {
	console.log('clear');
	clearCart()
})
