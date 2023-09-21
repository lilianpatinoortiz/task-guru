const { User }  = require('../models');

const userData = 
[
    {
        "name": "Bob",
        "email": "bob1995@hotmail.com",
        "password": "password1234"
    
    }
];

const seedUserData = () => User.bulkCreate(userData);
module.exports = seedUserData;