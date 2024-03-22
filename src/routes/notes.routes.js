const { Router } = require('express')

const NotesController = require('../controllers/Notescontroller')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')


const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.get('/',ensureAuthenticated ,notesController.index)
notesRoutes.post('/',ensureAuthenticated,notesController.create)
notesRoutes.get('/:id',notesController.show)
notesRoutes.delete('/:id',notesController.delete)


module.exports = notesRoutes