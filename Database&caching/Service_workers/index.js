import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = 3030;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticPath = path.join(__dirname, "Global");

// Serve static files from the Global directory
app.use(express.static(staticPath));

app.get("/bro", (req, res) => {
    console.log("Hii")
    res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});