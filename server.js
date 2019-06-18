const express = require('express')
const path = require('path')
const SERVER_PORT=process.env.PORT || 3306
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api/index.js').route)

app.listen(SERVER_PORT, () => console.log('Server started at http://localhost:3306'))