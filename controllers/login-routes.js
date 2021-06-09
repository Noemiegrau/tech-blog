const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get login page
router.get('/', (req, res) => {
  res.render('login')
});

module.exports = router;