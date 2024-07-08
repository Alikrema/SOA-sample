const User = require("../models/User");

const users = [];

for (let i = 0; i < 3; i++) {
  const user = new User(i, `ali${i}`);
  users.push(user);
}

module.exports = users;
