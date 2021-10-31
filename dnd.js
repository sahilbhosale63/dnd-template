startAct();
function startAct(){

    let dragElements = document.getElementsByClassName("drag");
    for(let i=0; i<dragElements.length; i++){
        dragElements[i].addEventListener("mousedown", mousedown);
    }
}

function mousedown(event){

    event.target.addEventListener("mousemove", mousemove)
    
}

function mousemove(event){
    
    event.target.style.top = event.clientX;
    event.target.style.left = event.clientY;
    
}

function mouseup(){
    
}