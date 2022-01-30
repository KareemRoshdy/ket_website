let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.fa-bars');

menuBtn.onclick = () =>{
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

window.onscroll = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times');

}