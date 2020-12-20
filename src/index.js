const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')
const app = express()
const port = process.env.PORT

//for starting a database
///Users/lenovo/mongodb/bin/mongod --dbpath=/Users/lenovo/mongodb-data

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Server is under maintenance mode')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch)
// }

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'Hal'
// }
// pet.toJSON = function () {
//     console.log(this)
//     return {} //this
// }
// console.log(JSON.stringify(pet))

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('5fc38c6bd693783d28c31fed')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5fc38c46d693783d28c31feb')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()