
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


// ======================================
// mylab mini rehber sistemi
// ======================================

// rehberin html elemanlarini bulur
const guideMessage = document.getElementById("guide-message");
const guideBubble = document.getElementById("guide-bubble");
const guideToggle = document.getElementById("guide-toggle");

// sayfadaki bolumleri bulur
const guideSections = document.querySelectorAll("main section[id]");

// her bolum icin bir mesaj tanimlar
const guideMessages = {
    anasayfa:
        "Merhaba! MyLab'e hos geldin. Laboratuvarimi birlikte kesfedelim.",

    hakkimda:
        "Burada egitimimi ve ilgilendigim muhendislik alanlarini gorebilirsin.",

    projeler:
        "Projelerimi kesfet! Kategori filtresini kullanmayi unutma.",

    "neden-ben":
        "Bu bolumde nasil ogrendigimi ve projelerimi nasil gelistirdigimi anlatiyorum.",

    yetenekler:
        "Kullandigim ve ogrenmekte oldugum teknolojiler burada.",

    hedefler:
        "Gelecek icin planladigim muhendislik hedeflerine goz atabilirsin.",

    asistan:
        "MyLab Assistant ile hazir sorulara cevap bulabilirsin.",

    iletisim:
        "GitHub profilimden projelerimi daha ayrintili inceleyebilirsin."
};

// ekranda gorunen bolume gore mesaji degistirir
let currentGuideSection = "anasayfa";

function updateGuideMessage() {

    // ekranin ustten yuzde kirk noktasini alir
    const checkPosition = window.innerHeight * 0.4;

    // bolumleri sirayla kontrol eder
    guideSections.forEach(function (section) {

        const position = section.getBoundingClientRect();

        // kontrol noktasi bu bolumun icindeyse
        if (
            position.top <= checkPosition &&
            position.bottom >= checkPosition
        ) {
            currentGuideSection = section.id;
        }

    });

    // ilgili bolumun mesajini gosterir
    guideMessage.textContent =
        guideMessages[currentGuideSection] ||
        guideMessages.anasayfa;
}

// sayfa kaydirildiginda mesaji gunceller
window.addEventListener("scroll", updateGuideMessage);

// ekran boyutu degistiginde de kontrol eder
window.addEventListener("resize", updateGuideMessage);

// sayfa ilk acildiginda mesaji gosterir
updateGuideMessage();

// karaktere tiklandiginda balonu acar veya kapatir
guideToggle.addEventListener("click", function () {

    guideBubble.hidden = !guideBubble.hidden;

    // erisilebilirlik bilgisini gunceller
    guideToggle.setAttribute(
        "aria-expanded",
        String(!guideBubble.hidden)
    );

    if (guideBubble.hidden) {
        guideToggle.setAttribute(
            "aria-label",
            "Rehber mesajini goster"
        );
    } else {
        guideToggle.setAttribute(
            "aria-label",
            "Rehber mesajini gizle"
        );
    }

});

