let scrollIcon = document.getElementById("scrollIcon");
let skillCard = document.querySelectorAll(".skill-progress");
let skillValue = document.querySelectorAll(".skill-progress span");
let start = 0;
let Speed = 100; 

function skillProgress(start, end, index){
    let pro = setInterval(()=>{
        if (start === end) {
         clearInterval(pro)   
        }else{
           if (end > 10) {
            start++
            skillValue[index].textContent = start;
            skillCard[index].style.background = `conic-gradient(#ED8F11 ${start * 3.6}deg, #ededed 0deg )`
           }else{
            start++
            skillCard[index].style.background = `conic-gradient(#ED8F11 ${start * 3.6}deg, #ededed 0deg )`
           }

        }
       }, Speed)
}

window.onload = function(){
    let html = skillProgress(0, 94, 0);
    let css = skillProgress(0, 90, 1);
    let js = skillProgress(0, 86, 2);
    let bootstrap = skillProgress(0, 68, 3);
    let sass = skillProgress(0, 10, 4);
    let pugJs = skillProgress(0, 10, 5);
    let gulpJs = skillProgress(0, 10, 6);
    let react = skillProgress(0, 10, 7);
    let node = skillProgress(0, 10, 8);
    let git = skillProgress(0, 10, 9);
    let python = skillProgress(0, 10, 10);
    let mySQL = skillProgress(0, 10, 11);
    let photoshop = skillProgress(0, 78, 12);
    let illisterator = skillProgress(0, 78, 13);
    let afterEffect = skillProgress(0, 10, 14);
    
}



window.onscroll = function(){
    if(scrollY >= 1000){
        document.getElementById("scrollIcon").style.display = "flex";
    }else{
        document.getElementById("scrollIcon").style.display = "none";


    }
}
scrollIcon.addEventListener("click", function(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
});



let socialMedia = document.getElementById("social-Media");
let fixed = document.querySelector(".fixed-section");
let btnShowClose = document.getElementById("showClose");

btnShowClose.addEventListener("click",()=>{
        if (btnShowClose.hasAttribute("class", "icon-arrow-left")){
        fixed.classList.toggle("show"); 

btnShowClose.classList.toggle("rotate")
        }
});




