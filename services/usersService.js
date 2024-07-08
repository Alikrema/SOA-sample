const usersRepo = require("../repos/userRepo");

const getAllUsers = () => {
  return usersRepo.getAllUsers();
};

module.exports = {
  getAllUsers,
};
