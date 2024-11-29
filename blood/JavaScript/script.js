// Adding event listeners to menu items
document.querySelectorAll('.frame-3 > div').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Navigating to ${item.textContent}`);
    });
});

// Adding event listeners to dashboard items
document.querySelectorAll('.frame-281, .frame-284, .frame-282, .frame-283').forEach(item => {
    item.querySelector('.button2').addEventListener('click', () => {
        alert(`Button clicked for ${item.querySelector('div:nth-child(2)').textContent}`);
    });
});

// Example of handling image clicks if needed
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        alert(`Image with src: ${img.src} clicked`);
    });
});
