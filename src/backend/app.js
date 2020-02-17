const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello, welcome to Kodiri!'));

app.get('/api/fruits', (req, res) => res.send(['apple', 'banana', 'orange']))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))