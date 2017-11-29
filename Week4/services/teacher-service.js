const fs = require('fs')
const TeacherModel = require('../models/teacher-model')
const dbPath = 'databaseTeachers.json'

async function findAll () {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, file) => {
      if (err) return reject(err)
      const teachers = JSON.parse(file).map(TeacherModel.create)
      resolve(teachers)
    })
  })
}

async function find (teacherId) {
  const allTeachers = await findAll()
  return allTeachers.find(p => p.id == teacherId)
}

async function add (teacher) {
  const allTeachers = await findAll()
  const lastTeacher = allTeachers[allTeachers.length - 1]
  const lastTeachersId = lastTeacher && lastTeacher.id || 0
  teacher.id = lastTeachersId + 1

  teacher = TeacherModel.create(teacher)
  allTeachers.push(teacher)

  await saveAll(allTeachers)
  return teacher
}

async function saveAll (teachers) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(teachers), (err, file) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

async function del (teacherId) {
  const allTeachers = await findAll()
  const teacherIndex = allTeachers.findIndex(p => p.id == teacherId)
  if (teacherId < 0) return
  allTeachers.splice(teacherIndex, 1)
  saveAll(allTeachers)
}

module.exports = {
  findAll,
  find,
  add,
  del
}
