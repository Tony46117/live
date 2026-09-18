const livestock = [
    {
        id: 1,
        name: "4 Months Old Dorper",
        price: 3500,
        image: "images/4-months-dorper.webp",
        specs: ["4 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Ready for Fattening", "Good Genetics", "Dewormed"]
    },
    {
        id: 2,
        name: "5 Months Old Dorper",
        price: 5500,
        image: "images/5-months-dorper-1.webp",
        specs: ["5 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Growing Well", "Strong Build", "Dewormed"]
    },
    {
        id: 3,
        name: "5 Months Old Dorper",
        price: 5500,
        image: "images/5-months-dorper-2.webp",
        specs: ["5 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Growing Well", "Strong Build", "Dewormed"]
    },
    {
        id: 4,
        name: "6 Months Old Dorper",
        price: 6500,
        image: "images/6-months-dorper-1.webp",
        specs: ["6 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Near Market Weight", "Excellent Condition", "Dewormed"]
    },
    {
        id: 5,
        name: "6 Months Old Dorper",
        price: 6500,
        image: "images/6-months-dorper-2.webp",
        specs: ["6 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Near Market Weight", "Excellent Condition", "Dewormed"]
    },
    {
        id: 6,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7-months-dorper-1.webp",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 7,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7-months-dorper-2.webp",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 8,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7-months-dorper-3.webp",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 9,
        name: "7 Months Old Dorper",
        price: 6500,
        image: "images/7-months-dorper-4.webp",
        specs: ["7 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Market Ready", "Prime Condition", "Dewormed"]
    },
    {
        id: 10,
        name: "10 Months Old Dorper",
        price: 9500,
        image: "images/10-months-dorper.webp",
        specs: ["10 Months", "Male/Female", "Vaccinated", "Healthy"],
        features: ["Breeding Stock", "Mature Weight", "Dewormed"]
    },
    {
        id: 11,
        name: "Pregnant Female Dorper",
        price: 13500,
        image: "images/pregnant-dorper.webp",
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

// Neutral placeholder shown if any image ever fails to load (no broken-image icons)
const IMAGE_PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420"><rect width="600" height="420" fill="#f3f4f6"/><g fill="none" stroke="#9ca3af" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="300" cy="250" rx="130" ry="85"/><circle cx="215" cy="190" r="42"/><path d="M195 165l-18-14M195 165l-18 14M235 165l18-14M235 165l18 14"/></g><text x="300" y="385" text-anchor="middle" font-family="Arial" font-size="22" fill="#6b7280">Dorper Sheep Farm</text></svg>`
);

document.addEventListener("error", (e) => {
    const t = e.target;
    if (t && t.tagName === "IMG" && !t.dataset.fallback) {
        t.dataset.fallback = "1";
        t.src = IMAGE_PLACEHOLDER;
    }
}, true);

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
// ===== Live Satellite Location Map (Kibois, Nakuru, Kenya) =====
const FARM_LOCATION = { lat: -0.2462, lng: 36.2435 }; // Kibois, Nakuru, Kenya

function initSatelliteMap() {
    const mapEl = document.getElementById('satelliteMap');
    if (!mapEl || typeof L === 'undefined') return;

    const map = L.map('satelliteMap', { scrollWheelZoom: false }).setView([FARM_LOCATION.lat, FARM_LOCATION.lng], 15);

    // Live satellite imagery (Esri World Imagery)
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Imagery &copy; Esri, Maxar, Earthstar Geographics'
    });

    const street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    });

    satellite.addTo(map);
    L.control.layers({ 'Satellite': satellite, 'Street Map': street }).addTo(map);

    // Farm pin with pulse animation
    const farmIcon = L.divIcon({
        className: 'farm-pin',
        html: '<div class="farm-pin-dot"></div><div class="farm-pin-pulse"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
    L.marker([FARM_LOCATION.lat, FARM_LOCATION.lng], { icon: farmIcon })
        .addTo(map)
        .bindPopup('<strong>Dorper Sheep Farm</strong><br>Kibois, Nakuru, Kenya');

    // Coordinates readout
    const coordsEl = document.getElementById('mapCoords');
    const formatCoord = (v, pos, neg) => `${Math.abs(v).toFixed(5)}\u00b0 ${v >= 0 ? pos : neg}`;
    const farmCoordsText = () => `\ud83d\udccd ${formatCoord(FARM_LOCATION.lat, 'N', 'S')}, ${formatCoord(FARM_LOCATION.lng, 'E', 'W')} - Kibois, Nakuru`;
    if (coordsEl) {
        coordsEl.textContent = farmCoordsText();
        map.on('mousemove', (e) => {
            coordsEl.textContent = `\ud83d\udccd ${formatCoord(e.latlng.lat, 'N', 'S')}, ${formatCoord(e.latlng.lng, 'E', 'W')}`;
        });
        map.on('mouseout', () => { coordsEl.textContent = farmCoordsText(); });
    }

    // Live GPS tracking of the visitor
    const gpsBtn = document.getElementById('liveGpsBtn');
    let gpsWatchId = null;
    let gpsMarker = null;
    let gpsAccuracyCircle = null;

    if (gpsBtn) {
        gpsBtn.addEventListener('click', () => {
            // Toggle off
            if (gpsWatchId !== null) {
                navigator.geolocation.clearWatch(gpsWatchId);
                gpsWatchId = null;
                gpsBtn.textContent = '\ud83d\udce1 Live GPS: Off';
                gpsBtn.classList.remove('gps-on');
                if (gpsMarker) { map.removeLayer(gpsMarker); gpsMarker = null; }
                if (gpsAccuracyCircle) { map.removeLayer(gpsAccuracyCircle); gpsAccuracyCircle = null; }
                return;
            }

            if (!('geolocation' in navigator)) {
                gpsBtn.textContent = '\ud83d\udce1 GPS not supported';
                return;
            }

            gpsBtn.textContent = '\ud83d\udce1 Live GPS: On';
            gpsBtn.classList.add('gps-on');

            const gpsIcon = L.divIcon({
                className: 'gps-pin',
                html: '<div class="gps-pin-dot"></div>',
                iconSize: [18, 18],
                iconAnchor: [9, 9]
            });

            gpsWatchId = navigator.geolocation.watchPosition((pos) => {
                const { latitude, longitude, accuracy } = pos.coords;
                if (!gpsMarker) {
                    gpsMarker = L.marker([latitude, longitude], { icon: gpsIcon }).addTo(map).bindPopup('You are here');
                    gpsAccuracyCircle = L.circle([latitude, longitude], {
                        radius: accuracy || 20,
                        color: '#007bff', weight: 1,
                        fillColor: '#007bff', fillOpacity: 0.15
                    }).addTo(map);
                    map.setView([latitude, longitude], Math.max(map.getZoom(), 16));
                } else {
                    gpsMarker.setLatLng([latitude, longitude]);
                    gpsAccuracyCircle.setLatLng([latitude, longitude]).setRadius(accuracy || 20);
                }
            }, () => {
                gpsBtn.textContent = '\ud83d\udce1 GPS permission denied';
                gpsWatchId = null;
                gpsBtn.classList.remove('gps-on');
            }, { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 });
        });
    }
}

document.addEventListener('DOMContentLoaded', initSatelliteMap);
