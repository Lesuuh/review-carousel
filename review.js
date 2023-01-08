var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("review");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-500px)";
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1000px)";
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}