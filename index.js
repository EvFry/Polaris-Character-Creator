document.addEventListener("DOMContentLoaded", function () {
    const savedCharactersList = document.getElementById("savedCharacters");
    
    function loadSavedCharacters() {
        fetch("http://localhost:3000/list-files")
            .then(response => response.json())
            .then(files => {
                savedCharactersList.innerHTML = "";
                files.forEach(file => {
                    let option = document.createElement("option");
                    option.textContent = file;
                    savedCharactersList.appendChild(option);
                });
            })
            .catch(error => console.error("Error loading characters:", error));
    }

    document.getElementById("newCharacter").addEventListener("click", function () {
        window.location.href = "page2.html";
    });

    document.getElementById("loadCreator").addEventListener("click", function () {
        const selectedCharacter = savedCharactersList.value;
        if (selectedCharacter) {
            fetch(`http://localhost:3000/load-file/${selectedCharacter}`)
                .then(response => response.json())
                .then(data => console.log("Loaded Character:", data))
                .catch(error => console.error("Error loading character:", error));
        }
    });

    document.getElementById("delete").addEventListener("click", function () {
        const selectedCharacter = savedCharactersList.value;
        if (selectedCharacter && confirm(`Are you sure you want to delete ${selectedCharacter}?`)) {
            fetch(`http://localhost:3000/delete-file/${selectedCharacter}`, { method: "DELETE" })
                .then(() => loadSavedCharacters())
                .catch(error => console.error("Error deleting character:", error));
        }
    });

    document.getElementById("copy").addEventListener("click", function () {
        const selectedCharacter = savedCharactersList.value;
        if (selectedCharacter) {
            fetch(`http://localhost:3000/copy-file/${selectedCharacter}`, { method: "POST" })
                .then(() => loadSavedCharacters())
                .catch(error => console.error("Error copying character:", error));
        }
    });

    loadSavedCharacters();
});
