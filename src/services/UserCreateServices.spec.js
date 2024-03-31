const UserCreateServices = require('./UserCreateServices')
const AppError = require('../utils/appError')
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory.js");

    /*agrupando os tipos de testes, testes da area do UserCreateServices*/
describe("UserCreateServices", () => {
    /*logica banco*/
    /*logica de serviços login etc */
    let userRepositoryInMemory = null;
    let userCreateServices = null;


    /*executa antes de cada teste*/
    beforeEach(()=>{
        userRepositoryInMemory=new UserRepositoryInMemory();
        userCreateServices=new UserCreateServices(userRepositoryInMemory);

    })

    /*descriçao do teste , e função testando*/
    it("user should be create", async () => {
        const user = {
            name: "Teste",
            email: "testeSpec@123",
            password: "123"
        };


        const userCreated = await userCreateServices.execute(user);
        expect(userCreated).toHaveProperty("id");

    });

    it("user should not be created exists email", async () => {
        const user1 = {
            name: "TesteEmail",
            email: "TesteEmail@123",
            password: "123"
        }
        const user2 = {
            name: "TesteEmail2",
            email: "TesteEmail@123",
            password: "456"
        }

        await userCreateServices.execute(user1);

        await expect(
            async () => await userCreateServices.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."))

    })

})
