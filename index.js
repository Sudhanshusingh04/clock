const clock=document.querySelector("#clock")


setInterval(function(e){
    const date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)