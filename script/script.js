const text = document.getElementById('txt');
function change(){
    text.innerHTML = "Your life would be very empty if you didn't regret anything.";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const readMoreBtn = document.querySelector('.read-more-btn');
const txt = document.querySelector('.txt');

readMoreBtn.addEventListener('click', (e)=>{
  txt.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Lees Meer'){
    readMoreBtn.innerText = 'Lees meer';
  } else{
    readMoreBtn.innerText = 'Lees Minder';
  }

})