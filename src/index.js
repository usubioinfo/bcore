const cors = require('cors');
const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const nunjucks = require('nunjucks');
const sass = require('node-sass-middleware');
const SetAsyncExtension = require('nunjucks-setasync');

const baseUrl = '/'
const port = 3000;

const app = express();

let nunEnv = nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: app
});

nunEnv.addGlobal(`RaikouServer`, 'http://bioinfocore.usu.edu/raikou');

const getPDFs = function(callback) {
  let fileArray = [];
  fs.readdir(path.join(__dirname, '/../pdf'), (err, files) => {
    if (!files) {
      callback(null, []);
      return;
    }

    files.forEach(file => {
      let name = file.split('-').join(' ');
      name = path.parse(name).name;
      let fileObj = {name: name, link: '/pdf/' + file, downloadLink: '/download/pdf/' + file};
      fileArray.push(fileObj);
    });
    callback(null, fileArray);
  });
}

nunEnv.addGlobal('getPDFs', getPDFs);
nunEnv.addExtension('SetAsyncExtension', new SetAsyncExtension());

/*
app.use(baseUrl + 'scss', sass({
    // Options
    src: path.join(__dirname, 'scss'),
    includePaths: ['scss', 'views'],
    dest: path.join(__dirname, '/../public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
*/

app.use(cors());

app.use(baseUrl + 'public/css', express.static(path.join(__dirname, '/../public/css')));

// Images can be retrieved with http://url/biotec/image/:imagename
app.use(baseUrl + 'images/', express.static(__dirname + '/../images'));
app.use(baseUrl + 'img/', express.static(__dirname + '/../img'));
app.use(baseUrl + 'biocore-images/', express.static(__dirname + '/../biocore-images'));
app.use(baseUrl + 'js/', express.static(__dirname + '/../js'));
app.use(baseUrl + 'css/', express.static(__dirname + '/../css'));
app.use(baseUrl + 'fonts/', express.static(__dirname + '/../fonts'));
app.use(baseUrl + 'pdf/', express.static(__dirname + '/../pdf'));

// Get PDFs
app.get(baseUrl + 'pdf/', (req, res) => {
  let fileArray = [];
  fs.readdir(path.join(__dirname, '/../pdf'), (err, files) => {
    files.forEach(file => {
      fileArray.push(file);
    });
    res.json({files: fileArray});
  });
});

app.get(baseUrl + 'download/pdf/:filename', (req, res) => {
  const pdfFile = path.join(__dirname, '/../pdf/') + req.params.filename;
  res.download(pdfFile);
});

// Pages
app.get(baseUrl, (req, res) => {
  res.render(__dirname + '/views/pages/index/index.njk');
});

app.get(baseUrl + 'faq', (req, res) => {
  res.render(__dirname + '/views/pages/faq/faq.njk');
});

app.get(baseUrl + 'news', (req, res) => {
  res.render(__dirname + '/views/pages/news/news.njk');
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

//RESOURCES
app.get(baseUrl + 'resources/:rscname', (req, res) => {
  const rscString = `/views/resources/${req.params.rscname}/${req.params.rscname}.njk`;
  res.render(__dirname + rscString);
});

app.listen(port, () => {
  console.log('Backend started on port ' + port);
});
