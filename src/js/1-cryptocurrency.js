document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopLinks = document.querySelectorAll('.back');
  const moreInfoLink = document.getElementById('more-info');
  const backdrop = document.getElementById('backdrop');
  const closeInfoButton = document.getElementById('close-info');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      navLinks.forEach(item => item.classList.remove('active'));
      const newsTitles = document.querySelectorAll('.news-title');
      newsTitles.forEach(title => title.classList.remove('active'));

      this.classList.add('active');

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document
        .getElementById(targetId)
        .querySelector('.news-title');
      targetElement.classList.add('active');
    });
  });

  backToTopLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  moreInfoLink.addEventListener('click', function (event) {
    event.preventDefault();
    backdrop.style.display = 'flex';
  });

  closeInfoButton.addEventListener('click', function () {
    backdrop.style.display = 'none';
  });
});
