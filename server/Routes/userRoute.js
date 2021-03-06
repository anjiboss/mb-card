const router = require("express").Router();
// const User = require("../models/User.js");
const User = require("../models/User.js");

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  User.findOne(
    {
      userId: userId,
    },
    (error, user) => {
      if (error) return console.error(error);
      res.json(user);
    }
  );
});

router.post("/", async (req, res) => {
  const { userId, password, info, contact, setting, quotes } = req.body;
  // console.log({ userId, password, info, contact, setting, quotes });
  try {
    const user = new User({
      userId,
      password,
      info,
      contact,
      setting,
      quotes,
    });
    await user.save();

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
