const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {User, Plan} = require('./util/models')
const seed = require('./util/seed')
const {getAllUsers, getThisUser} = require('./controllers/user')
const {register, login} = require('./controllers/register')
const server = express()
server.use(express.json())
server.use(cors())

Plan.hasMany(User)
User.belongsTo(Plan)

// endpoint
server.get('/api/allUsers', getAllUsers)
server.get('/api/thisUser/:userId', getThisUser)
server.post('/api/register', register)
server.post('/api/login', login)

db
    .sync()
    // .then(() => (seed())

server.listen(4001, () => console.log('Up on 4001'))
