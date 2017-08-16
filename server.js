//server.js
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const robotDal = require('./dal')
const robotsData = require('./data')
const robot = robotsData.users

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')

app.use(express.static('public'))

// console.log(robot[1]);

app.get('/robots/', function (request, response) {
  const robots = robotDal.getRobots()
  response.render('list', {robots: robots})
})

app.get('/robots/:id', function (request, response) {
  const selectRobot = robotDal.getRobot(request.params.id)
  if (selectRobot.id) {
    response.render('_robotCard', selectRobot)
  } else {
    response.send('NO Robots!!!')
  }
})
app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
});
