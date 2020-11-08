const Password = require('../services/password');
const { User, Apikey } = require('../models/index');

module.exports = {
    async create(username, password) {
        const hashedPassword = await Password.hashPassword(password);
        return User.create({ username, hashedPassword });
    },
    async fromKey(apiKey) {
        return User.findOne({
            include: [
                {
                    model: ApiKey,
                    where: {
                        key: apiKey,
                    },
                },
            ],
        });
    },
    fromUsername(username) {
        return User.findOne({
            where: { username }
        });
    },
};
