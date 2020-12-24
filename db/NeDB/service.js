const neDb = require('./dao');
const path = require('path');
const db = new neDb(path.join(__dirname,'../../datafile/data'));

async function test(){
    let res = await db.remove({}, { multi: true });
    console.log("res",res);
}   

test();