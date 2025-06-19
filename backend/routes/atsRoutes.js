const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { atsUploadHandler } = require('../controllers/atsController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });
router.post('/upload', upload.single('resume'), atsUploadHandler);

module.exports = router;
