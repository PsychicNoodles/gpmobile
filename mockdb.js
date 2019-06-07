const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

let afl = [
  { 'level': '1', 'usernames': ['birnbaum'] },
  { 'level': '2', 'usernames': ['plans', 'newbie', 'help'] },
  { 'level': '3', 'usernames': [] }
]
let plandata = {
  birnbaum: {
    username: 'birnbaum',
    last_login: 1559821500,
    last_updated: 1558991760,
    pseudo: 'mattori',
    plan: 'Mattori Lee Birnbaum, class of 2019\nComputer Science major, East Asian Studies concentration\n[appdev][nyc]'
  },
  'plans': {
    username: 'plans',
    last_login: 1349282640,
    last_updated: 1349282700,
    pseudo: 'The Official Plan of GrinnellPlans',
    plan: 'Contact us at [mailto:grinnellplans@gmail.com|grinnellplans@gmail.com]'
  },
  'newbie': {
    username: 'newbie',
    last_login: 1186570140,
    last_updated: 1185316920,
    pseudo: '',
    plan: 'Welcome to Plans!'
  },
  'help': {
    username: 'help',
    last_login: 1186570260,
    last_updated: 1179356160,
    pseudo: '',
    plan: '[http://www.grinnellplans.com/documents/faq.html|Plans FAQ]'
  }
}

function autoFingerList (username) {
  return { autofingerlist: afl }
}

function successful (content) {
  content.success = true
  content.message = ''
  return content
}

function failure (msg) {
  return { success: false, message: msg }
}

app.use((req, res, next) => {
  if ('PHPSESSID' in req.cookies || req.path === '/login') {
    next()
  } else {
    res.status(401).json(failure('login required'))
  }
})

app.post('/login', (req, res) => {
  console.log('Login with ' + JSON.stringify(req.body))
  if ('username' in req.body && 'password' in req.body) {
    res.cookie('PHPSESSID', req.body.username)
    res.json(successful(autoFingerList(req.body.username)))
  } else {
    res.json(failure('Invalid username or password'))
  }
})

app.get('/autofingerlist', (req, res) => {
  console.log('Autofingerlist for ' + req.cookies['PHPSESSID'])
  res.json(successful(autoFingerList(req.header('PHPSESSID'))))
})

app.get('/read/:username', (req, res) => {
  console.log('Read ' + req.params.username)
  if (req.params.username in plandata) {
    res.json(successful(plandata[req.params.username]))
  } else {
    res.json(failure('invalid user name'))
  }
})

app.listen(3000, () => console.log('Mock db server listening on port 3000'))
