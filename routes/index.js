const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', (req, res) => 
  res.render('dashboard', { user: req.user })
);

module.exports = router;
