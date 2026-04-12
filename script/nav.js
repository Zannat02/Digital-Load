document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileServicesBtn = document.getElementById('mobile-services-btn');
  const mobileDropdown = document.getElementById('mobile-dropdown');

  let dropdownOpen = false;

  // Mobile Menu Toggle 
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');

      // Toggle between hamburger - cross
      if (mobileMenu.classList.contains('hidden')) {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }

      // Reset dropdown state
      dropdownOpen = false;
      if (mobileDropdown) mobileDropdown.classList.add('hidden');
    });
  }

  // Services Dropdown Logic 
  if (mobileServicesBtn && mobileDropdown) {
    mobileServicesBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if (!dropdownOpen) {
       
        mobileDropdown.classList.remove('hidden');
        dropdownOpen = true;
      } else {
      
        window.location.href = "service.html";
      }
    });
  }

  // Reset on resize 
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && mobileMenu) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      dropdownOpen = false;
      if (mobileDropdown) mobileDropdown.classList.add('hidden');
    }
  });
});


