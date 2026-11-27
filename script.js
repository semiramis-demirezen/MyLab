
// mylab javascript islemleri

// ======================================
// proje filtreleme sistemi
// ======================================

// kategori secme alanini bulur
const categorySelect = document.getElementById("project-category");

// butun proje kartlarini bulur
const projectCards = document.querySelectorAll(".project-grid article");

// kullanici kategori degistirdiginde calisir
categorySelect.addEventListener("change", function () {

    // secilen kategoriyi alir
    const selectedCategory = categorySelect.value;

    // proje kartlarini tek tek kontrol eder
    projectCards.forEach(function (card) {

        // tum projeler secildiyse veya kategori ayniysa
        if (
            selectedCategory === "all" ||
            card.dataset.category === selectedCategory
        ) {

            // karti gorunur yapar
            card.style.display = "";

        } else {

            // karti gizler
            card.style.display = "none";

        }

    });

});


// ======================================
// mylab assistant soru cevap sistemi
// ======================================

// soru butonlarini bulur
const questionButtons = document.querySelectorAll(".faq-question");

// cevap kutusunu bulur
const answerBox = document.getElementById("assistant-answer");

// sorularin hazir cevaplarini tutar
const assistantAnswers = {

    education:
        "Sakarya Üniversitesi'nde Bilişim Sistemleri Mühendisliği okuyorum ve Bilgisayar Mühendisliği bölümünde çift ana dal yapıyorum.",

    projects:
        "MyLab portföy sitesi, Edge AI İHA optimizasyonu ve görüntü tabanlı canlı tespit çalışmaları üzerinde çalışıyorum.",

    interests:
        "Edge AI, bilgisayarlı görü, makine öğrenmesi, gömülü sistemler ve robotik alanlarıyla ilgileniyorum.",

    goals:
        "Edge AI alanında uzmanlaşmak, otonom sistemler geliştirmek ve uluslararası projelerde çalışmak istiyorum."

};

// butun soru butonlarina tiklama ozelligi ekler
questionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // tiklanan butonun soru anahtarini alir
        const selectedQuestion = button.dataset.question;

        // ilgili hazir cevabi bulur
        const selectedAnswer = assistantAnswers[selectedQuestion];

        // cevabi asistan kutusunda gosterir
        answerBox.textContent = selectedAnswer;

    });

});
