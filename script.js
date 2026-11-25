
/* proje filtreleme sistemi */

// kategori secme alanini bulur
const categorySelect = document.getElementById("project-category");

// butun proje kartlarini bulur
const projectCards = document.querySelectorAll(".project-grid article");

// kategori degistiginde calisir
categorySelect.addEventListener("change", function () {

    // secilen kategoriyi alir
    const selectedCategory = categorySelect.value;

    // her proje kartini kontrol eder
    projectCards.forEach(function (card) {

        // tum projeler seciliyse veya kategori eslesiyorsa
        if (selectedCategory === "all" ||
            card.dataset.category === selectedCategory) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
