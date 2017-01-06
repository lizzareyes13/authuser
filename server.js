const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const configDB = require('./config/database.js');

cosnt jsonData =  {count: 12 , message: "hey"};

mongoClient.connect =  ('link-to-mongo', (err, database)=>{
	//start server
})

app.use(express.static('client'))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res)=>{
	res.send('Web Dev Jobs');
	console.log("we're getting somewhere here")
})

app.post('/jobs', (req,res)=>{
  console.log("Hello there")
});

{
	jobType= "Web Development",
	title= "Jr. Web Developer",
	company= "Marine Corps",
	location= "remote",
	postingDate= "3 days ago",
	experience= "entry level",
	salary= "60k - 80k"
}

job.save();

{
	jobType= "Web Development",
	title= "Java Developer",
	company= "Microsoft",
	location= "In Office",
	postingDate= "1 day ago",
	experience= "experienced level",
	salary= "90k - 100k"
}

pet.save();

db.delete<Job>(1);

let jobs = [];
let id = id + '';

app.post('/pets',(req,res)=>{
  let job = req.body;
  id++;
  job.id = id + '';

  jobs.push(job);
  res.json(job);
});

app.get('/jobs/:id', (req,res)=>{
  const dev = _.find(devs, { id: req.params.id });
  res.json(dev || {});
});


app.get('/data', (req, res)=>{
  res.json(jsonData);
});

app.listen(PORT, ()=>{
  console.log("listening on http://localhost:", PORT);
});

config


mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser()); //read cookies
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// set up ejs for templating
app.set('view engine', 'ejs');

// session
app.use(session({
      secret: 'welovefviwelovefvi',
      resave: true,
      saveUninitialized: true
}));

// passport
app.use(passport.initialize());
app.use(passport.session()); // persistence
app.use(flash()); // give a messages
// routes
require('./app/routes')(app, passport);

// Server listening...
app.listen(PORT, () => {
console.log(`The app is alive at port: ${PORT}`);
});
