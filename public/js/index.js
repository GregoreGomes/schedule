var floating = document.querySelector(".floating")
var iconPlus = document.querySelector(".fa-plus")
var iconMinus = document.querySelector(".fa-minus")
var divContent = document.querySelector(".floatingActive")
var buttonAdd = document.querySelector(".buttonAdd")

var open = openMenu = () => {
    floating.classList.add("active")
    iconPlus.classList.remove('active')
    setTimeout(function () {
        divContent.classList.add("active")
        iconMinus.classList.add("active")
    }, 300);
}
var close = closeMenu = () => {
    floating.classList.remove("active")
    iconPlus.classList.add('active')
    iconMinus.classList.remove('active')
    divContent.classList.remove("active")
}

iconPlus.addEventListener("click", open)
iconMinus.addEventListener("click", close)
buttonAdd.addEventListener("click", close)

// rest

var element = document.querySelector('.card')

const cardsAdd = () =>{
    fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(content => {
        callCard(content)
    })
}

const callCard = (content) => {
    content.forEach(e => {
        element.innerHTML = `Atendimento: ${e.username}<br>Cliente:${e.client} `
        console.log(e)
    });  
}

cardsAdd()