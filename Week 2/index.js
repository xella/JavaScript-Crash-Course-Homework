const Teacher = require('./teacher')
const Child = require('./child')
const Parent = require('./parent')

let MathTeacher = new Teacher('Anna', 34, 'math', 4)

let Liza = new Child('Liza', 13)
Liza.marks.push(4, 3, 5)
Liza.subjects.push('math')
Liza.subjects.push('physics')

MathTeacher.putAMark(Liza, 3)
console.log(Liza.marks)

let John = new Parent('John', 32)
John.addChild(Liza)
console.log(John.children)

console.log(John.getChildMarks(Liza))
