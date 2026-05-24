// Data Kucing
const catData = {
    1: {
        name: "Haru",
        trait: "Pembully Hiro",
        age: "6 Tahun",
        food: "Salmon",
        desc: "Haru adalah kucing yang sangat aktif dan suka bermain dengan bola bulu. Dia selalu memastikan tidak ada sudut rumah yang belum dijelajahi. Energi tanpa batasnya sering kali membawa keceriaan di rumah.",
        img: "images/haru.jpg"
    },
    2: {
        name: "Hiro",
        trait: "Korban Bullying",
        age: "6 Tahun",
        food: "Tuna",
        desc: "Hiro bisa tidur hingga 18 jam sehari. Tempat favoritnya adalah di atas sofa yang empuk atau di atas keyboard laptop saat sedang digunakan. Bangun hanya untuk makan dan meregangkan badan.",
        img: "images/hiro.jpg"
    },
    3: {
        name: "Jojo",
        trait: "Jagoan Rumah",
        age: "5 Tahun",
        food: "Ayam Rebus",
        desc: "Jojo selalu penasaran dengan apa pun yang bergerak. Dia suka memperhatikan burung dari balik jendela berjam-jam lamanya dan menganggap dirinya adalah pemburu yang hebat.",
        img: "images/jojo.jpg"
    },
    4: {
        name: "Hani",
        trait: "Paling Gembrot",
        age: "5 Tahun",
        food: "Wet Food",
        desc: "Hani memiliki suara dengkuran (purring) yang paling keras. Dia sangat penyayang dan selalu minta dielus setiap pagi. Dia akan menggosokkan kepalanya ke kaki Anda sebagai tanda cinta.",
        img: "images/hani.jpg"
    },
    5: {
        name: "Blacky",
        trait: "Penguasa Rumah",
        age: "4 Tahun",
        food: "Daging Sapi",
        desc: "Sesuai namanya, Blacky adalah kucing hitam legam yang anggun. Dia suka bersembunyi di tempat-tempat yang tak terduga, tapi selalu muncul secepat kilat ketika mendengar suara mangkuk makanannya.",
        img: "images/blacky.jpg"
    },
    6: {
        name: "Lolly",
        trait: "Introvert",
        age: "4 Tahun",
        food: "Snack Kucing",
        desc: "Lolly adalah anggota termuda yang penuh energi. Hobi utamanya adalah berlari ke sana kemari secara acak di tengah malam (zoomies) dan mencoba memanjat gorden ruang tamu.",
        img: "images/lolly.jpg"
    },
    7: {
        name: "Cherry",
        trait: "Si Cantik Oren",
        age: "4 Tahun",
        food: "Ikan Teri",
        desc: "Cherry sangat menyukai perhatian. Jika dia merasa diabaikan, dia tidak segan-segan untuk duduk tepat di depan wajah Anda atau menjatuhkan pulpen Anda dari meja sampai dia dielus.",
        img: "images/cherry.jpg"
    },
    8: {
        name: "Panda",
        trait: "Ratu Caper",
        age: "5 Tahun",
        food: "Makanan Kering",
        desc: "Corak bulunya yang hitam putih membuatnya dipanggil Panda. Dia memiliki tubuh yang agak gempal dan sering salah memperkirakan jarak lompatannya, yang membuatnya terlihat sangat lucu.",
        img: "images/panda.jpg"
    },
    9: {
        name: "Oliver",
        trait: "Aktif & Ceria",
        age: "2 Tahun",
        food: "Semuanya",
        desc: "Kucing tertua dan paling bijaksana di rumah. Oliver sangat sabar menghadapi tingkah laku kucing-kucing lain yang lebih muda. Dia sering bertindak sebagai penengah dan suka mengawasi kawanan dari tempat yang tinggi.",
        img: "images/oliver.jpg"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // === Scroll Animations (Intersection Observer) ===
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // === Modal Logic ===
    const catCards = document.querySelectorAll('.cat-card');
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

        // Clear image src after animation finishes to prevent flash of old image on next open
        setTimeout(() => {
            if (!modal.classList.contains('active')) {
                mImage.src = '';
            }
        }, 400);
    }

    // Event Listeners for Cards
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            openModal(id);
        });
    });

    // Event Listeners for Closing Modal
    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
