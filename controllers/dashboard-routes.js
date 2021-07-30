const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get dashboard info
// router.get('/', (req, res) => {
//     res.render('dashboard')
// });

// get all posts
router.get('/', (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
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

      res.render('dashboard', { 
        posts,
        loggedIn: true
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  








// Maybe future enhancement?
// router.get('/:email', (req, res) => {
//     Staff.findOne({
//       where: {
//           // use the ID from the session ??
//         //   email: req.body.email
//         // id: req.params.id
//           email: req.params.email
//         // id: req.session.staff_id
//       },
//       attributes: [
//         'id',
//         'first_name',
//         'last_name',
//         'staff_number',
//         'email'
//       ]
//     })

//       .then(dbStaffData => {
//         if (!dbStaffData) {
//             res.status(404).json({ message: 'No staff member found with this id/email' });
//             return;
//           }

//         // serialize the data
//         const staff = dbStaffData.get({ plain: true });

//         // pass data to template
//         res.render('dashboard', { 
//             staff
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       }); 

//   });


module.exports = router;