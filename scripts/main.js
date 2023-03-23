document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = 'Back to Top';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.display = 'none'; // Hide the button by default

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back to Home';
  homeButton.style.position = 'absolute';
  homeButton.style.left = '20px';
  homeButton.style.bottom = '20px';

  document.body.appendChild(backToTopButton);
  document.getElementById('page-footer').appendChild(homeButton);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  homeButton.addEventListener('click', () => {
    window.location.href = '/portofolio-web/index.html';
  });
});
