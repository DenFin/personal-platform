const db = require('./../config/db');

module.exports = {

    getAllUsers(){
        return new Promise((resolve, reject) => {
            db.connection.query(`
                SELECT * FROM User;
            `, (error, result) => {
                if(error){
                    return reject(error);
                }
                return resolve(result);
            })
        })
    }



}
