const Character = require('../data')
const response = require('../utils/response')

module.exports = async (req, res) => {
  const characters = await Character.list()
  response(res, 200, characters)
}
