// burger
const burger = document.querySelector('.burger');
const menuBody = document.querySelector('.header__wrapper');
if(burger){
    burger.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// ibg
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
       if (ibg[i].querySelector("img")) {
          ibg[i].style.backgroundImage =
             "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
       }
    }
}
ibg();