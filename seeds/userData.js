const { User }  = require('../models');

const userData = 
[
    {
        "name": "Bob",
        "email": "bob1995@hotmail.com",
        "password": "password1234"
    
    }
];

const seedUserData = () => Project.bulkCreate(userData);
module.exports = seedUserData;