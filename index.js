var background1 = window.document.getElementById("bg")
var background2 = window.document.getElementById("bg02")
var background3 =  window.document.getElementById("bg03")
var background4 = window.document.getElementById("bg04")


function passarSlider(passar){
  
    if (passar ==='next01'){
        background1.style.display="none"
        background2.style.display="block"

    } else if (passar ==='next02'){
        background2.style.display="none"
        background3.style.display="block"
    } else{
        background3.style.display ="none"
        background4.style.display ="block"
    }

}

function voltarSlider(voltar){

    if(voltar ==="back04"){
        background4.style.display ='none';
        background3.style.display ='block';
    } else if (voltar ==="back03"){
        background3.style.display ='none'
        background2.style.display='block'
    } else{
        background2.style.display ='none'
        background1.style.display='block'
    }
        
    }

