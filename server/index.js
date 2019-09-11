const express = require('express');
const app = express();
const db = require('./config/db');
const dbInit = require('./config/db').dbInit

require('./config')(app, express)
require('./routes')(app)

// SET API ROUTES
const login = require('./routes/auth/login');
app.use('/auth/login', login);

const user = require('./routes/api/user');
app.use('/api/user', user);

app.listen(8000, function(){
    console.log(`Server running on port 8000`)
});
