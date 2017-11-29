const Person = require('./person-model')

module.exports = class Parent extends Person {
  constructor (id, name, age, children) {
    super(id, name, age)
    this.children = children
  }

  static create (parent) {
    return new Parent(parent.id, parent.name, parent.age, parent.children)
  }

  addChild (child) {
    this.children.push(child)
  }

  getChildMarks (child) {
    return (`name: ${child.name};\nmarks: ${child.marks}`)
  }
}
