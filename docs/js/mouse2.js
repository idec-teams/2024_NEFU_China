const ripple = document.querySelector('.ripple');
let hoverElement = null;

function updateRipplePosition(x, y) {
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
}

document.addEventListener('mousemove', function(e) {
    requestAnimationFrame(() => updateRipplePosition(e.clientX, e.clientY));
});

document.addEventListener('mousedown', function() {
    ripple.classList.add('ripple-animation');
});

ripple.addEventListener('animationend', function() {
    ripple.classList.remove('ripple-animation');
});

document.querySelectorAll('img, a').forEach(element => {
    element.addEventListener('mouseover', function() {
        ripple.classList.add('ripple-hover');
        hoverElement = element;
    });
    element.addEventListener('mouseout', function() {
        ripple.classList.remove('ripple-hover');
        hoverElement = null;
    });
});
