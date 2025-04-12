let ColorOne = document.querySelector (".Color1")
let ColorTwo = document.querySelector (".Color2")
let ColorThree = document.querySelector (".Color3")
ColorOne.addEventListener ("input",function(){
console.log(this.value)
let td = document.querySelector ("td")
td.style.borderColor=this.valued
}) 