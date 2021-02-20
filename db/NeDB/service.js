const neDb = require('./dao');
const path = require('path');
const db = new neDb(path.join(__dirname,'../../datafile/data'));

const reponseService = {};

reponseService.addResponse = async ( params ) => {
    let res = await db.insert( params ).catch(err=>{
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

module.exports = reponseService;