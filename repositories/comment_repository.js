const { Comment } = require('../models/index');

module.exports = {
    async create(pageId, user, text) {
        return Comment.create({ text, userId: user.id, pageId });
    },
};
