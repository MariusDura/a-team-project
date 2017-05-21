var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

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
                var token = jwt.sign({ email: req.body.email }, 'secrettt', { expiresIn: 60 * 60 * 60 });
                res.json({
                    success: true,
                    email: req.body.email,
                    message: "Token has been created",
                    token: token
                });
            }
            else {
                console.log(results);
                console.log("false+ bad verify");
                res.json({
                    success: false,
                    message: "Wrong username/password"
                });
            }
        }
        else {
            console.log("false+");
            res.json({
                success: false,
                message: "Wrong username/password"
            });
        }
        console.log(results);
        res.end();
    });
});

app.post('/api/projects/addReminder', function (req, res) {
    console.log(req.body);
    var user = app.get('auth');
    connection.query('SELECT ID from useriai WHERE useriai.email=?', user.email, function (error, results, fields) {
        if (error) throw error;
        let array = {
            userID: results[0].ID,
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
});

app.get('/api/projects/calendarEvents', function (req, res) {
    var user = app.get('auth');

    if (user != undefined) {
        if (user != "false")
            connection.query('SELECT title,DATE_FORMAT(start,"%m-%d-%Y") as start,DATE_FORMAT(end,"%m-%d-%Y") as end from events INNER JOIN useriai ON events.userID=useriai.ID AND useriai.email=?', user.email, function (error, results, fields) {
                if (error) throw error;
                res.json(results);
            });
        else res.json("not logged in");
    }
    else res.json("not logged in");
});

app.post('/api/projects/login/auth2', function (req, res) {
    var token = req.body.token;
    jwt.verify(req.body.token, 'secrettt', function (err, decoded) {
        if (err) {
            app.set('auth', 'false');
            res.json({ success: false, message: 'Failed to authenticate token.' });

        } else {
            console.log(decoded);
            var email = decoded.email;
            var jwt = decoded;

            app.set('auth', { success: 'true', email: email, token: token });
            res.json({ success: true, jwt });
        }
    });
});

app.get('/api/projects/login/authStatus', function (req, res) {
    res.json(app.get('auth'));
});

app.listen(8080);