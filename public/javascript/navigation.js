document.addEventListener("DOMContentLoaded", function () {
    console.log("Navigation script loaded");

    // Define button elements
    const mainMenuBtn = document.getElementById('btn-main-menu');
    const page1Btn = document.getElementById('btn-1');
    const page2Btn = document.getElementById('btn-2');
    const characterSheetBtn = document.getElementById('btn-character-sheet');

    // Ensure elements exist before adding event listeners
    if (mainMenuBtn) {
        mainMenuBtn.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }

    if (page1Btn) {
        page1Btn.addEventListener('click', function () {
            window.location.href = 'page2.html';
        });
    }

    if (page2Btn) {
        page2Btn.addEventListener('click', function () {
            window.location.href = 'page3.html';
        });
    }

    if (characterSheetBtn) {
        characterSheetBtn.addEventListener('click', function () {
            window.location.href = 'final.html';
        });
    }

    console.log("Navigation event listeners attached.");
});
