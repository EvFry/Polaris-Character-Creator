import { loadCharacterState } from './state.js';


const savedCharactersList = document.getElementById("savedCharacters");

function loadSavedCharacters() {
    console.log("Loading saved characters...");
    fetch("http://localhost:3000/list-files")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch files. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(files => {
            console.log("Files fetched:", files);
            savedCharactersList.innerHTML = "";  // Clear existing list
            
            if (files.length === 0) {
                console.log("No saved characters found.");
                return;  // Exit early if no files
            }
            
            // Populate the list of saved characters
            files.forEach(file => {
                let option = document.createElement("option");
                option.textContent = file;
                savedCharactersList.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error loading characters:", error);
            alert("Failed to load saved characters.");
        });
}
document.addEventListener("DOMContentLoaded", function () {
   
    
    // Call the loadSavedCharacters function (now globally defined)
    loadSavedCharacters();

document.getElementById("newCharacter").addEventListener("click", function () {
        console.log("New Character button clicked!");
        localStorage.setItem("isNewCharacter", "true");  // Set newCharacter to true

        fetch("http://localhost:3000/create-folder", { method: "POST" })
            .then(response => response.json())
            .then(data => {
                console.log("Folder creation response:", data.message);
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
            localStorage.setItem("isNewCharacter", "false");  // Standardizing key name
    
            fetch(`http://localhost:3000/load-file/${selectedCharacter}`)
            .then(response => response.json())
            .then(data => {
                console.log("Loaded Character:", data);
                localStorage.setItem("characterState", JSON.stringify(data)); // Store the raw JSON
                
                // Call loadCharacterState without .then()
                loadCharacterState(selectedCharacter);  
        
                const pageNumber = data.pageNumber || 1; // Default to page 1 if missing
                let pageUrl = "/index.html";  // Default page URL
                switch (pageNumber) {
                    case 1:
                        pageUrl = "/index.html";
                        break;
                    case 2:
                        pageUrl = "/page2.html";
                        break;
                    case 3:
                        pageUrl = "/page3.html";
                        break;
                    case 4:
                        pageUrl = "/page4.html";
                        break;
                    case 5:
                        pageUrl = "/page5.html";
                        break;
                    case 6:
                        pageUrl = "/page6.html";
                        break;
                    case 7:
                        pageUrl = "/final.html";
                        break;
                    default:
                        console.log("Unknown page number");
                        pageUrl = "/index.html";
                        break;
                }
                setTimeout(() => {
                    window.location.href = pageUrl;
                }, 500);
            })
            .catch(error => console.error("Error loading character:", error));
        
           
        }  
    });
    
    document.getElementById("loadSheet").addEventListener("click", function () {
        const selectedCharacter = savedCharactersList.value;
        if (selectedCharacter) {
            loadCharacterState(selectedCharacter);
            setTimeout(() => {
                window.location.href = "/final.html";
            }, 500);
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
})