const urlNormalizer = require('../services/url_normalizer');
const { Page, Comment, Reply, User } = require('../models/index');

module.exports = {
    async findOrCreate(url) {
        url = urlNormalizer.normalize(url);
        return Page.findOrCreate({
            where: {
                url,
            },
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: Reply,
                            include: [
                                {
                                    model: User,
                                },
                            ],
                        },
                        {
                            model: User,
                        },
                    ],
                }
            ]
        });
    },
};
