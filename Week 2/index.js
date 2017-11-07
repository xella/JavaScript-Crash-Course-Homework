const Teacher = require('./teacher')
const Child = require('./child')
const Parent = require('./parent')
const Database = require('./database')

// Teachers
const MathTeacher = new Teacher('Anna', 34, 'math', 4)
const MusicTeacher = new Teacher('Fred', 29, 'music', 2)

// Children
const Liza = new Child('Liza', 13)
Liza.marks.push(4, 3, 5)
Liza.subjects.push('math')
Liza.subjects.push('physics')

const Dan = new Child('Dan', 16)
Dan.marks.push(3, 5, 2)
Dan.subjects.push('music')
Dan.subjects.push('chemistry', 'literature')

MathTeacher.putAMark(Liza, 3)
console.log(Liza.marks)

// Parents
const John = new Parent('John', 32)
John.addChild(Liza)
console.log(John.children)
console.log(John.getChildMarks(Liza))

const Harry = new Parent('Harry', 40)
Harry.addChild(Dan)
console.log(Harry.children)

const children = [Dan, Liza]
Database.saveChildren(children)

const parents = [John, Harry]
Database.saveParents(parents)

const teachers = [MathTeacher, MusicTeacher]
Database.saveTeachers(teachers)

const loadedFileChildren = Database.loadChildren()
console.log(`Name of the first child in the file: ${loadedFileChildren[0].name}`)
console.log(`Subjects of the second child in the file: ${loadedFileChildren[1].subjects}`)

const loadedFileParents = Database.loadParents()
console.log(`Name of the first child of the first parent in the file: ${loadedFileParents[0].children[0].name}`)

const loadedFileTeachers = Database.loadTeachers()
console.log(`Name and age of the first teacher in the file: ${loadedFileTeachers[0].name}, ${loadedFileTeachers[0].age}`)
