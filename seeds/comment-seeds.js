const { Comment } = require('../models');

const commentdata = [
    {
      comment_text: 'Very interesting!',
      user_id: 1,
      post_id: 1
    },
    {
      comment_text: 'Good article.',
      user_id: 2,
      post_id: 1
    },
    {
      comment_text: 'Wow.',
      user_id: 3,
      post_id: 1
    },
    {
      comment_text: 'Ok.',
      user_id: 4,
      post_id: 1
    },
    {
        comment_text: 'Trendy technologies right now.',
        user_id: 1,
        post_id: 2
      },
      {
        comment_text: 'Bravo!!',
        user_id: 2,
        post_id: 2
      },
      {
        comment_text: 'I loved learning about this when I was a student.',
        user_id: 3,
        post_id: 2
      },
      {
        comment_text: 'Interesting topic',
        user_id: 4,
        post_id: 2
      }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;