const express = require('express')
const ChildService = require('./services/child-service')
const ParentService = require('./services/parent-service')
const TeacherService = require('./services/teacher-service')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

// Show the main "Welcome" page
app.get('/', (req, res, next) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening.')
})

// Show a list of all people (children, parents, teachers)
// GET /all
app.get('/people', async (req, res, next) => {
  const children = await ChildService.findAll()
  const parents = await ParentService.findAll()
  const teachers = await TeacherService.findAll()
  res.render('all', { children, parents, teachers })
})

// == Children
// Add a child
// POST /children
// With json {"id": 1, "name": "Lara", "marks": [3,4,2,5], "subjects": ["math", "music"]}
app.post('/children', async (req, res, next) => {
  const child = await ChildService.add(req.body)
  res.send('i got it! ' + child)
})

// View a child profile by Id
// GET /children/:id
app.get('/children/:id', async (req, res, next) => {
  const person = await ChildService.find(req.params.id)
  res.render('person-detail', {person})
})

// Remove a child
// DELETE /children/{id}
app.delete('/children', async (req, res, next) => {
  await ChildService.del(req.body)
  res.send('ok!')
})

// == Parents
// Add a parent
// POST /parents
// With json {"id":1,"name":"John","age":32,"children":[{"name":"Liza","age":13,"marks":[4,3,5,3],"subjects":["math","physics"]}]}

app.post('/parents', async (req, res, next) => {
  const parent = await ParentService.add(req.body)
  res.send('i got it! ' + parent)
})

// View a parent profile by Id
// GET /parents/:id
app.get('/parents/:id', async (req, res, next) => {
  const person = await ParentService.find(req.params.id)
  res.render('person-detail', {person})
})

// Remove a parent
app.delete('/parents', async (req, res, next) => {
  await ParentService.del(req.body)
  res.send('ok!')
})

// == Teachers
// Add a teacher
// POST /teachers
// With json {"id": 1,"name":"Anna","age":34,"subject":"math","experience":4}
app.post('/teachers', async (req, res, next) => {
  const teacher = await TeacherService.add(req.body)
  res.send('i got it!' + teacher)
})

// View a teacher profile by Id
// GET /teachers/:id
app.get('/teachers/:id', async (req, res, next) => {
  const person = await TeacherService.find(req.params.id)
  res.render('person-detail', {person})
})

// Remove a teacher
app.delete('/teachers', async (req, res, next) => {
  await TeacherService.del(req.body)
  res.send('ok!')
})
