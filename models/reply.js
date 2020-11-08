'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate(models) {
        Reply.belongsTo(models['User']);
    }
  };
  Reply.init({
    text: DataTypes.TEXT,
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};
