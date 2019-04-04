var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dethi/listening01', { title: 'Express' });

});

router.post('/test-submit',function(req,res){
  var data=req.body;
  var ids=data.id;
  ids.forEach(function(id){
    console.log(id);
  })
})
module.exports = router;
