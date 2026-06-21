

const readButtons = document.querySelectorAll('.read-more-btn');

readButtons.forEach(button => {

    button.addEventListener('click', () => {

        const paragraph =
            button.parentElement.querySelector('.service-text');

        const moreText =
            paragraph.querySelector('.more-text');

        if (paragraph.classList.contains('expanded')) {

            paragraph.classList.remove('expanded');
            moreText.style.display = 'none';
            button.innerHTML = 'Read More →';

        } else {

            paragraph.classList.add('expanded');
            moreText.style.display = 'inline';
            button.innerHTML = 'Read Less ←';

        }

    });

});