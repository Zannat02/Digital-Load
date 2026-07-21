
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

    header > div:first-of-type {
      min-height: 88px;
      box-sizing: border-box;
    }

    @media (orientation: landscape) and (max-height: 500px) {
      header > div:first-of-type {
        min-height: 56px;
        padding-top: 0.4rem !important;
        padding-bottom: 0.4rem !important;
      }

    }

    @media (max-width: 1023px) {
      header > div:first-of-type {
        min-height: 72px;
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


      header nav {
        display: none !important;
      }

   #hamburger-btn {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 38px;
        width: 38px;
        height: 38px;
        margin-left: auto;
        border-radius: 9999px;
        background: rgba(255, 255, 255, 0.08);
        font-size: 1.1rem;
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
    
      #mobile-dropdown {
      margin-left: 0 !important;
    }

    /* Touch devices (tablet + mobile), regardless of width, get hamburger nav like Android */
    @media (hover: none) {

      header nav {
        display: none !important;
      }

      #hamburger-btn {
        display: flex !important;
      }

      #mobile-menu:not(.hidden) {
        display: block !important;
      }

    }

    /* Desktop Safari dropdown fix: force-open class controlled by JS below */
    .group.force-open > div[class*="group-hover"] {
      opacity: 1 !important;
      visibility: visible !important;
    }
    
  `;
  document.head.appendChild(mobileHeaderStyles);

  // Desktop Safari dropdown fix: JS-controlled hover instead of pure CSS :hover
  if (window.matchMedia('(hover: hover)').matches) {

    document.querySelectorAll('header .group').forEach(function (groupEl) {

      groupEl.addEventListener('mouseenter', function () {
        groupEl.classList.add('force-open');
      });

      groupEl.addEventListener('mouseleave', function () {
        groupEl.classList.remove('force-open');
      });

    });

  }


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


