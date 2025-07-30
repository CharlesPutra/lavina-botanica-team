// Bubble Animation for Hero 1
document.addEventListener('DOMContentLoaded', function () {
    // Create bubbles
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 50; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 100 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;

        bubblesContainer.appendChild(bubble);
    }

    // Add keyframes dynamically for particle movement
    const style = document.createElement('style');
    style.textContent = `
                @keyframes move {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(style);
});