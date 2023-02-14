const usersservices = require("./users.services");
const router = require("express").Router();
router.get("/users", usersservices.getAllUsers);
router.get("/users/:id", usersservices.getUserById);
router.post("/users", usersservices.postNewUser);

module.exports = router;
