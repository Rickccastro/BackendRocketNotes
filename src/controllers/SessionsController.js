const knex = require('../database/knex')
const AppError = require("../utils/appError")
const {compare} =require('bcryptjs')
const authConfig = require('../configs/auth')
const {sign} = require('jsonwebtoken')

class SessionController{

    async create(request,response){
        const {email,password}=request.body
        
        const user = await knex ("users").where({email}).first()
        
        if(!user){
            throw new AppError("Email e/ou senha incorreta",401)
        }
           
        const passwordMatched = compare(password, user.password)

        if(!passwordMatched){
            console.log(typeof password)
            console.log(typeof user.password)
            throw new AppError("senha incorreta",401)

        }
        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return response.json({ user, token });
        }


}

module.exports=SessionController