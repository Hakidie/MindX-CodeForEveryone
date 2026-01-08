// 1. Teacher Data
const teachers = [
    { id: 1, name: "Ronald Richards", role: "UI/UX Designer", ratings: 1200, joinedDate: "2023-10-01", popularity: 50, img: "../pictures/instructor.png" },
    { id: 2, name: "Jane Doe", role: "Frontend Developer", ratings: 920, joinedDate: "2024-01-01", popularity: 190, img: "../pictures/instructor.png" },
    { id: 3, name: "Albert Flores", role: "Python Expert", ratings: 2500, joinedDate: "2022-05-20", popularity: 30, img: "../pictures/instructor.png" },
    { id: 4, name: "Kathryn Murphy", role: "Graphic Designer", ratings: 1500, joinedDate: "2022-06-20", popularity: 20, img: "../pictures/instructor.png" },
    // Add more objects as needed
];

// 2. State Management
let currentSettings = {
    search: "",
    sort: "newest",
    filter: "all"
};

// 3. Select Elements
const teacherGrid = document.getElementById('teacherGrid');
const searchInput = document.getElementById('courseSearch'); // Keeping your HTML ID
const sortOptions = document.querySelectorAll('#sortOptions a');
const filterOptions = document.querySelectorAll('#filterOptions a');
const teacherCount = document.querySelector('.title h2 span');

// 4. The Render Function
function renderTeachers() {
    // A. Filter logic
    let filtered = teachers.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(currentSettings.search.toLowerCase()) || 
                              teacher.role.toLowerCase().includes(currentSettings.search.toLowerCase());
        
        const matchesFilter = currentSettings.filter === "all" || 
            (currentSettings.filter === "high-rating" && teacher.ratings > 1000) ||
            (currentSettings.filter === "low-rating" && teacher.ratings <= 1000);
            
        return matchesSearch && matchesFilter;
    });

    // B. Sort logic
    filtered.sort((a, b) => {
        if (currentSettings.sort === "newest") return new Date(b.joinedDate) - new Date(a.joinedDate);
        if (currentSettings.sort === "oldest") return new Date(a.joinedDate) - new Date(b.joinedDate);
        if (currentSettings.sort === "popular") return b.popularity - a.popularity;
        return 0;
    });

    // Update Teacher Count in Heading
    if(teacherCount) teacherCount.innerText = `(${filtered.length})`;

    // C. Update HTML to match Teacher Card Design
    teacherGrid.innerHTML = filtered.map(teacher => `
        <div class="card">
            <div class="picture">
                <img src="${teacher.img}" alt="${teacher.name} avatar">
                <h3>${teacher.name}</h3>
                <p>${teacher.role}</p>
            </div>
            
            <button class="send-message">
                Send Message
                <img src="../pictures/profile/mail.png" alt="mail-icon">
            </button>
        </div>
    `).join('');
}

// 5. Event Listeners
searchInput.addEventListener('input', (e) => {
    currentSettings.search = e.target.value;
    renderTeachers();
});

sortOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.preventDefault();
        currentSettings.sort = opt.dataset.sort;
        document.getElementById('currentSort').innerText = opt.innerText;
        renderTeachers();
    });
});

filterOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.preventDefault();
        currentSettings.filter = opt.dataset.filter;
        document.getElementById('currentFilter').innerText = opt.innerText;
        renderTeachers();
    });
});

// 6. UI Interactions (Dropdowns)
document.querySelectorAll('.dropdown-sort button, .dropdown-filter button').forEach(button => {
    button.addEventListener('click', (e) => {
        const currentContent = button.nextElementSibling;
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== currentContent) {
                content.classList.remove('show');
            }
        });
        
        currentContent.classList.toggle('show');
        e.stopPropagation();
    });
});

window.onclick = function(event) {
    if (!event.target.matches('button') && !event.target.closest('button')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
}

// Initial Load
renderTeachers();