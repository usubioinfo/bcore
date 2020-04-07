const cors = require('cors');
const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const nunjucks = require('nunjucks');
const sass = require('node-sass-middleware');

const baseUrl = '/biotec/'
const port = 3000;

const app = express();

nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: app
});

app.use(baseUrl + 'scss', sass({
    /* Options */
    src: path.join(__dirname, 'scss'),
    includePaths: ['scss'],
    dest: path.join(__dirname, '/../public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/biotec/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use(cors());

app.use('/public/css', express.static(path.join(__dirname, 'public/css')));

// Images can be retrieved with http://url/biotec/img/:imagename
app.use(baseUrl + 'images/', express.static(__dirname + '/../images'));
app.use(baseUrl + 'biocore-images/', express.static(__dirname + '/../biocore-images'));
app.use(baseUrl + 'js/', express.static(__dirname + '/../js'));
app.use(baseUrl + 'css/', express.static(__dirname + '/../css'));
app.use(baseUrl + 'fonts/', express.static(__dirname + '/../fonts'));

// Pages
app.get(baseUrl, (req, res) => {
  res.render(__dirname + '/views/pages/index/index.njk');
});

app.get(baseUrl + 'faq', (req, res) => {
  res.render(__dirname + '/views/pages/faq/faq.njk');
});

app.get(baseUrl + 'contact', (req, res) => {
  res.render(__dirname + '/views/pages/contact/contact.njk');
});

// SERVICES
app.get(baseUrl + 'services/', (req, res) => {
  res.render(__dirname + '/views/services/services.njk');
});

app.get(baseUrl + 'services/:servicename', (req, res) => {
  const serviceString = `/views/services/${req.params.servicename}/${req.params.servicename}.njk`;
  res.render(__dirname + serviceString);
});

app.get(baseUrl + 'software', (req, res) => {
  res.render(__dirname + '/views/pages/software/software.njk');
});

app.listen(port, () => {
  console.log('Backend started on port ' + port);
});
