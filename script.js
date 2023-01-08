const toggleBtn = document.querySelector('.toggler');
toggleBtn.style.border="1px solid red !important"
const menus = document.querySelector('.links');
toggleBtn.addEventListener('click',()=>{
    menus.classList.toggle('shown');
})