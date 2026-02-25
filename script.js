// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    item.classList.toggle('open');
  });
});

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
