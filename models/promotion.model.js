module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Promotion = sequelize.define(
    "promotion",
    {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      discount_type: {
        type: DataTypes.STRING,
      },
      discount_value: {
        type: DataTypes.FLOAT,
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  Promotion.sync();

  return Promotion;
};
