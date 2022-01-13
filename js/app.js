const handMenu =  document.querySelector('#bar');
const nav =  document.querySelector('#navbar');
const closeMenu =  document.querySelector('#close');

//Check if any user click handMenu Side Menu Show
handMenu.addEventListener('click', () =>{
    nav.classList.add('active');
})
//Check if any user click handMenu Display None Menu Show
closeMenu.addEventListener('click', () =>{
    nav.classList.remove('active');
})


//Product Image Slider
const mainImage =  document.querySelector('#mainImage');
const smallImage =  document.querySelectorAll('.small_img');

smallImage.forEach(item =>{
   item.addEventListener('click', () =>{
       mainImage.src = item.src;
   })
})