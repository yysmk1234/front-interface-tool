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

router.post('/addResponse',async function(req, res, next) {
    let body = req.body;
    let result = await controllerResponse.addResponse(body);
    res.send(result);
})


module.exports = router;
