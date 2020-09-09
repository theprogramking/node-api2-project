const express = require("express");
const router = express.Router();
const posts = require("../data/db.js");

router.get("/", (req, res) => {
  posts
    .find()
    .then((postsResponse) => {
      res.status(200).json(postsResponse);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not get all posts.",
      });
    });
});

router.post("/", (req, res) => {});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  posts
    .findById(id)
    .then((postByIdResponse) => {
      res.status(2000).json(postByIdResponse);
    })
    .catch((err) => {
      res.status(500).json({
        err: "Could not get posts. by ID.",
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json();
});

router.put("/:id", (req, res) => {});

router.get("/:id/comments", (req, res) => {});

router.post("/:id/comments", (req, res) => {});

module.exports = router;
