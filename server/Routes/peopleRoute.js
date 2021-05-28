const router = require("express").Router();
const data = require("../tempData/data");

router.get("/:id", (req, res) => {
  console.log("in");
  const id = req.params.id;
  const person = data.filter((person) => person.id == id);
  console.log(person);
  res.send(JSON.stringify(person));
});

module.exports = router;
