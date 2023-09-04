// Dependencies 
const path = require('path');
const fs = require('fs')
const express = require('express')
const router = express.Router();

// NPM package which allows for unique id's
var uniqid = require('uniqid');

router.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname, '../db/db.json'));
});
 
router.post('/notes',(req, res) => {
      let db = fs.readFileSync('db/db.json');
      db = JSON.parse(db);
      // Body for the note
      let userNote = {
        title: req.body.title,
        text: req.body.text,
        // Create a unique id for each note
        id: uniqid(),
      };
      // Pushes note to db.json
      db.push(userNote);
      fs.writeFileSync('db/db.json', JSON.stringify(db));
      res.json(db);
    })
router.delete('/notes/:id', (req, res) => {
      // Reads note from db.json
      let db = JSON.parse(fs.readFileSync('db/db.json'))
      // Removes note with matching id
      let deleteNotes = db.filter(item => item.id !== req.params.id);
      // Rewriting note to db.json
      fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
      res.json(deleteNotes);
    });

module.exports = router;
