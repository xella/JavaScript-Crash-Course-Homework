const Person = require('./person-model')

module.exports = class Teacher extends Person {
  constructor (id, name, age, subject, experience) {
    super(id, name, age)
    this.subject = subject
    this.experience = experience
  }

  static create (teacher) {
    return new Teacher(teacher.id, teacher.name, teacher.age, teacher.subject, teacher.experience)
  }

  putAMark (child, mark) {
    console.log(`today ${child.name} gets the mark ${mark}!`)
    child.marks.push(mark)
  }
}
