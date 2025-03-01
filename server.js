const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;
const folderPath = path.join(__dirname, "Documents/placeholder");

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve HTML, CSS, JS files

// ✅ Add a default route for the root URL "/"
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the JSON File API</h1><p>Use /list-files to see available JSON files.</p>");
});

// Get list of JSON files
app.get("/list-files", (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) return res.status(500).json({ error: "Error reading files" });
        res.json(files.filter(file => file.endsWith(".json")));
    });
});

// Load JSON file
app.get("/load-file/:filename", (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return res.status(500).json({ error: "Error reading file" });
        res.json(JSON.parse(data));
    });
});

// Delete JSON file
app.delete("/delete-file/:filename", (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    fs.unlink(filePath, err => {
        if (err) return res.status(500).json({ error: "Error deleting file" });
        res.json({ message: "File deleted" });
    });
});

// Copy JSON file
app.post("/copy-file/:filename", (req, res) => {
    const originalFile = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(originalFile)) return res.status(404).json({ error: "File not found" });

    const baseName = req.params.filename.replace(/\.json$/, "");
    let copyNumber = 1;
    let newFileName;
    do {
        newFileName = `${baseName}_copy${copyNumber}.json`;
        copyNumber++;
    } while (fs.existsSync(path.join(folderPath, newFileName)));

    fs.copyFile(originalFile, path.join(folderPath, newFileName), err => {
        if (err) return res.status(500).json({ error: "Error copying file" });
        res.json({ message: "File copied", newFileName });
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
