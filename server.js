const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const homeDirectory = process.env.HOME || process.env.USERPROFILE; // HOME on Linux, USERPROFILE on Windows
const folderPath = path.join(homeDirectory, "Documents", "Polaris_Characters"); // Create path dynamically



const corsOptions = {
    origin: "*",
    methods: "GET,POST,DELETE",
    allowedHeaders: "Content-Type"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Responds with an empty response, avoiding the 404 for favicon.
});


// ✅ Ensure folder exists when "New Character" is clicked
app.post("/create-folder", (req, res) => {
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`✅ Folder created: ${folderPath}`);
            return res.json({ message: "Folder created" });
        }
        res.json({ message: "Folder already exists" });
    } catch (error) {
        console.error("❌ Error creating folder:", error);
        res.status(500).json({ error: "Failed to create folder" });
    }
});

// ✅ Root route for testing
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the JSON File API</h1><p>Use /list-files to see available JSON files.</p>");
});

// ✅ Get list of JSON files
app.get("/list-files", (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) return res.status(500).json({ error: "Error reading files" });
        res.json(files.filter(file => file.endsWith(".json")));
    });
});

// ✅ Load JSON file
app.get("/load-file/:filename", (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return res.status(500).json({ error: "Error reading file" });
        res.json(JSON.parse(data));
    });
});

// ✅ Delete JSON file
app.delete("/delete-file/:filename", (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    fs.unlink(filePath, err => {
        if (err) return res.status(500).json({ error: "Error deleting file" });
        res.json({ message: "File deleted" });
    });
});

// ✅ Copy JSON file
// ✅ Copy JSON file with incrementing copy number
app.post("/copy-file/:filename", (req, res) => {
    const originalFile = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(originalFile)) return res.status(404).json({ error: "File not found" });

    const baseName = req.params.filename.replace(/\.json$/, ""); // Remove ".json" to create base name
    let copyNumber = 1;
    let newFileName;

    // Find the next available copy number
    do {
        newFileName = `${baseName}_copy${copyNumber}.json`;
        console.log(`Checking if ${newFileName} exists...`);
        copyNumber++;
    } while (fs.existsSync(path.join(folderPath, newFileName))); // Check if the copy already exists

    console.log(`Creating new file: ${newFileName}`);
    
    // Copy the original file to the new file
    fs.copyFile(originalFile, path.join(folderPath, newFileName), err => {
        if (err) {
            console.error("❌ Error copying file:", err);
            return res.status(500).json({ error: "Error copying file" });
        }
        console.log(`✅ File copied to ${newFileName}`);
        res.json({ message: "File copied", newFileName });
    });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
