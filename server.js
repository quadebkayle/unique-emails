const express = require('express'),
    bodyParser = require('body-parser'),
    EmailService = require('./email_service').EmailService;

//initializers for server
const emailService = new EmailService();
const app = express();
app.use(bodyParser.json());

//method to retrieve unique email number
app.post('/unique-emails', (req,res) => {
  if(req.body.emails === undefined || !Array.isArray(req.body.emails)){
    res.status(400).send('NO EMAILS OBJECT FOUND, PLEASE SEND IN CORRECT JSON FORMAT: {"emails":[]}');
    return;
  }
  if(req.body.emails.length === 0){
    res.status(400).send('NO EMAILS SENT, PLEASE ATTACH EMAILS IN ARRAY')
    return;
  }
  const numUniqueEmails = emailService.countUniqueEmails(req.body.emails);
  res.send({result: numUniqueEmails});
})

// listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});