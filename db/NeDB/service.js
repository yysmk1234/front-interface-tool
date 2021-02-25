const neDb = require('./dao');
const path = require('path');
const db = new neDb(path.join(__dirname,'../../datafile/data'));

const reponseService = {};

reponseService.addResponse = async ( params ) => {
    let res = await db.insert( {
        method:params.method,
        url:params.url,
        delayTime:params.delayTime,
        statusCode:params.statusCode,
        body:params.body,
    } ).catch(err=>{
        console.log(err);
        return {err:err}
    });
    return res;
}

reponseService.findResponse = async ( params ) => {
    let res = await db.find(params).catch(err=>{
        console.log(err);
        return {err:err}
    })
    return res
}

reponseService.updateResponseById = async ( params ) => {
    let res = await db.update({_id:params.id},{
        method:params.method,
        url:params.url,
        delayTime:params.delayTime,
        statusCode:params.statusCode,
        body:params.body,
    }).catch(err=>{
        console.log(err);
        return {err:err}
    })
    return res
}

module.exports = reponseService;