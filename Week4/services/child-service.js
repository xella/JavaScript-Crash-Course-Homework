const fs = require('fs')
const ChildModel = require('../models/child-model')
const dbPath = 'databaseChildren.json'

async function findAll () {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, file) => {
      if (err) return reject(err)
      const children = JSON.parse(file).map(ChildModel.create)
      resolve(children)
    })
  })
}

async function find (childId) {
  const allChildren = await findAll()
  return allChildren.find(p => p.id == childId)
}

async function add (child) {
  const allChildren = await findAll()
  const lastChild = allChildren[allChildren.length - 1]
  const lastChildsId = lastChild && lastChild.id || 0
  child.id = lastChildsId + 1

  child = ChildModel.create(child)
  allChildren.push(child)

  await saveAll(allChildren)
  return child
}

async function saveAll (children) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(children), (err, file) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

async function del (childId) {
  const allChildren = await findAll()
  const childIndex = allChildren.findIndex(p => p.id == childId)
  if (childId < 0) return
  allChildren.splice(childIndex, 1)
  saveAll(allChildren)
}

module.exports = {
  findAll,
  find,
  add,
  del
}
