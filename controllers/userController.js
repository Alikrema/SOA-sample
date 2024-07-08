const userService = require("../services/usersService");

const getAllUsers = (req, res) => {
  //HANDLE CONTROLLER STUFF, REQ - RES
  const users = userService.getAllUsers();
  res.send(users);
};

module.exports = {
  getAllUsers,
};
