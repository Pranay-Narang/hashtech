// Modal 1
var modalBtn1 = document.querySelector('.modal-btn1');
var modalBg1 = document.querySelector('.modal-bg1');
var closeBtn1 = document.querySelector('.btn-close1');
modalBtn1.addEventListener('click', function(){
    modalBg1.classList.add('bg-active');
});
closeBtn1.addEventListener('click', function(){
    modalBg1.classList.remove('bg-active')
});
//Modal 2
var modalBtn2 = document.querySelector('.modal-btn2');
var modalBg2 = document.querySelector('.modal-bg2');
var closeBtn2 = document.querySelector('.btn-close2');
modalBtn2.addEventListener('click', function(){
    modalBg2.classList.add('bg-active');
});
closeBtn2.addEventListener('click', function(){
    modalBg2.classList.remove('bg-active')
});
// Modal 3
var modalBtn3 = document.querySelector('.modal-btn3');
var modalBg3 = document.querySelector('.modal-bg3');
var closeBtn3 = document.querySelector('.btn-close3');
modalBtn3.addEventListener('click', function(){
    modalBg3.classList.add('bg-active');
});
closeBtn3.addEventListener('click', function(){
    modalBg3.classList.remove('bg-active')
});
