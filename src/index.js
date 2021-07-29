const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
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
  let data = {
    activeRoute: 'home'
  }
  console.log(data);
  res.render(__dirname + '/views/pages/index/index.njk', data);
});

app.get(baseUrl + 'faq', (req, res) => {
  let data = {
    activeRoute: 'faq'
  }

  res.render(__dirname + '/views/pages/faq/faq.njk', data, (err, html) => {
    res.send(html);
  });
});

app.get(baseUrl + 'pricing', (req, res) => {
  let data = {
    activeRoute: 'pricing'
  }

  res.render(__dirname + '/views/pages/pricing/pricing.njk', data);
});

app.get(baseUrl + 'news', (req, res) => {
  let data = {
    activeRoute: 'news'
  }

  res.render(__dirname + '/views/pages/news/news.njk', data);
});

app.get(baseUrl + 'contact', (req, res) => {
  let data = {
    activeRoute: 'contact'
  }

  res.render(__dirname + '/views/pages/contact/contact.njk', data);
});

// SERVICES
app.get(baseUrl + 'services/', (req, res) => {
  let data = {
    activeRoute: 'services'
  }

  res.render(__dirname + '/views/services/services.njk', data);
});

app.get(baseUrl + 'services/:servicename', (req, res) => {
  let data = {
    activeRoute: 'services'
  }

  const serviceString = `/views/services/${req.params.servicename}/${req.params.servicename}.njk`;
  res.render(__dirname + serviceString, data);
});

//RESOURCES
app.get(baseUrl + 'resources/:rscname', (req, res) => {
  let data = {
    activeRoute: 'resources'
  }

  const rscString = `/views/resources/${req.params.rscname}/${req.params.rscname}.njk`;
  res.render(__dirname + rscString, data);
});

app.listen(port, () => {
  console.log('Backend started on port ' + port);
});
