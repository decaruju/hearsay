const { Reply } = require('../models/index');

module.exports = {
    async create(commentId, user, text) {
        return Reply.create({ text, userId: user.id, commentId });
    },
};
