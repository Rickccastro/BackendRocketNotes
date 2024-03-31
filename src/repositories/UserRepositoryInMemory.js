class UserRepositoryInMemory{

    users=[];

    async createUser({name,email,password}){
            const user = {
                id: Math.random(Math.random()*1000)+1,
                email,
                password
            }  
            
        this.users.push(user);


        return user ;
    }

    async findByEmail(email){

        return this.users.find(user=>user.email===email);
    }   
        
}

module.exports=UserRepositoryInMemory;
