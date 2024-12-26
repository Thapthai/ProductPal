module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Cart = sequelize.define(
    "cart",
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
  Cart.sync();

  return Cart;
};
