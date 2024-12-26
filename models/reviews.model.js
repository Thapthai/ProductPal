module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Reviews = sequelize.define(
    "reviews",
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Reviews.sync();

  return Reviews;
};
