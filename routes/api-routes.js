//importing dependencies
const fs = require('fs');

//GET route for retrieving notes
app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    res.json(notes);
});

//POST route for adding new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    newNote.id = notes.uuid();
    notes.push(newNote);

    fs.writeFileSync('db.json', JSON.stringify(notes));
}); 

