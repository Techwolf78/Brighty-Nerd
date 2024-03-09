document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.header .navbar');

    let menuBtn = document.querySelector('#menu-btn');
    if (menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
        };
    }

    window.onscroll = () => {
        navbar.classList.remove('active');
    };

    let mainVid = document.querySelector('.main-video');

    document.querySelectorAll('.course-3 .box .video video').forEach(vid => {

        vid.onclick = () => {
            let src = vid.getAttribute('src');
            mainVid.classList.add('active');
            mainVid.querySelector('video').src = src;
        };

    });

    let closeVidBtn = document.querySelector('#close-vid');
    if (closeVidBtn) {
        closeVidBtn.onclick = () => {
            mainVid.classList.remove('active');
        };
    }
});
