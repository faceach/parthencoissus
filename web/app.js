var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , socket = require('./controllers/socket');

var app = express.createServer();

app.configure(function () {

    app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));
    app.use(express.static(__dirname + '/public'));
    app.set('views', __dirname);
    app.set('view engine', 'jade');

    app.set("view options", { layout: false });
    app.register('.html', {
        compile: function (str, options) {
            return function (locals) {
                return str;
            };
        }
    });

    function compile(str, path) {
        return stylus(str)
                .set('filename', path)
                .use(nib());
    };

});

// test for git
// "app.router" positions our routes 
// above the middleware defined below,
// this means that Express will attempt
// to match & call routes _before_ continuing
// on, at which point we assume it's a 404 because
// no route has handled the request.
app.use(app.router);

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"
app.use(function (req, res, next) {
    // respond with html page
    if (req.accepts('html')) {
        res.status(404);
        res.render('404', { url: req.url });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.
app.use(function (err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('500', { error: err });
});

// Routes
app.get('/', function (req, res) {
    res.render('views/prototype/index');
});

app.listen(3000, function () {
    var addr = app.address();
    console.log('   app listening on http://' + addr.address + ':' + addr.port);
});

// Socket.io start
socket.init(app);