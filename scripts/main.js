//VARIABLES***********************************
const hamIcon = document.querySelector('.ham-icon');
const phoneNav = document.querySelector('.phone-nav');
const closeIcon = document.querySelector('.close-icon');
const section2 = document.querySelector('.section2');
const mailList = document.querySelector('.mail-list');
const nameInput = document.querySelector('.name-input')
//Event lISTENERS******************************
hamIcon.addEventListener('click', () => {
  phoneNav.style.left = '0px';
});

closeIcon.addEventListener('click',()=>{
  phoneNav.style.left = '-250px';
})

//closes ham menu when link or close icon is clicked
phoneNav.addEventListener('click',(e)=>{
  if(e.target.tagName == 'A' || e.target == closeIcon){
    phoneNav.style.left='-250px';
  }
})


//Functions******************************















//tester event listener and function for slide out icons
const section3 = document.querySelector('.section3');
const unlimPowButt = document.querySelector('.unlimited-power')
const icons = document.querySelector('.icons');
function funky(e){
 if (e.target == unlimPowButt){
   icons.classList.add('slide-in')
 }
}
section3.addEventListener('click', funky);





// window.addEventListener('scroll',()=>{
//   const scrollPosition = window.pageYOffset;
//   if(scrollPosition > 300) {
//     section2.style = 'filter:blur(2px); transition:.9s ease-in-out';
//   } else {
//     section2.style = 'filter:none transition:.9s ease';
//   }
// })
