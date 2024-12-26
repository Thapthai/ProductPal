module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const ProductPromotions = sequelize.define(
    "product_promotions",
    {
      product_id: {
        type: DataTypes.INTEGER,
      },
      promotion_id: {
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
  ProductPromotions.sync();

  return ProductPromotions;
};
