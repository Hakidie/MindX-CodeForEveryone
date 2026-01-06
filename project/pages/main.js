// Function load nội dung từ file HTML khác
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load header.html vào #header-placeholder
loadHTML('header.html', 'header-placeholder');

// Load footer.html vào #footer-placeholder
loadHTML('footer.html', 'footer-placeholder');

loadHTML('profile_sidebar.html', 'profile-sidebar-placeholder');



// Scroll button for About Us in homepage
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