let controllerResponse = {};
const RetrunModel = require('../class/ReturnModel');
let NeDbService = require('../db/NeDB/service');

controllerResponse.addResponse = async ( data ) => {
    let returnModel = new RetrunModel;
    let res = await NeDbService.addResponse(data);
    if (res.err){
        returnModel.setCode('5000');
        returnModel.setMessage('插入数据失败');
    }else {
        returnModel.setCode('2000');
        returnModel.setMessage('插入数据成功');
    }
    return returnModel;
}

module.exports = controllerResponse;