const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// Express app

const app = express();

// Connext to mongoDB
const dbURI = 'mongodb+srv://conradb:Snoop3223@cluster0.jkxwp.mongodb.net/node-tutorial?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => {console.log(err)})

// register view engine

app.set('view engine', 'ejs');





// middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));






// Routes

app.get('/', (req, res) => {

    res.redirect('/blogs')
});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About'});
});

// blog routes

app.use('/blogs', blogRoutes);






// 404 page

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});

});