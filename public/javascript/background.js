const accessKey = "DSuJWdKwiraIXeKbgzPvLwo4AuHvhW-LYdmBVfyZ2LM";  // Replace with your actual access key
const searchQuery = "undersea";  // Searching for water-related terms
const url = `https://api.unsplash.com/photos/random?query=${searchQuery}&client_id=${accessKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("API Response: ", JSON.stringify(data, null, 2));

        let images = [];

        // Check if data is an array (multiple results) or an object (single result)
        if (Array.isArray(data.results)) {
            images = data.results;  // Case: multiple images
        } else if (data && data.urls) {
            images = [data];  // Case: single image
        }

        if (images.length === 0) {
            console.error("No images found in the response.");
            return;
        }

        let image = null;

        images.forEach(item => {
            console.log("Checking item:", item);

            if (!item.urls || !item.urls.full) {
                console.warn("Item does not contain a valid image URL:", item);
                return;
            }

            const tags = Array.isArray(item.tags) ? item.tags.map(tag => tag.title.toLowerCase()) : [];
            if (tags.includes("ocean") || tags.includes("sea") || tags.includes("water")) {
                image = item.urls.full;
            }

            if (!image) {
                image = item.urls.full;  // Fallback to first available image
            }
        });

        if (image) {
            console.log("Image Found:", image);
        } else {
            console.error("No water-related image found.");
            image = "https://via.placeholder.com/1920x1080?text=No+Image+Found";  // Fallback image
        }

        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    })
    .catch(error => {
        console.error("Error fetching the image:", error);
    });

