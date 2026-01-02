// Simple scroll animation
const cards = document.querySelectorAll('.course-card, .path-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if(pos < screen - 100){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

// Initial state
cards.forEach(card=>{
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
});
const btns=document.querySelectorAll('.add-btn');
btns.forEach(btn=>{
  btn.addEventListener('click', () => {
    window.location.href = 'https://gstudentapp.coursetopia.net/course/68ac6d2dc325c6952ae00b9c/';
  })
;});