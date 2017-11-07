const Person = require('./person')

module.exports = class Child extends Person {
  constructor (name, age, marks, subjects) {
    super(name, age)
    this.marks = []
    this.subjects = []
  }

  addSubject (subject) {
    this.subjects.push(subject)
  }
}
