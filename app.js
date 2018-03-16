var express = require('express');
var morgan = require('morgan');
var { createEngine } = require('express-react-views');

const app = express();
const port = 8000;

require.extensions['.css'] = function() {
    return; // doing nothing since it's a css
};

/* gzipping to save space */
// app.get('*.js', function(req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

/* view engine configure */
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static('public'));
app.use(morgan('dev'));
app.engine('jsx', createEngine());

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.get('/dummy', function(req, res) {
	require('./Firebase').pushDummy();
	res.redirect('/listing');
});

app.get('/dummy', function(req, res) {
	require('./Firebase').pushDummy();
	res.redirect('/profile');
});
/* routes */
app.get('/', require('./routes/index'));   				// landing page
app.get('/listing', require('./routes/listing-result'));  //listing page
app.get('/new', require('./routes/new-listing').get);   //  new page
app.post('/new', require('./routes/new-listing').post);   //  new page
app.get('/newprofile', require('./routes/new-profile').get);   //  new page
app.post('/newprofile', require('./routes/new-profile').post);   //  new page
app.get('/listing/:type/:id', require('./routes/listing-detail'));  //listing page details
app.get('/profile/:type/:id', require('./routes/profile-detail'));  // profile page details
app.get('/viewuser/:type/:id', require('./routes/view-user'));  // profile page details
app.get('/about', require('./routes/about'));  // about page
app.get('/contact', require('./routes/contact'));  // about page

app.listen(
    port,
    function(){
        console.log("\uD83C\uDF0F running at http://localhost:8000");
    }
);