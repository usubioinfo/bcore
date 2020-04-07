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
app.use(baseUrl + 'img/', express.static(__dirname + '/../images'));
app.use(baseUrl + 'bioimg/', express.static(__dirname + '/../biocore-images'));

app.get(baseUrl, (req, res) => {
  res.render(__dirname + '/views/index.njk');
});

app.get(baseUrl + 'software', (req, res) => {
  res.render(__dirname + '/views/pages/software/software.njk');
});

app.listen(port, () => {
  console.log('Backend started on port ' + port);
});
