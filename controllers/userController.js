const ApiError = require('../errors/ApiError')
class userController{
    async registration (req, res, ){

    }
    async login (req, res, ){
        
    }
    async check (req, res, next ){
        const {id} = req.query
        if(!id){ 
            return next(ApiError.badRequest('NO ID!'))
        }
        res.json(query)
    }
}

module.exports = new userController() 