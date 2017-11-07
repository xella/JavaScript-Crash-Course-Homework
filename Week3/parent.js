const Person = require('./person')
const toTitleCase = require('to-title-case')

module.exports = class Parent extends Person {
  constructor (name, age, children) {
    super(name, age)
    this.children = []
  }

  addChild (child) {
    this.children.push(child)
  }

  getChildMarks (child) {
    return toTitleCase(`name: ${child.name};\nmarks: ${child.marks}`)
  }
}
