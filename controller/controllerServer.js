const path = require('path');
const fork = require('child_process').fork;
const kill = require('tree-kill');
const RetrunModel = require('../class/ReturnModel');

let CHILD_PROCESS = null;

const controllerServer = {};

/*
serverStatus : 0 没有进程 1 启动进程 2 已有进程 
*/
controllerServer.restart = () => {
    return new Promise((resolve,reject)=>{
      if(!CHILD_PROCESS){
        CHILD_PROCESS = fork(path.join(__dirname,"../process_child/index"));
        CHILD_PROCESS.on('message',(data)=>{
            if(data){
              resolve(data)
            }
          });
          CHILD_PROCESS.on('error',(err)=>{
            reject(err);
          })
        } else  {
            resolve({
              serverStatus:2
            })
        }
    });
};

controllerServer.restartServer = async () => { 
  let returnModel = new RetrunModel;
  let res = await controllerServer.restart();
  console.log("startRes",res);
  returnModel.setCode(2000);
  returnModel.setMessage('');
  returnModel.setData(res);
  return returnModel;
}

controllerServer.shutDown = () => {
  return new Promise((resolve,reject)=>{
      if(CHILD_PROCESS){
        kill(CHILD_PROCESS.pid, 'SIGKILL', function(err) {
            if(err){
                console.log(err);
                reject(err);
            }
            else {
              CHILD_PROCESS = null;
                resolve({
                  serverStatus:0
                })
            }
          });
      }else{
          resolve({
            serverStatus:0
          })
      }
  })
} 

controllerServer.shutDownServer = async () => { 
  let returnModel = new RetrunModel;
  let res = await controllerServer.shutDown();
  returnModel.setCode(2000);
  returnModel.setMessage('');
  returnModel.setData(res);
  return returnModel;
}

module.exports = controllerServer;