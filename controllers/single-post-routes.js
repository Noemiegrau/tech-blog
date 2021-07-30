const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// router.get('/:id', (req, res) => {
//     res.render('single-post')
// });

// get one post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'post_text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
      .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }

        // serialize the data
        const posts = dbPostData.get({ plain: true });
  
        res.render('single-post', { 
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