// Data Kucing Terbaru
const catData = {
    1: {
        name: "Haru",
        trait: "Pembully Hiro",
        age: "6 Tahun",
        food: "Salmon",
        desc: "Sebagai kucing tertua bersama Hiro, Haru sering kali tertangkap basah sedang mengganggu dan membully Hiro. Meski terlihat tangguh dan galak di luar, dia sebenarnya punya sisi manja yang hanya ditunjukkan pada orang tertentu.",
        img: "images/haru.jpg",
        category: "boss",
        gallery: ["images/haru1.jpg", "images/haru2.jpg", "images/haru3.jpg"] // Ganti dengan foto mini album Haru
    },
    2: {
        name: "Hiro",
        trait: "Korban Bullying",
        age: "6 Tahun",
        food: "Tuna",
        desc: "Hiro adalah kucing yang sangat sabar dan sering mengalah saat diganggu Haru. Daripada melawan, dia lebih suka menghabiskan waktunya mencari tempat persembunyian yang nyaman dan aman untuk tidur siang dengan tenang.",
        img: "images/hiro.jpg",
        category: "kalem",
        gallery: ["images/hiro1.jpg", "images/hiro2.jpg", "images/hiro3.jpg"] // Ganti dengan foto mini album Hiro
    },
    3: {
        name: "Jojo",
        trait: "Jagoan Rumah",
        age: "5 Tahun",
        food: "Ayam Rebus",
        desc: "Tidak ada sudut rumah yang luput dari pantauan Jojo. Sebagai jagoan sejati, dia selalu berpatroli ke setiap ruangan untuk memastikan wilayah kekuasaannya aman dari penyusup, termasuk dari cicak yang numpang lewat.",
        img: "images/jojo.jpg",
        category: "aktif",
        gallery: ["images/jojo1.jpg", "images/jojo2.jpg", "images/jojo3.jpg"] // Ganti dengan foto mini album Jojo
    },
    4: {
        name: "Hani",
        trait: "Paling Gembrot",
        age: "5 Tahun",
        food: "Wet Food",
        desc: "Pecinta makanan sejati! Hani memiliki tubuh yang paling gembul berkat hobinya menghabiskan sisa makanan kucing lain. Meski begitu, pelukannya adalah yang paling hangat dan empuk di rumah ini.",
        img: "images/hani.jpg",
        category: "kalem",
        gallery: ["images/hani1.jpg", "images/hani2.jpg", "images/hani3.jpg"] // Ganti dengan foto mini album Hani
    },
    5: {
        name: "Blacky",
        trait: "Penguasa Rumah",
        age: "4 Tahun",
        food: "Daging Sapi",
        desc: "Meskipun bukan yang paling tua, aura Blacky memancarkan kepemimpinan mutlak. Semua kucing segan padanya saat dia sedang diam mengawasi dari tempat tertinggi di ruang tamu.",
        img: "images/blacky.jpg",
        category: "boss",
        gallery: ["images/blacky1.jpg", "images/blacky2.jpg", "images/blacky3.jpg"] // Ganti dengan foto mini album Blacky
    },
    6: {
        name: "Lolly",
        trait: "Introvert",
        age: "4 Tahun",
        food: "Snack Kucing",
        desc: "Lolly sangat menikmati me-time nya. Dia lebih suka menyendiri di dalam kardus bekas paket atau bersembunyi di bawah meja. Dia butuh waktu untuk percaya pada orang baru, namun sangat setia pada pemiliknya.",
        img: "images/lolly.jpg",
        category: "kalem",
        gallery: ["images/lolly1.jpg", "images/lolly2.jpg", "images/lolly3.jpg"] // Ganti dengan foto mini album Lolly
    },
    7: {
        name: "Cherry",
        trait: "Si Cantik Oren",
        age: "4 Tahun",
        food: "Ikan Teri",
        desc: "Dengan bulu orennya yang bersih dan bersinar, Cherry tahu persis bahwa dia sangat cantik. Dia sangat menjaga penampilannya dan tidak segan untuk memamerkan pesonanya saat ada tamu datang.",
        img: "images/cherry.jpg",
        category: "aktif",
        gallery: ["images/cherry1.jpg", "images/cherry2.jpg", "images/cherry3.jpg"] // Ganti dengan foto mini album Cherry
    },
    8: {
        name: "Panda",
        trait: "Ratu Caper",
        age: "5 Tahun",
        food: "Makanan Kering",
        desc: "Kapan pun ada kesempatan, Panda akan melakukan segala cara untuk mendapatkan perhatian Anda. Mulai dari mengeong keras tanpa alasan hingga sengaja menjatuhkan barang kesayangan Anda dari meja.",
        img: "images/panda.jpg",
        category: "aktif",
        gallery: ["images/panda1.jpg", "images/panda2.jpg", "images/panda3.jpg"] // Ganti dengan foto mini album Panda
    },
    9: {
        name: "Oliver",
        trait: "Aktif & Ceria",
        age: "2 Tahun",
        food: "Semuanya",
        desc: "Sebagai kucing termuda, energi Oliver seperti baterai yang tidak pernah habis. Dia selalu lari ke sana kemari dan mengajak kucing yang lebih tua untuk bermain, meskipun ajakannya lebih sering diabaikan.",
        img: "images/oliver.jpg",
        category: "aktif",
        gallery: ["images/oliver1.jpg", "images/oliver2.jpg", "images/oliver3.jpg"] // Ganti dengan foto mini album Oliver
    }
};

// Daily Moments Data (Placeholder)
const dailyMoments = [
    "images/haru4.jpg", "images/hiro4.jpg", "images/jojo4.jpg",
    "images/hani4.jpg", "images/blacky4.jpg", "images/oliver4.jpg"
];

document.addEventListener('DOMContentLoaded', () => {
    // === Dark Mode Toggle Logic ===
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        rootElement.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        rootElement.classList.toggle('dark-mode');

        if (rootElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // === Scroll Animations (Intersection Observer) ===
    const fadeElements = document.querySelectorAll('.fade-up');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    fadeElements.forEach(el => observer.observe(el));

    // === 3D Tilt Effect on Cat Cards ===
    const catCards = document.querySelectorAll('.cat-card');

    catCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Get mouse position relative to the center of the card (-1 to 1)
            const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

            // Limit the tilt angle (max 10 degrees)
            const tiltX = y * -10; // Invert Y for intuitive tilt
            const tiltY = x * 10;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        // Reset transform when mouse leaves
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // === Modal Logic ===
    const modal = document.getElementById('cat-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    // DOM Elements inside modal
    const mImage = document.getElementById('modal-image');
    const mName = document.getElementById('modal-name');
    const mTrait = document.getElementById('modal-trait');
    const mAge = document.getElementById('modal-age');
    const mFood = document.getElementById('modal-food');
    const mDesc = document.getElementById('modal-description');

    function openModal(id) {
        const data = catData[id];
        if (!data) return;

        // Populate Data
        mImage.src = data.img;
        mImage.alt = data.name;
        mName.textContent = data.name;
        mTrait.textContent = data.trait;
        mAge.textContent = data.age;
        mFood.textContent = data.food;
        mDesc.textContent = data.desc;

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on body
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling

        // Clear image src after animation finishes
        setTimeout(() => {
            if (!modal.classList.contains('active')) {
                mImage.src = '';
            }
        }, 500);
    }

    // === Preloader Logic ===
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800); // Artificial delay to show cute animation
    });

    // === Inject Pet Buttons ===
    catCards.forEach(card => {
        const id = card.getAttribute('data-id');
        const infoDiv = card.querySelector('.card-info');

        // Add data-category for filtering
        card.setAttribute('data-category', catData[id].category);

        const btnContainer = document.createElement('div');
        btnContainer.className = 'pet-btn-container';
        btnContainer.innerHTML = `
            <button class="pet-btn" aria-label="Pet ${catData[id].name}">
                <i class="fa-solid fa-hand-sparkles"></i> 
                <span class="pet-count">0</span>
            </button>
        `;
        infoDiv.appendChild(btnContainer);

        // Pet Button Logic
        const petBtn = btnContainer.querySelector('.pet-btn');
        const petCount = btnContainer.querySelector('.pet-count');
        let count = 0;

        petBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening modal
            count++;
            petCount.textContent = count;

            // Heart Animation
            const heart = document.createElement('i');
            heart.className = 'fa-solid fa-heart heart-anim';
            heart.style.left = `${e.offsetX}px`;
            heart.style.top = `${e.offsetY}px`;
            petBtn.appendChild(heart);

            setTimeout(() => heart.remove(), 1000);
        });
    });

    // === Filter Logic ===
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            catCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                    // Reset animation
                    card.classList.remove('visible');
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // === Masonry Gallery Injection ===
    const masonryGallery = document.getElementById('masonry-gallery');
    if (masonryGallery) {
        dailyMoments.forEach(src => {
            const item = document.createElement('div');
            item.className = 'masonry-item fade-up';
            item.innerHTML = `<img src="${src}" alt="Daily Moment" loading="lazy">`;
            masonryGallery.appendChild(item);
            observer.observe(item);
        });
    }

    // Event Listeners for Cards (clicking to open modal)
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            openModal(id);
        });
    });

    const mGallery = document.getElementById('mini-gallery');

    function openModal(id) {
        const data = catData[id];
        if (!data) return;

        // Populate Data
        mImage.src = data.img;
        mImage.alt = data.name;
        mName.textContent = data.name;
        mTrait.textContent = data.trait;
        mAge.textContent = data.age;
        mFood.textContent = data.food;
        mDesc.textContent = data.desc;

        // Populate Mini Gallery (Using images from data.gallery array)
        mGallery.innerHTML = '';
        if (data.gallery && data.gallery.length > 0) {
            data.gallery.forEach((imgSrc, index) => {
                const item = document.createElement('div');
                item.className = 'mini-gallery-item';
                item.innerHTML = `<img src="${imgSrc}" alt="${data.name} photo ${index + 1}" loading="lazy">`;
                mGallery.appendChild(item);
            });
        }

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on body
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
