const express = require("express");
const HireItemModel = require("../models/HireItemModel");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the hire items router"));

router.get("/test", (req, res) => res.send("test OK"));

router.get("/my-items", (req, res) => {
  HireItemModel.find()
  .populate("categoryId")
  .then((hireitems) => {
    res.send(hireitems);
  })
  .catch(() => {
    res.status(500).send("unable to query hire items");
  });
});

router.post("/new-hire-item", (req, res) => {
  const reqBody = req.body;
  HireItemModel.create(reqBody).then((data) => {
    res.send("item added successfully");
  });
});

router.put("/update-item/:id", (req, res) => {
  HireItemModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: true,
  })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(404).send("this item doesn't exist");
    });
});

router.delete("/delete-item/:id", (req, res) => {
    HireItemModel.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch(() => {
        res.status(404).send("this item doesn't exist");
    });
});

module.exports = router;