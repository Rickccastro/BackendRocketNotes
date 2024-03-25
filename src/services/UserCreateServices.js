const AppError = require('../utils/appError')
const { hash ,compare} = require('bcryptjs')

class UserCreateServices {
    constructor(userRespository) {
        this.userRepository=userRespository;

    }

    async execute({ name, email, password }) {
        const checkUserExists = await this.userRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError("Este e-mail já está em uso.")
        }
        const hashedPassword = await hash(password, 8)

        await this.userRepository.createUser({ name, email, password: hashedPassword });

    }
}


module.exports = UserCreateServices;