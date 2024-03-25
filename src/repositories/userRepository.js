const sqliteConnection = require('../database/sqlite')

class userRespository{

    async findByEmail(email){
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        
        return user;
    }

    async createUser({name,email,password}){
        const database = await sqliteConnection();
        const userId =await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
          );

          console.log(name,email,password)

          return {id:userId };
    }

}

module.exports=userRespository;