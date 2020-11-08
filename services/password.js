const BCRYPT_ROUNDS = 10;
const bcrypt = require('bcrypt');

module.exports = {
    hashPassword(password) {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    },
    checkPassword(hashedPassword, password) {
        return bcrypt.compare(password, hashedPassword);
    },
};
