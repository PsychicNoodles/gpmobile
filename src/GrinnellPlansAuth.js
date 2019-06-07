import { Validator } from 'jsonschema'

const API_URL = 'http://localhost:3000/api'

let autoFingerListSchema = {
  'id': '/AutoFingerList',
  'type': 'array',
  'items': {
    'type': 'object',
    'properties': {
      'level': {
        'type': 'string',
        'pattern': /\d+/
      },
      'usernames': {
        'type': 'array',
        'items': { 'type': 'string' }
      }
    }
  }
}

// used for both autofingerlist and login tasks
let autoFingerResponseSchema = {
  'id': '/AutoFingerResponse',
  'type': 'object',
  'properties': {
    'message': { 'type': 'string' },
    'success': { 'type': 'boolean' },
    'autofingerlist': { '$ref': '/AutoFingerList' }
  }
}

let validator = new Validator()
validator.addSchema(autoFingerListSchema, '/AutoFingerList')

class GrinnellPlansAuth {
  constructor (plansSession, username, password) {
    this.sessionId = plansSession
    this.username = username
    this.password = password
  }

  login (username = this.username, password = this.password) {
    return fetch(API_URL + '/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      credentials: 'include'
    }).then(res => res.json()).then(json => {
      validator.validate(json, autoFingerResponseSchema, { throwError: true })
    })
  }
}

export const gpAuth = new GrinnellPlansAuth(localStorage.plansSession, localStorage.username, localStorage.password)
