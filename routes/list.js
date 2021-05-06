var express = require("express");
var router = express.Router();
var request = require("request");
/* GET home page. */
router.get("/", function(req, res, next) {
  const url = "https://www.kaopuyun.com/Api/News/index/uid/2/cid/4";
  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      if(data.success){
        const list = data.body.list;
        res.render("list", {
          list: list
        });
      }else{
        res.send("{error:404}");
      }
    } else {
      res.send("{error:404}");
    }
  });
});

module.exports = router;
