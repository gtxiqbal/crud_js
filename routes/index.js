var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo1', function (req, res, next) {
    res.render('demo1', {
      title : 'DEMO NAIK GAJI',
        isi : 'HAHAHHAA HAI SEMUANYA YAHHH...'
    });
});

router.get('/demo2/:id', function (req, res, next) {
    res.render('demo2', {
      title : 'DEMO TURUN JAM KERJA',
        isi : 'pengen turun jam kerja jadi '+req.params.id+' jam '
    });
});

router.get('/demo3', function (req, res, next) {
    res.json({
        title : 'Peraturan Jam Kerja',
        isi : {
          pertama : 'Berangkat Jam 9',
            keuda : 'Pulang jam 4',
            ketiga : 'Lembur harus fulll hehhe'
        }
    });
});

router.get('/demo4', function (req, res, next) {
    res.render('demo4');
});

router.post('/demo4', function (req, res, next) {
    res.json({
        title : 'Data Input',
        data : {
          username : req.params('username'),
            tgl_lahir: req.params('tgl_lahir'),
            alamat : req.params('alamat')
        }
    });
});

module.exports = router;
