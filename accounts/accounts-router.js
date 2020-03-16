const express = require("express");

const db = require("../data/dbConfig.js"); 
const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('accounts')
    .then(rows => {
      res.status(200).json({ data: rows });
    })
    .catch(error => {
      res.status(500).json({ message: "sorry, ran into an error" });
    });
});


router.get('/:id', (req, res) => {
  db('accounts')
    .where({ id: req.params.id })
    .first()
    .then(account => {
      if (account) {
        res.status(200).json({ data: account });
      } else {
        res.status(400).json({ message: "account not found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "sorry, ran into an error" });
    });
});



module.exports = router;
