const multer = require("multer");
const express = require("express");
const router = require("express").Router();

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage: myStorage });

router.post("/uploadFile", uploader.single("file"), (req, res) => {
  res.status(200).json({ message: "file upload success" });
});

module.exports = router;
