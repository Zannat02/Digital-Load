// document.addEventListener('DOMContentLoaded', function() {
//     // Hamburger menu toggle
//     const hamburgerBtn = document.getElementById('hamburger-btn');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const hamburgerIcon = hamburgerBtn.querySelector('i');
    
//     // Mobile dropdown toggle
//     const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
//     const mobileDropdown = document.getElementById('mobile-dropdown');
//     const dropdownIcon = mobileDropdownBtn.querySelector('i');
    
//     // Toggle mobile menu
//     hamburgerBtn.addEventListener('click', function(e) {
//         e.stopPropagation();
//         mobileMenu.classList.toggle('hidden');
//         hamburgerIcon.classList.toggle('fa-bars');
//         hamburgerIcon.classList.toggle('fa-times');
//     });
    
//     // Toggle mobile dropdown
//     mobileDropdownBtn.addEventListener('click', function(e) {
//         e.stopPropagation();
//         mobileDropdown.classList.toggle('hidden');
//         dropdownIcon.classList.toggle('fa-chevron-down');
//         dropdownIcon.classList.toggle('fa-chevron-up');
//     });
    
//     // Close menu when clicking outside
//     document.addEventListener('click', function(e) {
//         if (!mobileMenu.contains(e.target) && e.target !== hamburgerBtn) {
//             mobileMenu.classList.add('hidden');
//             hamburgerIcon.classList.remove('fa-times');
//             hamburgerIcon.classList.add('fa-bars');
//         }
        
//         if (!mobileDropdown.contains(e.target) && e.target !== mobileDropdownBtn) {
//             mobileDropdown.classList.add('hidden');
//             dropdownIcon.classList.remove('fa-chevron-up');
//             dropdownIcon.classList.add('fa-chevron-down');
//         }
//     });
    
//     // Reset on window resize
//     window.addEventListener('resize', function() {
//         if (window.innerWidth >= 768) {
//             mobileMenu.classList.add('hidden');
//             hamburgerIcon.classList.remove('fa-times');
//             hamburgerIcon.classList.add('fa-bars');
//             mobileDropdown.classList.add('hidden');
//             dropdownIcon.classList.remove('fa-chevron-up');
//             dropdownIcon.classList.add('fa-chevron-down');
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile menu toggle
//     const hamburgerBtn = document.getElementById('hamburger-btn');
//     const mobileMenu = document.getElementById('mobile-menu');
    
//     if (hamburgerBtn && mobileMenu) {
//         hamburgerBtn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             mobileMenu.classList.toggle('hidden');
//         });
//     }

//     // Close menu when clicking outside
//     document.addEventListener('click', function(e) {
//         if (mobileMenu && !mobileMenu.contains(e.target) && e.target !== hamburgerBtn) {
//             mobileMenu.classList.add('hidden');
//         }
//     });

//     // Reset on window resize
//     window.addEventListener('resize', function() {
//         if (window.innerWidth >= 768 && mobileMenu) {
//             mobileMenu.classList.add('hidden');
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerBtn = document.getElementById('hamburger-btn');
//     const mobileMenu = document.getElementById('mobile-menu');

//     if (hamburgerBtn && mobileMenu) {
//         hamburgerBtn.addEventListener('click', function() {
//             mobileMenu.classList.toggle('hidden');

//             // Toggle hamburger ↔ cross
//             if (!mobileMenu.classList.contains('hidden')) {
//                 hamburgerBtn.innerHTML = `
//                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
//                     </svg>
//                 `;
//             } else {
//                 hamburgerBtn.innerHTML = `
//                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
//                     </svg>
//                 `;
//             }
//         });
//     }

//     // Reset on resize (desktop এ গেলে auto-close হবে)
//     window.addEventListener('resize', function() {
//         if (window.innerWidth >= 768 && mobileMenu) {
//             mobileMenu.classList.add('hidden');
//             hamburgerBtn.innerHTML = `
//                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
//                 </svg>
//             `;
//         }
//     });
// });






document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownBtn = document.getElementById('mobile-dropdown-btn');
  const dropdownMenu = document.getElementById('mobile-dropdown');

  // Mobile menu toggle
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');

      // Toggle hamburger ↔ cross icon
      if (!mobileMenu.classList.contains('hidden')) {
    //     hamburgerBtn.innerHTML = `<i class="fas fa-times"></i>`;
    //   } else {
    //     hamburgerBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    //   }
    hamburgerBtn.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                `;
          } else {
               hamburgerBtn.innerHTML = `
                   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                   </svg>
                `;
           }
    });
  }

  // Mobile dropdown toggle
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', function () {
      dropdownMenu.classList.toggle('hidden');
      dropdownBtn.querySelector('i').classList.toggle('rotate-180');
    });
  }

  // Reset on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && mobileMenu) {
      mobileMenu.classList.add('hidden');
      hamburgerBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    }
  });
});


