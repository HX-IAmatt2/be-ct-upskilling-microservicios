module.exports = (res, statusCode, data) => {
  res
    .status(statusCode)
    .json({
      error: false,
      count: data.length,
      data
    })
}
