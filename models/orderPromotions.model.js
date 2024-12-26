module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const OrderPromotions = sequelize.define(
    "order_promotions",
    {
      order_id: {
        type: DataTypes.INTEGER,
      },
      promotion_id: {
        type: DataTypes.INTEGER,
      },
      discount_value: {
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
  OrderPromotions.sync();

  return OrderPromotions;
};
