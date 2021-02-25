let controllerResponse = {};
const RetrunModel = require('../class/ReturnModel');
let NeDbService = require('../db/NeDB/service');

controllerResponse.addResponse = async ( data ) => {
    let returnModel = new RetrunModel;
    let res = await NeDbService.addResponse(data);
    if (res.err){
        returnModel.setCode('4100');
        returnModel.setMessage('插入数据失败');
    }else {
        returnModel.setCode('2100');
        returnModel.setMessage('插入数据成功');
    }
    return returnModel;
}

controllerResponse.getAllResponse = async () => {
    let returnModel = new RetrunModel;
    let res = await NeDbService.findResponse({});
    if (res.err){
        returnModel.setCode('4300');
        returnModel.setMessage('获取数据失败');
    }else {
        returnModel.setCode('2300');
        returnModel.setData(res);
        returnModel.setMessage('获取数据成功');
    }
    return returnModel;
}

controllerResponse.updateResponseById = async ( body ) => {
    let returnModel = new RetrunModel;
    let res = await NeDbService.updateResponseById( body );
    if (res.err){
        returnModel.setCode('4200');
        returnModel.setMessage('更新数据失败');
    }else {
        returnModel.setCode('2200');
        returnModel.setMessage('更新数据成功');
    }
    return returnModel;
}

module.exports = controllerResponse;