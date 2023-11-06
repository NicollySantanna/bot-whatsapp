const express = require('express')
const bodyParser = require ('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/whatsapp', (req, res) => {
    const message = req.body.Body;
    const response = `Olá! Você disse: ${message}`;
    res.send(response) 
});

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
});

const accountSid = 'SKd7a979360e32d33b2f98ce3c51695136';
const authToken = 'a2e82e038c1c816ab88840ff902e5a2f';
const client = require('twilio')(accountSid, authToken);

client.messages
.create({
    from: 'whatsapp: +14155238886',
    body: 'Olá do bot',
    to: 'whatsapp: +5521974600662'
})
.then(message => console.log(message.sid))
.catch(error => console.log(error));