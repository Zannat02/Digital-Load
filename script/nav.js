

// document.addEventListener('DOMContentLoaded', function () {

//   const hamburgerBtn = document.getElementById('hamburger-btn');
//   const mobileMenu = document.getElementById('mobile-menu');
//   const hamburgerIcon = document.getElementById('hamburger-icon');
//   const closeIcon = document.getElementById('close-icon');
//   const mobileServicesBtn = document.getElementById('mobile-services-btn');
//   const mobileDropdown = document.getElementById('mobile-dropdown');

//   let dropdownOpen = false;


//   if (hamburgerIcon && closeIcon) {
//     hamburgerIcon.classList.remove('hidden');
//     closeIcon.classList.add('hidden');
//   }


//   if (hamburgerBtn && mobileMenu) {
//     hamburgerBtn.addEventListener('click', function () {
//       mobileMenu.classList.toggle('hidden');


//       if (mobileMenu.classList.contains('hidden')) {
//         if (hamburgerIcon && closeIcon) {
//           hamburgerIcon.classList.remove('hidden');
//           closeIcon.classList.add('hidden');
//         }
//       } else {
//         if (hamburgerIcon && closeIcon) {
//           hamburgerIcon.classList.add('hidden');
//           closeIcon.classList.remove('hidden');
//         }
//       }


//       dropdownOpen = false;
//       if (mobileDropdown) mobileDropdown.classList.add('hidden');
//     });
//   }


//   if (mobileServicesBtn && mobileDropdown) {
//     mobileServicesBtn.addEventListener('click', function (e) {
//       e.preventDefault();

//       if (!dropdownOpen) {
//         mobileDropdown.classList.remove('hidden');
//         dropdownOpen = true;
//       } else {
//         window.location.href = "service.html";
//       }
//     });
//   }


//   window.addEventListener('resize', function () {
//     if (window.innerWidth >= 1024 && mobileMenu) {
//       mobileMenu.classList.add('hidden');

//       if (hamburgerIcon && closeIcon) {
//         hamburgerIcon.classList.remove('hidden');
//         closeIcon.classList.add('hidden');
//       }

//       dropdownOpen = false;
//       if (mobileDropdown) mobileDropdown.classList.add('hidden');
//     }
//   });

// });




// if (mobileServicesBtn && mobileDropdown) {
//   mobileServicesBtn.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (!dropdownOpen) {
//       mobileDropdown.classList.remove('hidden');
//       dropdownOpen = true;
//     } else {
//       window.location.href = "service.html";
//     }
//   });
// }



// if (mobileBusinessBtn && mobileBusinessDropdown) {

//   mobileBusinessBtn.addEventListener('click', function (e) {

//     e.preventDefault();

//     if (!businessDropdownOpen) {

//       mobileBusinessDropdown.classList.remove('hidden');
//       businessDropdownOpen = true;

//     } else {

//       window.location.href = "businessDevelopment.html";

//     }

//   });

// }


document.addEventListener('DOMContentLoaded', function () {

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileServicesBtn = document.getElementById('mobile-services-btn');
  const mobileDropdown = document.getElementById('mobile-dropdown');

  const mobileBusinessBtn =
    document.getElementById('mobile-business-btn');

  const mobileBusinessDropdown =
    document.getElementById('mobile-business-dropdown');

  const servicesArrow =
    document.getElementById('services-arrow');

  const businessArrow =
    document.getElementById('business-arrow');


  let dropdownOpen = false;
  let businessDropdownOpen = false;



  function closeMobileMenu() {

    if (!mobileMenu) return;

    // Close mobile menu
    mobileMenu.classList.add('hidden');

    // Reset hamburger button
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    // Reset icons
    if (hamburgerIcon && closeIcon) {
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }

    // Close Services dropdown
    if (mobileDropdown) {
      mobileDropdown.classList.add('hidden');
    }

    // Close Business dropdown
    if (mobileBusinessDropdown) {
      mobileBusinessDropdown.classList.add('hidden');
    }

    // Reset arrows
    if (servicesArrow) {
      servicesArrow.classList.remove('rotate-180');
    }

    if (businessArrow) {
      businessArrow.classList.remove('rotate-180');
    }

    dropdownOpen = false;
    businessDropdownOpen = false;

  }





































  const mobileHeaderStyles = document.createElement('style');
  mobileHeaderStyles.textContent = `
    html,
    body {
      max-width: 100%;
      overflow-x: hidden;
    }

    header {
      max-width: 100vw;
      box-sizing: border-box;
      overflow-x: clip;
    }

    @media (max-width: 1023px) {
      header {
        position: relative;
      }

      header > div:first-of-type {
        width: 100%;
        max-width: 100%;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        box-sizing: border-box;
      }

      header img {
        max-width: min(9.5rem, 58vw);
        height: auto;
        object-fit: contain;
      }

      header nav {
        display: none !important;
      }

      #hamburger-btn {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 44px;
        width: 44px;
        height: 44px;
        margin-left: auto;
        border-radius: 9999px;
        background: rgba(255, 255, 255, 0.08);
      }

      #hamburger-btn svg,
      #hamburger-btn i {
        pointer-events: none;
      }

      #mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        width: 100vw !important;
        max-width: 100vw;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        box-sizing: border-box;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
      }

      #mobile-menu > div {
        width: 100%;
        max-width: 100%;
      }

      #mobile-dropdown {
        margin-left: 0 !important;
      }
    }
  `;
  document.head.appendChild(mobileHeaderStyles);


  if (hamburgerIcon && closeIcon) {
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }

  if (hamburgerBtn) {
    hamburgerBtn.setAttribute('type', 'button');
    hamburgerBtn.setAttribute('aria-label', 'Toggle navigation menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }


  if (hamburgerBtn && mobileMenu) {
    // hamburgerBtn.addEventListener('click', function () {
    //   mobileMenu.classList.toggle('hidden');
    //   hamburgerBtn.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));


    //   if (mobileMenu.classList.contains('hidden')) {
    //     if (hamburgerIcon && closeIcon) {
    //       hamburgerIcon.classList.remove('hidden');
    //       closeIcon.classList.add('hidden');
    //     }
    //   } else {
    //     if (hamburgerIcon && closeIcon) {
    //       hamburgerIcon.classList.add('hidden');
    //       closeIcon.classList.remove('hidden');
    //     }
    //   }


    //   dropdownOpen = false;
    //   if (mobileDropdown) mobileDropdown.classList.add('hidden');


    //   businessDropdownOpen = false;

    //   if (mobileBusinessDropdown)
    //     mobileBusinessDropdown.classList.add('hidden');
    // });

    hamburgerBtn.addEventListener('click', function () {

      if (mobileMenu.classList.contains('hidden')) {

        mobileMenu.classList.remove('hidden');

        hamburgerBtn.setAttribute('aria-expanded', 'true');

        if (hamburgerIcon && closeIcon) {
          hamburgerIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
        }

      } else {

        closeMobileMenu();

      }

    });


    if (servicesArrow) {
      servicesArrow.classList.remove('rotate-180');
    }

    if (businessArrow) {
      businessArrow.classList.remove('rotate-180');
    }
  }




  if (mobileServicesBtn && mobileDropdown) {

    mobileServicesBtn.addEventListener('click', function (e) {

      e.preventDefault();

      mobileDropdown.classList.toggle('hidden');

      if (servicesArrow) {
        servicesArrow.classList.toggle('rotate-180');
      }

    });

  }





  if (mobileBusinessBtn && mobileBusinessDropdown) {

    mobileBusinessBtn.addEventListener('click', function (e) {

      e.preventDefault();

      mobileBusinessDropdown.classList.toggle('hidden');

      if (businessArrow) {
        businessArrow.classList.toggle('rotate-180');
      }

    });

  }

  // window.addEventListener('resize', function () {
  //   if (window.innerWidth >= 1024 && mobileMenu) {
  //     mobileMenu.classList.add('hidden');
  //     if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');

  //     if (hamburgerIcon && closeIcon) {
  //       hamburgerIcon.classList.remove('hidden');
  //       closeIcon.classList.add('hidden');
  //     }

  //     dropdownOpen = false;
  //     if (mobileDropdown) mobileDropdown.classList.add('hidden');
  //   }


  //   businessDropdownOpen = false;

  //   if (mobileBusinessDropdown) {
  //     mobileBusinessDropdown.classList.add('hidden');
  //   }
  // });



  window.addEventListener('resize', function () {

    if (window.innerWidth >= 1024) {

      closeMobileMenu();

    }

  });


  window.addEventListener('scroll', function () {

    if (
      window.innerWidth < 1024 &&
      mobileMenu &&
      !mobileMenu.classList.contains('hidden')
    ) {

      closeMobileMenu();

    }

  }, { passive: true });





  if (servicesArrow) {
    servicesArrow.classList.remove('rotate-180');
  }

  if (businessArrow) {
    businessArrow.classList.remove('rotate-180');
  }


  window.addEventListener('pageshow', function () {

  closeMobileMenu();

});

});


