const express = require('express')
const app = express()
const mailer = require('express-mailer')
const secret = require('./secret')
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function(req, res){
 res.render('index.pug')
})
app.get('/musica', function(req, res){
 res.render('index.pug')
})
app.get('/contacto', function(req, res){
 res.render('index.pug')
})
app.get('/confirmacion', function(req, res){
 res.render('index.pug')
})
app.get('/error', function(req, res){
 res.render('index.pug')
})
mailer.extend(app, {
 host: 'smtp.gmail.com',
 secureConnection: true, // use SSL
 port: 465, // port for secure SMTP
 transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
 auth: {
   user: secret.mailuser,
   pass: secret.mailpsw
 }
})

app.post('/contacto/send', function (req, res, next) {
 console.log(req.body)
})
//  app.mailer.send('email', {
//    to: secret.mailaddress,
//    subject: 'email enviado desde la pagina de contacto',
//    mensaje: {
//      name: req.body.nombre,
//      email: req.body.email,
//      phone: req.body.asunto,
//      subject: req.body.message
//    }
//  }, function (err) {
//    if (err) {
//      // handle error
//      console.log(err);
//      return res.redirect('/error')
//    }
//    res.redirect('/confirmacion');
//  });
// })
module.exports = app