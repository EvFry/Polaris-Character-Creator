const accessKey = "";  // Replace with your actual access key
const searchQuery = "sea";  // Searching for water-related terms
const url = `https://api.unsplash.com/photos/random?query=${searchQuery}&client_id=${accessKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("API Response: ", data);  // Log the response to inspect

        if (data && Array.isArray(data) && data.length > 0) {
            let image = null;

            data.forEach(item => {
                console.log("Checking item:", item);  // Log each item

                // Check if any of the tags include "sea", "ocean", or "water"
                const tags = item.tags ? item.tags.map(tag => tag.title.toLowerCase()) : [];
                if (tags.includes("ocean") || tags.includes("sea") || tags.includes("water")) {
                    image = item.urls.full;  // Select the image URL if it contains any water-related term
                }

                // If no match, fallback to the first available image URL
                if (!image && item.urls && item.urls.full) {
                    image = item.urls.full;
                }
            });

            if (image) {
                console.log("Image Found:", image);
                document.body.style.backgroundImage = `url(${image})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
            } else {
                console.error("No water-related image found in the response.");
            }
        } else {
            console.error("No images found in the response.");
        }
    })
    .catch(error => {
        console.error("Error fetching the image:", error);
    });
