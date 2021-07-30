const { Post } = require('../models');

const postdata = [
  {
    title: 'Object-Relational Mapping',
    post_text: 'Object–relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages.',
    user_id: 5
  },
  {
    title: 'Progressive Web Application 101',
    post_text: 'A progressive web application (PWA) is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript.',
    user_id: 6
  },
  {
    title: 'HTML and CSS: The basics',
    post_text: 'HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages.',
    user_id: 7
  },
  {
    title: 'Javascript: Understanding Event Loops',
    post_text: 'The event loop is a constantly running process that monitors both the callback queue and the call stack. In this example, the timeout is 0 second so the message execute immediately.',
    user_id: 8
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;