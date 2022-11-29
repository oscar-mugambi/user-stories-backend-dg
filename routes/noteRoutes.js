const express = require('express')
const { getAllNotes } = require('../controllers/notesController')
const router = express.Router()

router.route('/').get(getAllNotes).post().patch().delete()

module.exports = router
