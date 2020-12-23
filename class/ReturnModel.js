class RetrunModel {
    constructor( code=0 , message="" , data={} ){
        this.code = code;
        this.message = message;
        this.data = data
    }
    setCode(code){
        this.code = code;
    }
    setMessage(message){
        this.message = message;
    }
    setData(data){
        this.data = data;
    }
}

module.exports =  RetrunModel;