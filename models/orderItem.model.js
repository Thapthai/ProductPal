module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const OrderItem = sequelize.define(
    "order_item",
    {
      order_id: {
        type: DataTypes.STRING,
      },
      product_id: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.FLOAT,
      },
      price: {
        type: DataTypes.INTEGER,
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
  OrderItem.sync();

  return OrderItem;
};
