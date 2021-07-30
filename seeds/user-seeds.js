// const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Diane',
    password: 'deaccublistinnitned'
  },
  {
    username: 'Chris',
    password: 'vaibrandobaxotonths'
  },
  {
    username: 'Hazel',
    password: 'koasteseppethiveliulti'
  },
  {
    username: 'James',
    password: 'swutorshifitassastezra'
  },
  {
    username: 'Simmon',
    password: 'reabilismignideop'
  },
  {
    username: 'Bradley',
    password: 'pasgde124r3'
  },
  {
    username: 'Stan',
    password: 'newhhg56T'
  },
  {
    username: 'Alex',
    password: 'ress995J'
  },
  {
    username: 'Tom',
    password: '67^yh&gV88'
  },
  {
    username: 'Chad',
    password: 'kaqGThnbw76T'
  }
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;