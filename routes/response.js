var express = require('express');
var router = express.Router();
const neDbService = require('../db/NeDB/service');
const METHOD = {
  PUT: "PUT",
  POST: "POST",
  GET: "GET"
}

async function handleResponse() {
  let routerDataFromDb = await neDbService.findResponse();
  if (routerDataFromDb) {
    for (item of routerDataFromDb) {
      if (item.method == METHOD.POST) {
        handlePostResquest(item);
      } else if (item.method == METHOD.GET) {
        handleGetResquest(item);
      }
    }
  }
}

handleResponse();

function handleGetResquest(item) {
  router.get(item.url, function (req, res, next) {
    setTimeout(() => {
      res.status(item.statusCode).send(item.body);
    }, item.dalyTime)
  });
}

function handlePostResquest(item) {
  router.post(item.url, function (req, res, next) {
    setTimeout(() => {
      res.status(item.statusCode).send(item.body);
    }, item.dalyTime)
  });
}

module.exports = router;
