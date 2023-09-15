const { Router } = require('express')
const controllers = require('../controllers')
const middlewares = require('../middewares')
const router = Router()

router.get('/', controllers.getCharacters)
router.post('/', middlewares.characterValidation, controllers.createCharacter)

module.exports = router
