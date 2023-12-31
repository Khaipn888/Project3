'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic_saved extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Topic_saved.init({
    user_id: DataTypes.STRING,
    topic_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic_saved',
  });
  return Topic_saved;
};