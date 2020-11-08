const { v4: uuidv4 } = require('uuid');

const Password = require('../services/password');
const { User, Apikey } = require('../models/index');
const userRepository = require('../repositories/user_repository');

module.exports = {
    logout(key) {
        return Apikey.destroy({
            where: { key }
        });
    },
    async login(username, password){
        const user = await userRepository.fromUsername(username);
        if (user && await Password.checkPassword(user.hashedPassword, password)) {
            return Apikey.create({ userId: user.id, key: uuidv4() });
        }
        return null;
    },
};
