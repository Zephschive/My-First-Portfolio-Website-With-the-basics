function mymenuFunction(){
    var menuBth =  document.getElementById("myNavMenu")

    if(menuBth.className === "nav-menu"){
        menuBth.className +=" responsive";
    }else{
        menuBth.className = "nav-menu";
    } 
    
}

