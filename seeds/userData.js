const { User } = require("../models");

const userData = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "$2b$10$IC6ysh5cXcQhhcuTg6B97eBRyLEGwJ47HKtbPoIRoHYTKkOSA96VC",
  },
];

const seedUserData = () => User.bulkCreate(userData);
module.exports = seedUserData;
