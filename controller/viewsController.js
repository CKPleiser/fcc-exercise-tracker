

exports.index = (req, res) => {
  res.status(200).render('index', {
    title: 'Exercise Tracker'
  })
}