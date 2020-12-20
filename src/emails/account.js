const sgMail = require('@sendgrid/mail')
 
//'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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'm.pierscionek@outlook.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'm.pierscionek@outlook.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Please tell us your story why you decided to leave us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}

// sgMail.send({
//     to: 'm.pierscionek@outlook.com',
//     from: 'm.pierscionek@outlook.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this message gets delivered'
// }).then(() => {
//     console.log('Email sent')
// }).catch((error) => {
//     console.log(error)
// })