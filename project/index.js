const container = document.getElementById('reviews-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Calculate how much to scroll: Card width (432px) + Gap (16px)
const scrollAmount = 448; 

nextBtn.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // This makes the sliding look nice
    });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});