let ColorOne = document.querySelector (".Color1")
let ColorTwo = document.querySelector (".Color2")
let ColorThree = document.querySelector (".Color3")
let ColorFour = document.querySelector (".Color4")
ColorOne.addEventListener ("input",function(){
console.log(this.value)
let td = document.querySelectorAll ("td")

td.forEach(td1td => { 
  td1td.style.borderColor=this.value
});
}) 
ColorTwo.addEventListener ("input",function(){
    console.log(this.value)
    let table = document.querySelectorAll ("table")
    
    table.forEach(td1td => { 
      td1td.style.borderColor=this.value
    });
    }) 
    ColorThree.addEventListener ("input",function(){
        console.log(this.value)
        let td = document.querySelectorAll ("td")
        
        td.forEach(td1td => { 
          td1td.style.color=this.value
        });
        }) 
        ColorFour.addEventListener ("input",function(){
            console.log(this.value)
            let th = document.querySelectorAll ("th")
            
            th.forEach(td1td => { 
              td1td.style.color=this.value
            });
            }) 















































