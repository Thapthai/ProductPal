module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const ProductImages = sequelize.define(
    "Product_images",
    {
      product_id: {
        type: DataTypes.INTEGER,
      },
      path: {
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
  ProductImages.sync();

  return ProductImages;
};
