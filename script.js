// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    // Close others
    document.querySelectorAll('.faq-item.open').forEach(open => {
      if (open !== item) open.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});

// Active nav link
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a').forEach(link => {
  if (link.getAttribute('href') === page) link.classList.add('active');
});
