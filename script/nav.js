document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = hamburgerBtn.querySelector('i');
    
    // Mobile dropdown toggle
    const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const dropdownIcon = mobileDropdownBtn.querySelector('i');
    
    // Toggle mobile menu
    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('fa-bars');
        hamburgerIcon.classList.toggle('fa-times');
    });
    
    // Toggle mobile dropdown
    mobileDropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileDropdown.classList.toggle('hidden');
        dropdownIcon.classList.toggle('fa-chevron-down');
        dropdownIcon.classList.toggle('fa-chevron-up');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && e.target !== hamburgerBtn) {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
        
        if (!mobileDropdown.contains(e.target) && e.target !== mobileDropdownBtn) {
            mobileDropdown.classList.add('hidden');
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        }
    });
    
    // Reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
            mobileDropdown.classList.add('hidden');
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        }
    });
});