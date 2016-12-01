var express = require('express')
var logger = require('morgan')
var app = express()
var homepage = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
var contact = require('jade').compileFile(__dirname + '/source/templates/contact.jade')
app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = homepage({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/contact', function (req, res, next) {
  try {
    var html = contact({ title: 'Contact' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
