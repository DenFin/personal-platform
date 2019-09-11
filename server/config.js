const path = require('path');
const bodyParser = require('body-parser');


module.exports = (app, express) => {
    // Set view engine
    app.set("view engine", "ejs");

    // Set views directory
    app.set("views", path.join(__dirname, "views"))

    // Set static directory
    app.use('/static', express.static('static'))

    // Body parser
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
}