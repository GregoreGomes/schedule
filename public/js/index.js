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

var element = document.querySelector('.card-db')

const cardsAdd = () =>{
    fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(content => {
        callCard(content)
    })
}


const callCard = (content) => {
    for(var i = 0; i < content.length; i++){
        var createDiv = document.createElement('div')
        createDiv.classList.add('card-db')

        const divPai = document.querySelector('.content');

        if(content[i].date == 0){
            console.log(' teste')
        }
        else if(content[i].date == 1){
            console.log(' teste2')
        }
        else if(content[i].date == 2){
            console.log(' teste2')
        }
        else if(content[i].date == 3){
            console.log(' teste2')
        }
        else if(content[i].date == 4){
            console.log(' teste2')
        }
        else if(content[i].date == 5){
            console.log(' teste2')
        }
        else if(content[i].date == 6){
            console.log(' teste2')
        }
        else if(content[i].date == 7){
            console.log(' teste2')
        }
        else{
            console('nada')
        }

        createDiv.innerHTML = `Atendimento: ${content[i].username}<br>Cliente: ${content[i].client}<br>Início: ${content[i].horaEntrada}<br>Saída: ${content[i].horaSaida} `
        element.appendChild(createDiv)
    }
}

cardsAdd()
