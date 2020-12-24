const neDb = require('./dao');
const path = require('path');
const db = new neDb(path.join(__dirname,'../../datafile/data'));

const reponseService = {};

reponseService.addResponse = async ( params ) => {
    let res = await db.insert( params );
    return res;
}