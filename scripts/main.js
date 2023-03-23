// home and back to top button
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


// navigation buttons
const listItems = document.querySelectorAll(".list-item");
let currentItemIndex = 0;

function updateNavigationButtons() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  prevButton.disabled = currentItemIndex === 0;
  nextButton.disabled = currentItemIndex === listItems.length - 1;
}

function navigate(direction) {
  listItems[currentItemIndex].classList.toggle("hidden");
  currentItemIndex += direction;
  listItems[currentItemIndex].classList.toggle("hidden");
  updateNavigationButtons();
}

document.getElementById("prev-button").addEventListener("click", () => navigate(-1));
document.getElementById("next-button").addEventListener("click", () => navigate(1));

listItems.forEach((item, index) => {
  if (index !== currentItemIndex) {
    item.classList.add("hidden");
  }
});
updateNavigationButtons();
