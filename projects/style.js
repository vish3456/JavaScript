const buttons = document.querySelectorAll(".button")
buttons.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        if(e.target.id=="red"){
            document.body.style.backgroundColor="red"
        }
        else if(e.target.id=="blue"){
            document.body.style.backgroundColor="blue"
        }
        else if(e.target.id=="green"){
            document.body.style.backgroundColor="green"
        }   
        else if(e.target.id=="yellow"){
            document.body.style.backgroundColor="yellow"
        }
    })
})