'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
        Comment.hasMany(models['Reply']);
        Comment.belongsTo(models['User']);
    }
  };
  Comment.init({
    text: DataTypes.TEXT,
    pageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
