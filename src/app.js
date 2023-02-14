const express = require("express");
const usersRourter = require("./users/users.router");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "server ok",
    });
});

app.use("/", usersRourter);

app.listen(9000, () => {
    console.log("Server started at: http://localhost:9000");
});
module.exports = app;
