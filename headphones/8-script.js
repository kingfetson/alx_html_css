// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
hamburger.addEventListener('click', function() {
  nav.classList.toggle('open');
  // Toggle icon between bars and close
  this.innerHTML = nav.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
// Optional: Close menu when a link is clicked (mobile)
document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 480) {
      nav.classList.remove('open');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});