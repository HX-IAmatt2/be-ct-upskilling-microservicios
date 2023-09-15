const Planet = require('../data')
const response = require('../utils/response')

module.exports = async (req, res) => {
  const planets = await Planet.list()
  response(res, 200, planets)
}
