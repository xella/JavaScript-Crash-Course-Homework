const Person = require('./person-model')

module.exports = class Child extends Person {
  constructor (id, name, age, marks, subjects) {
    super(id, name, age)
    this.marks = marks
    this.subjects = subjects
  }

  static create (child) {
    return new Child(child.id, child.name, child.age, child.marks, child.subjects)
  }

  addSubject (subject) {
    this.subjects.push(subject)
  }
}
