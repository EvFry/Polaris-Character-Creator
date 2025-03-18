document.addEventListener("DOMContentLoaded", function () {
    const savedCharactersList = document.getElementById("savedCharacters");

    function loadSavedCharacters() {
        console.log("Loading saved characters...");
        fetch("http://localhost:3000/list-files")
            .then(response => response.json())
            .then(files => {
                console.log("Files fetched:", files);
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
        console.log("New Character button clicked!");

        fetch("http://localhost:3000/create-folder", { method: "POST" })
            .then(response => response.json())
            .then(data => {
                console.log("Folder creation response:", data.message);

                // ✅ Always navigate to page2.html, even if folder already exists
                setTimeout(() => {
                    window.location.href = "/page2.html";
                }, 500);
            })
            .catch(error => {
                console.error("Error creating folder:", error);
                alert("An error occurred while creating the folder.");
            });
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
