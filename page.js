
function changeBg(){

    var navbar=document.getElementById('navbar');
    var scroolValue=window.scrollY;
    if(scroolValue<150){
        navbar.classList.remove('bgColor');
    
    }
    else{
        navbar.classList.add('bgColor');

    }

}

window.addEventListener('scroll',changeBg);