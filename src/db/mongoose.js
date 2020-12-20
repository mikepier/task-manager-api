const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    //userCreateIndex: true,
    useUnifiedTopology: true
})



// const buyPS5 = new Task({
//     description: 'buy XSX',
//     status: false
// })

// buyPS5.save().then(() => {
//     console.log(buyPS5)
// }).catch((error) => {
//     console.log('Error!', error)
// })

