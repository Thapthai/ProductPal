module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Carts = sequelize.define(
    "carts",
    {
      user_id: {
        type: DataTypes.STRING,
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
  Carts.sync();

  return Carts;
};
