var express = require('express');
var router = express.Router();
const controllerServer = require('../controller/controllerServer');
const controllerResponse = require('../controller/controllerResponse');
/* GET users listing. */
router.get('/shutDownInterfaceServer',async function(req, res, next) {
    let result = await controllerServer.shutDownServer();
    res.send(result);
});

router.get('/restartInterfaceServer',async function(req, res, next) {
    let result = await controllerServer.restartServer();
    res.send(result);
});

router.get('/getServerStatus', function(req, res, next) {
    let result = controllerServer.getServerStatus();
    res.send(result);
});

router.post('/addResponse',async function(req, res, next) {
    let body = req.body;
    let result = await controllerResponse.addResponse(body);
    res.send(result);
})

router.post('/getResponse',async function(req, res, next) {
    let body = req.body;
    let result = await controllerResponse.getAllResponse(body);
    res.send(result);
})

router.post('/updateResponseById',async function(req, res, next) {
    let body = req.body;
    let result = await controllerResponse.updateResponseById(body);
    res.send(result);
})

module.exports = router;
