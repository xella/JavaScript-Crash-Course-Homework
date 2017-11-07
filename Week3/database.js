const fs = require('fs')

exports.saveChildren = (children) => {
  fs.writeFileSync('./dataChildren.json', JSON.stringify(children))
  console.log(children)
}

exports.loadChildren = () => {
  return JSON.parse(fs.readFileSync('./dataChildren.json', 'utf8'))
}

exports.saveParents = (parents) => {
  fs.writeFileSync('./dataParents.json', JSON.stringify(parents))
  console.log(parents)
}

exports.loadParents = () => {
  return JSON.parse(fs.readFileSync('./dataParents.json', 'utf8'))
}

exports.saveTeachers = (teachers) => {
  fs.writeFileSync('./dataTeachers.json', JSON.stringify(teachers))
  console.log(teachers)
}

exports.loadTeachers = () => {
  return JSON.parse(fs.readFileSync('./dataTeachers.json', 'utf8'))
}
