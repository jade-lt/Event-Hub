const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
const HireItemModel = require("../models/HireItemModel");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the user router"));

router.get("/new-session", (req, res) => {
    req.session.testProperty = "the session is running";
    res.send("session started OK");
});

router.get("/test-session", (req, res) => {
    res.send(req.session.testProperty);
});

router.get("/expire-session", (req, res) => {
    req.session.destroy(() => res.send("the session has expired"));
});

router.get("/all-users", (req, res) => {
    UserModel.find()
    .populate("categoryId")
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      res.status(500).send("unable to query hire items");
    });
  });

router.post("/register", async (req, res) => {
    const body = req.body;
    const passwordHash = bcrypt.hashSync(body.password, 10);
    const user = { username: body.username, password: passwordHash };
    UserModel.create(user).then((userData) => {
        res.send(userData);
    });
});

router.post("/login", (req, res) => {
    UserModel.findOne({ username: req.body.username }).then((userData) => {
        if(userData) {
            const checkHashPassword = bcrypt.compareSync(
                req.body.password,
                userData.password
            );
            if(checkHashPassword) {
                req.session.user = {
                    id: userData._id,
                };
                res.send("successfully logged in");
                // res.redirect("/register")
            } else {
                console.log("not working ??")
                res.status(401).send("username or password is incorrect");
            }
        } else {
            console.log("no user blah blah blah ???")
            res.status(401).send("username or password is incorrect");
        }
    });
});



router.get("/logout", (req, res) => {
    req.session.loggedIn = false;
    res.send("successfully logged out");
});


module.exports = router;