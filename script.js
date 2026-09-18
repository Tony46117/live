const livestock = [
    {
        id: 1,
        name: "4 Months Old Dorper",
        price: 3500,
        image: "images/5 months.jpeg",
        specs: ["4 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Ready for Fattening", "Good Genetics", "Dewormed"]
    },
    {
        id: 2,
        name: "5 Months Old Dorper",
        price: 5500,
        image: "images/5 months sheeep.jpeg",
        specs: ["5 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Growing Well", "Strong Build", "Dewormed"]
    },
    {
        id: 3,
        name: "5 Months Old Dorper",
        price: 5500,
        image: "images/5 monthss sheep.jpeg",
        specs: ["5 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Growing Well", "Strong Build", "Dewormed"]
    },
    {
        id: 4,
        name: "6 Months Old Dorper",
        price: 6500,
        image: "images/6 months.jpeg",
        specs: ["6 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Near Market Weight", "Excellent Condition", "Dewormed"]
    },
    {
        id: 5,
        name: "6 Months Old Dorper",
        price: 6500,
        image: "images/6 months sheep.jpeg",
        specs: ["6 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Near Market Weight", "Excellent Condition", "Dewormed"]
    },
    {
        id: 6,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7 months.jpeg",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 7,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7 months sheep.jpeg",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 8,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7 months sheEp.jpeg",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 9,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7 mthS .jpeg",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 10,
        name: "10 Months Old Dorper",
        price: 9500,
        image: "images/1 year sheep.jpeg",
        specs: ["10 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Breeding Stock", "Mature Weight", "Dewormed"]
    },
    {
        id: 11,
        name: "Pregnant Female Dorper",
        price: 13500,
        image: "images/sheep 5 months.jpeg",
        specs: ["Pregnant", "Female", "Vaccinated", "Healthy"],
        features: ["Ready to Lamb", "Proven Breeder", "Dewormed"]
    }
];

const specIcons = {
    "4 Months": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "5 Months": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "6 Months": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "7 Months": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "10 Months": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "Pregnant": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8z"/><path d="M12 12v4"/><path d="M10 16h4"/></svg>`,
    "Male/Female": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "Female": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M12 18v-6"/></svg>`,
    "Vaccinated": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    "Healthy": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    "Dewormed": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
};

function getSpecIcon(spec) {
    return specIcons[spec] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}

function formatPrice(price) {
    return price.toLocaleString();
}

function renderLivestock() {
    const grid = document.getElementById('livestockGrid');
    if (!grid) return;

    grid.innerHTML = livestock.map(animal => `
        <article class="livestock-card">
            <img src="${animal.image}" alt="${animal.name}" class="livestock-image" loading="lazy">
            <div class="livestock-content">
                <div class="livestock-header">
                    <h3 class="livestock-name">${animal.name}</h3>
                    <span class="livestock-price">KSH ${formatPrice(animal.price)}</span>
                </div>
                <div class="livestock-specs">
                    ${animal.specs.map(spec => `
                        <span class="spec">
                            ${getSpecIcon(spec)}
                            ${spec}
                        </span>
                    `).join('')}
                </div>
                <div class="livestock-features">
                    ${animal.features.map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>
                <button class="btn-inquire" onclick="inquireAnimal('${animal.name}', ${animal.price})">Inquire Now</button>
            </div>
        </article>
    `).join('');
}

function inquireAnimal(name, price) {
    const message = `Hello, I'm interested in the ${name} priced at KSH ${formatPrice(price)}. Please provide more details and availability.`;
    const whatsappUrl = `https://wa.me/254753800708?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

function populateCategorySelect() {
    const select = document.getElementById('categorySelect');
    if (!select) return;

    const categories = [...new Set(livestock.map(a => a.name))];
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderLivestock();
    populateCategorySelect();

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.livestock-card, .features li, .contact-item, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const form = document.getElementById('inquiryForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const message = `Hello, I'm interested in Dorper sheep.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || 'Not provided'}\nCategory: ${data.category}\nMessage: ${data.message}`;
            const whatsappUrl = `https://wa.me/254753800708?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});