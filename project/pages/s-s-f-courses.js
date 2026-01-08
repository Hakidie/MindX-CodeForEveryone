// 1. Your Course Data
const courses = [
    { id: 1, title: "Beginner's Guide to Design", instructor: "Ronald Richards", ratings: 1200, date: "2023-10-01", popular: 50 },
    { id: 2, title: "Basic UI/UX", instructor: "Jane Doe", ratings: 920, date: "2024-01-01", popular: 190 },
    { id: 3, title: "Advanced UI/UX", instructor: "Jane Doe", ratings: 850, date: "2024-01-15", popular: 90 },
    { id: 4, title: "HTML & CSS Basics", instructor: "Albert Flores", ratings: 2500, date: "2022-05-20", popular: 30 },
    { id: 5, title: "HTML & CSS Advanced", instructor: "Albert Flores", ratings: 1500, date: "2022-06-20", popular: 20 },
    // Add more objects as needed...
    // Add more objects as needed...
];

// 2. State Management
let currentSettings = {
    search: "",
    sort: "newest",
    filter: "all"
};

// 3. Select Elements
const courseGrid = document.getElementById('courseGrid');
const searchInput = document.getElementById('courseSearch');
const sortOptions = document.querySelectorAll('#sortOptions a');
const filterOptions = document.querySelectorAll('#filterOptions a');

// 4. The Render Function
function renderCourses() {
    // A. Filter logic
    let filtered = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(currentSettings.search.toLowerCase());
        const matchesFilter = currentSettings.filter === "all" || 
            (currentSettings.filter === "high-rating" && course.ratings > 1000) ||
            (currentSettings.filter === "low-rating" && course.ratings <= 1000);
        return matchesSearch && matchesFilter;
    });

    // B. Sort logic
    filtered.sort((a, b) => {
        if (currentSettings.sort === "newest") return new Date(b.date) - new Date(a.date);
        if (currentSettings.sort === "oldest") return new Date(a.date) - new Date(b.date);
        if (currentSettings.sort === "popular") return b.popular - a.popular;
        return 0;
    });

    // C. Update HTML
    courseGrid.innerHTML = filtered.map(course => `
        <div class="card">
            <div class="picture"><img src="../pictures/Rectangle 1080.png"></div>
            <h3>${course.title}</h3>
            <p>By ${course.instructor}</p>
            <div class="progress-bar"><div class="progress"></div></div>
            <div class="rating">
                <img src="../pictures/icon/ratings.png">
                <p>(${course.ratings} Ratings)</p>
            </div>
        </div>
    `).join('');
}

// 5. Event Listeners
searchInput.addEventListener('input', (e) => {
    currentSettings.search = e.target.value;
    renderCourses();
});

sortOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.preventDefault();
        currentSettings.sort = opt.dataset.sort;
        document.getElementById('currentSort').innerText = opt.innerText;
        renderCourses();
    });
});

filterOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.preventDefault();
        currentSettings.filter = opt.dataset.filter;
        document.getElementById('currentFilter').innerText = opt.innerText;
        renderCourses();
    });
});

// Toggle Dropdowns
document.querySelectorAll('.dropdown-sort button, .dropdown-filter button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Close other dropdowns first
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== button.nextElementSibling) {
                content.classList.remove('show');
            }
        });
        
        // Toggle the clicked one
        button.nextElementSibling.classList.toggle('show');
        e.stopPropagation(); // Prevents immediate closing
    });
});

// Close dropdown if user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('button') && !event.target.parentElement.matches('button')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
}

// Initial Load
renderCourses();




//<div class="picture"><img src="${course.img}"></div>
//            <h3>${course.title}</h3>
//            <p>By ${course.author}</p>
//            <div class="progress-bar"><div class="progress"></div></div>
//            <div class="rating">
//                <img src="../pictures/icon/ratings.png">
//                <p>(${course.rating} Ratings)</p>
//            </div>