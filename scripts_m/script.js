


let links = document.querySelectorAll(".menu-item > a");
console.log(links)
for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}


let buttons = document.getElementsByClassName("product-button");
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
    
}



