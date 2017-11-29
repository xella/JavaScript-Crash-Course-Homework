const fs = require('fs')
const ParentModel = require('../models/parent-model')
const dbPath = `databaseParents.json`

async function findAll () {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, file) => {
      if (err) return reject(err)
      const parents = JSON.parse(file).map(ParentModel.create)
      resolve(parents)
    })
  })
}

async function find (parentId) {
  const allParents = await findAll()
  return allParents.find(p => p.id == parentId)
}

async function add (parent) {
  const allParents = await findAll()
  const lastParent = allParents[allParents.length - 1]
  const lastParentsId = lastParent && lastParent.id || 0
  parent.id = lastParentsId + 1

  parent = ParentModel.create(parent)
  allParents.push(parent)

  await saveAll(allParents)
  return parent
}

async function saveAll (parents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(parents), (err, file) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

async function del (parentId) {
  const allParents = await findAll()
  const parentIndex = allParents.findIndex(p => p.id == parentId)
  if (parentId < 0) return
  allParents.splice(parentIndex, 1)
  saveAll(allParents)
}

module.exports = {
  findAll,
  find,
  add,
  del
}
