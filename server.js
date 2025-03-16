import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Get the current file path and dirname (equivalent of __dirname in ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const homeDirectory = process.env.HOME || process.env.USERPROFILE;
const folderPath = path.join(homeDirectory, "Documents", "Polaris_Characters");

// CORS Setup
const corsOptions = {
    origin: "*",
    methods: "GET,POST,DELETE",
    allowedHeaders: "Content-Type"
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the html, css, and javascript folders
app.use("", express.static(path.join(__dirname, "./public")));

// Serve the main HTML page
//app.get("/", (req, res) => {
 //   res.sendFile(path.join(__dirname, "public", "html", "index.html"));
//});

// Avoid 404 error for favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Create folder if it doesn't exist
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

// List all JSON files
app.get("/list-files", (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) return res.status(500).json({ error: "Error reading files" });
        res.json(files.filter(file => file.endsWith(".json")));
    });
});

// Load a JSON file
app.get("/load-file/:filename", (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return res.status(500).json({ error: "Error reading file" });
        res.json(JSON.parse(data));
    });
});

// Delete a JSON file
app.delete("/delete-file/:filename", (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    fs.unlink(filePath, err => {
        if (err) return res.status(500).json({ error: "Error deleting file" });
        res.json({ message: "File deleted" });
    });
});

// Copy a JSON file
app.post("/copy-file/:filename", (req, res) => {
    const originalFile = path.join(folderPath, req.params.filename);
    if (!fs.existsSync(originalFile)) return res.status(404).json({ error: "File not found" });

    const baseName = req.params.filename.replace(/\.json$/, ""); 
    let copyNumber = 1;
    let newFileName;

    //for {
   //     newFileName = `${baseName}_copy${copyNumber}.json`;
 //       console.log(`Checking if ${newFileName} exists...`);
  //      copyNumber++;
   // } while (fs.existsSync(path.join(folderPath, newFileName))); 

    console.log(`Creating new file: ${newFileName}`);

    fs.copyFile(originalFile, path.join(folderPath, newFileName), err => {
        if (err) {
            console.error("❌ Error copying file:", err);
            return res.status(500).json({ error: "Error copying file" });
        }
        console.log(`✅ File copied to ${newFileName}`);
        res.json({ message: "File copied", newFileName });
    });
});

// Start the server
app.listen(PORT, async () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);

    try {
        // Dynamically import 'open' since it's an ES module
        const open = (await import("open")).default;
        
        // Automatically open the browser to index.html
        await open(`http://localhost:${PORT}`);
    } catch (error) {
        console.error("❌ Failed to open browser:", error);
    }
});
