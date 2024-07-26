const dots = document.getElementById('dots');

function createDotElement() {
    const dot = document.createElement('span');
    dot.classList.add('dots');
    dot.textContent = '.';
    return dot;
}

function animateDots() {
    dots.innerHTML = '';
    const dot1 = createDotElement();
    const dot2 = createDotElement();
    const dot3 = createDotElement();

    dots.appendChild(dot1);
    setTimeout(() => dots.appendChild(dot2), 500);
    setTimeout(() => dots.appendChild(dot3), 1000);
}

animateDots();
setInterval(animateDots, 1500);
