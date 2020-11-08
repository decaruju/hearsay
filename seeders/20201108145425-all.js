'use strict';

const userRepository = require('../repositories/user_repository');
const pageRepository = require('../repositories/page_repository');
const commentRepository = require('../repositories/comment_repository');
const replyRepository = require('../repositories/reply_repository');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const john = await userRepository.create('John', '12345');
      const jane = await userRepository.create('Jane', '12345');
      const jime = await userRepository.create('Jime', '12345');
      const jone = await userRepository.create('Jone', '12345');
      const june = await userRepository.create('June', '12345');
      const rickPage = await pageRepository.findOrCreate('youtube.com/watch?v=dQw4w9WgXcQ');
      const googlePage = await pageRepository.findOrCreate('google.com');
      const firstComment = await commentRepository.create(rickPage.id, john.id, 'FIRST');
      const secondComment = await commentRepository.create(rickPage.id, john.id, 'second');
      const thirdComment = await commentRepository.create(rickPage.id, john.id, 'Love this video');
      const fourthComment = await commentRepository.create(googlePage.id, john.id, 'How do I search');
      const fifthComment = await commentRepository.create(googlePage.id, john.id, 'How do I search this will be a long comment to make sure that very long comments work :) hihihi');
      const firstReply = await replyRepository.create(firstComment.id, jane.id, 'yep');
      const secondReply = await replyRepository.create(firstComment.id, jime.id, 'nope');
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('User', null, {});
      await queryInterface.bulkDelete('Page', null, {});
      await queryInterface.bulkDelete('Comment', null, {});
      await queryInterface.bulkDelete('Reply', null, {});
  }
};
