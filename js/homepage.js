/**
 * js/homepage.js - Homepage Interactive Functions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Course Tabs Switcher
  window.switchCourseTab = function(type) {
    const buttons = document.querySelectorAll('.hp-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.querySelector(`.hp-tab-btn[data-tab="${type}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const cards = document.querySelectorAll('.hp-course-card');
    cards.forEach(card => {
      if (type === 'all' || card.getAttribute('data-type') === type) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // Smooth Scroll Anchor Handler
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
