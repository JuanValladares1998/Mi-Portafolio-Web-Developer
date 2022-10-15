const svg = document.querySelectorAll('.svg');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    svg[0].style.bottom = (300 + (value * 0.3)) + 'px';
    svg[1].style.bottom = (250 + (value * 0.3)) + 'px';
    svg[2].style.bottom = (-30 + (value * 0.1)) + 'px';
    svg[3].style.bottom = (-30 + (value * 0.15)) + 'px';
    svg[4].style.bottom = (210 + (value * 0.45)) + 'px';
    svg[5].style.bottom = (100 + (value * 0.4)) + 'px';
    svg[6].style.bottom = (220 + (value * 0.55)) + 'px';
    svg[7].style.bottom = (220 + (value * 0.48)) + 'px';
    svg[8].style.bottom = (120 + (value * 0.58)) + 'px';
});
