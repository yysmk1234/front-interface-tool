const Datastore = require('nedb');
class NeDBDao {
    constructor( filename ){
        this.db = new Datastore({
            filename:filename,
            autoload:true
        })
    }
    find(query={}, select={}){
        return new Promise((resolve, reject) => {
            this.db.find(query,select,(err,doc)=>{
                if(err){
                    reject(err);
                }
                resolve(doc);
            })    
        })
    }
    insert( data ){
        return new Promise((resolve, reject) => {
            this.db.insert(data, (err, newDoc) => {
              if (err) {
                return reject(err);
              }
              resolve(newDoc);
            })
          })
    }
    update( query , data , options={} ){
        return new Promise((resolve, reject) => {
            this.db.update(query , data , options , (err, numAffected) => {
              if (err) {
                return reject(err);
              }
              resolve(numAffected);
            })
          });
    }
    remove( query , options={} ){
        return new Promise((resolve, reject) => {
            this.db.remove(query , options , (err, numAffected) => {
              if (err) {
                return reject(err);
              }
              resolve(numAffected);
            })
          }); 
    }
}

module.exports = NeDBDao;