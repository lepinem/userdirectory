// userdirectory/dal.js

const robotsData = require('./data')
const robots = robotsData.users

function getRobots() {
  return robots
}

function getRobot (robotId) {
  var selectRobot = {}
  for (var i=0; i<robots.length; i++) {
    if (robots[i].id == robotId) {
      selectRobot = robots[i]
    }
  }
  return selectRobot
}

function addRobot (newRobot) {
  robots.push(newRobot)
  return robots
}


module.exports = {
  getRobots: getRobots,
  getRobot: getRobot,
  addRobot: addRobot
}
