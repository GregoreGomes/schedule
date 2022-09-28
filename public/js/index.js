var buttonAdd = document.querySelector(".floating")
var iconPlus = document.querySelector(".fa-plus")
var iconMinus = document.querySelector(".fa-minus")
var divContent = document.querySelector(".floatingActive")

iconPlus.addEventListener("click", function(){
    buttonAdd.classList.add("active")
    iconPlus.classList.remove('active')
    iconMinus.classList.add("active")
    divContent.classList.add("active")
})

iconMinus.addEventListener("click", function(){
    buttonAdd.classList.remove("active")
    iconPlus.classList.add('active')
    iconMinus.classList.remove('active')
    divContent.classList.remove('active')
})