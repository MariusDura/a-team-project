var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/projects', function (req, res) {

    connection.query('SELECT * from useriai', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});


app.post('/api/projects/useriai/add', function (req, res) {

    var hashedPassword = passwordHash.generate(req.body.password);
    let array = {
        firstname: req.body.firstname,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    }
    
    connection.query('INSERT INTO useriai SET?', array, function (err, result) {
        if (err) {
            console.log(err.message);
            res.send("false");
        } else {
            console.log("Viskas pavyko");
            res.send("true");

        }
        res.end();
    });
});


app.post('/api/projects/login', function (req, res) {
    connection.query('SELECT * from useriai Where email = ?', [req.body.email], function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
            if (passwordHash.verify(req.body.password, results[0].password)) {
                console.log(results);
                console.log("true+");
                res.send("true");
            }
            else {
                console.log(results);
                console.log("false+ bad verify");
                res.send("false");
            }
        }
        else {
            console.log("false+");
            res.send("false");
        }
        console.log(results);
        res.end();
    });
});

app.post('/api/projects/addReminder', function (req, res) {
    console.log(req.body);

    let array = {
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    }
    console.log(req.body);

    connection.query('INSERT INTO events SET?', array, function (err, result) {
        if (err) {
            console.log(err.message);
            res.send("false");
        } else {
            console.log("Eventas įkeltas į duombazę");
            res.send("true");
        }
        res.end();
    });
});

app.get('/api/projects/calendarEvents', function (req, res) {

    connection.query('SELECT title,DATE_FORMAT(start,"%m-%d-%Y") as start,DATE_FORMAT(end,"%m-%d-%Y") as end from events', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(8080);