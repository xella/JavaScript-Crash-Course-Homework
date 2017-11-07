const Person = require('./person')
const toTitleCase = require('to-title-case')

module.exports = class Teacher extends Person {
  constructor (name, age, subject, experience) {
    super(name, age)
    this.subject = subject
    this.experience = experience
  }

  putAMark (child, mark) {
    console.log(toTitleCase(`today ${child.name} gets the mark ${mark}!`))
    child.marks.push(mark)
  }
}
