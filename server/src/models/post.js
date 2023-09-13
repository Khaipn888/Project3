'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    address: DataTypes.STRING,
    area: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    user_id: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    ward: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};