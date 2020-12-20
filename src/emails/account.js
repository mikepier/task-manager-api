const sgMail = require('@sendgrid/mail')
 
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
