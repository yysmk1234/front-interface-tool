var express = require('express');
var router = express.Router();
const neDbService = require('../db/NeDB/service');

async function handlePostResponse(){
  let postRouterDataFromDb  = await neDbService.findResponse({
    method:"POST"
  });
  if(postRouterDataFromDb){
    for (item of postRouterDataFromDb){
      router.post(item.url, function(req, res, next) {
        res.send(item.body);
      });
    }
  }
}

handlePostResponse();

module.exports = router;
