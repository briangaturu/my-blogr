document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    menuToggle.addEventListener('click', function() {
      navContainer.classList.toggle('active');
      menuIcon.classList.toggle('active');
      closeIcon.classList.toggle('active');
      
      if (navContainer.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
    
    // Mobile dropdown functionality
    const groupToggles = document.querySelectorAll('.group-toggle');
    
    groupToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        if (window.innerWidth <= 992) {
          const groupMenu = this.nextElementSibling;
          const arrowIcon = this.querySelector('img');
          
          groupMenu.classList.toggle('active');
          
          if (groupMenu.classList.contains('active')) {
            arrowIcon.style.transform = 'rotate(180deg)';
          } else {
            arrowIcon.style.transform = 'rotate(0)';
          }
        }
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.link-group') && window.innerWidth <= 992) {
        groupToggles.forEach(toggle => {
          const groupMenu = toggle.nextElementSibling;
          const arrowIcon = toggle.querySelector('img');
          
          groupMenu.classList.remove('active');
          arrowIcon.style.transform = 'rotate(0)';
        });
      }
    });
  });