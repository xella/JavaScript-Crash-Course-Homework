const Teacher = require('./teacher')
const Child = require('./child')
const Parent = require('./parent')
const Database = require('./database');
const fs = require('fs')

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

//Parents
const John = new Parent('John', 32)
John.addChild(Liza)
console.log(John.children)
console.log(John.getChildMarks(Liza))

const Harry = new Parent('Harry', 40)
Harry.addChild(Dan)
console.log(Harry.children)

// Writing into files
const children = [Dan, Liza]
Database.saveChildren(children)

const parents = [John, Harry]
Database.saveParents(parents)

const teachers = [MathTeacher, MusicTeacher]
Database.saveTeachers(teachers)

// File names
const files = ['dataChildren', 'dataParents', 'dataTeachers']
  .map(name => `./${name}.json`)

// Method for reading from file
const readFile = async (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, contents) => {
      if (err) return reject(err);
      resolve(contents);
    });
  });
}

// Async await method for reading files in a specific order
const main = async () => {
  const contents1 = await readFile(files[0])
  console.log(contents1)
  const contents2 = await readFile(files[1])
  console.log(contents2)
  const contents3 = await readFile(files[2])
  console.log(contents3)
  console.log('finished!')
}

main()