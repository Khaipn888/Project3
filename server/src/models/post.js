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
    area: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    thumbnail: DataTypes.STRING,
    user_id: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    ward: DataTypes.STRING,
    image_id: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};