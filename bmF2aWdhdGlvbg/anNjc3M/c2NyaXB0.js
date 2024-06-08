document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('nav-button');
    const centerContainer = document.getElementById('center-container');

    navButton.addEventListener('click', () => {
        if (centerContainer.style.display === 'none' || centerContainer.style.display === '') {
            centerContainer.style.display = 'flex';
        } else {
            centerContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!centerContainer.contains(event.target) && event.target !== navButton) {
            centerContainer.style.display = 'none';
        }
    });
});
