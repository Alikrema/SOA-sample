const users = require("../db/database");

const getAllUsers = () => {
  return users;
};

module.exports = {
  getAllUsers,
};
