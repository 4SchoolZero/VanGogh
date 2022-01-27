const text = document.getElementById('txt');
const ticketBtn = document.getElementById('js--btnTicket');
const ticket = document.getElementById('js--ticket');
const opening = document.getElementById('js--open');
const openBtn = document.getElementById('js--btnOpen');
const about = document.getElementById('js--about');
const aboutBtn = document.getElementById('js--btnAbout');
ticketBtn.onclick = function(){
  ticket.style.visibility = 'visible';
}
openBtn.onclick = function(){
  opening.style.visibility = 'visible';
}
aboutBtn.onclick = function(){
  about.style.visibility = 'visible';
}
$('[lang="es"]').hide();

$('#switch-lang').click(function() {
  $('[lang="es"]').toggle();
  $('[lang="en"]').toggle();
});
// function change(){
//     text.innerHTML = "Your life would be very empty if you didn't regret anything.";
// }
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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
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