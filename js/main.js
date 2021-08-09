const burger = document.querySelector('.btnBurger');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const overlay =document.querySelector('.overlay');
const headerMenu = document.querySelector('.header-menu')
burger.addEventListener('click', function(){
  if(close.classList.contains('change')){
    open.classList.add('change');
    close.classList.remove('change');
    overlay.classList.add('active');
    headerMenu.style.display = 'block';
  }else if(open.classList.contains('change')){
    open.classList.remove('change');
    close.classList.add('change');
    overlay.classList.remove('active');
    headerMenu.style.display = 'none';
  }
});

