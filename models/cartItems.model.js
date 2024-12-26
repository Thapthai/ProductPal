module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const CartItems = sequelize.define(
    "cart_items",
    {
      cart_id: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT,
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
  CartItems.sync();

  return CartItems;
};
