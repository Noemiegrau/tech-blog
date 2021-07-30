const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get all posts for homepage
// router.get('/', (req, res) => {
//     res.render('welcome-page')
// });

// get all posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_text',
      'user_id',
      'created_at'
    ],
    order: [
      ['created_at', 'DESC']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    }

    ]
  })

  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('welcome-page', { 
      posts,
      loggedIn: req.session.loggedIn
    });

  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

  module.exports = router;