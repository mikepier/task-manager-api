// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true  }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)


    // DATA INPUT
    // db.collection('users').insertOne({
    //     name: "Misio",
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Stanislas',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'buy a dog',
    //         status: false
    //     }, {
    //         description: 'go to Hawaii',
    //         status: true
    //     }, {
    //         description: 'buy PS5',
    //         status: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    //DATA READ
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5fa04594df2eed279490850f") }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').find({ status: false }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').findOne({ _id: new ObjectID("5fa03786f17a4e0550aef20a") }, (error, user) => {
    //     if (error){ 
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // UPDATE DATA
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5fa03786f17a4e0550aef20a")
    // }, {
    //     // $set: {
    //     //     name: 'Pysio'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //         status: false
    //     },  {
    //         $set: {
    //             status: true
    //         }
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // DELETE DATA
    // db.collection('users').deleteMany({
    //     age:26
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     _id: new ObjectID("5fa04594df2eed279490850f")
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

})