var express = require('express');
var router = express.Router();
var request = require("request");
/* GET users listing. */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const url = "https://www.kaopuyun.com/Api/News/getDetail/id/"+id;
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          const data = JSON.parse(body);
          if(data.success){
            const newdata = data.body.new;
            res.render("detail",{
                data:newdata.content
            });
          }
        } else {
          res.send("{error:404}");
        }
      });
});

module.exports = router;
