// navigation
const newSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links')

  burger.addEventListener('click', ()=>{
    // toggle nav-bar
    nav.classList.toggle('nav-active')
// toggle x
    burger.classList.toggle('toggle')
  })

}
newSlide();
