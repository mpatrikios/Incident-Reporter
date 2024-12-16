import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint to list available templates
app.get('/templates', async (req, res) => {
  try {
    const templatesDir = path.join(__dirname, 'templates');
    const files = await fs.readdir(templatesDir);
    
    // Filter for .txt files and remove the .txt extension
    const templates = files
      .filter(file => path.extname(file) === '.txt')
      .map(file => path.basename(file, '.txt'));
    
    res.json(templates);
  } catch (err) {
    console.error('Error listing templates:', err);
    res.status(500).send('Could not list templates');
  }
});

// Existing template fetching route remains the same
app.get('/templates/:name', async (req, res) => {
  const templateName = req.params.name;
  
  try {
    const templatePath = path.join(__dirname, 'templates', `${templateName}.txt`);
    const data = await fs.readFile(templatePath, 'utf-8');
    res.send(data);
  } catch (err) {
    console.error('Error reading template:', err);
    res.status(404).send('Template not found');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});