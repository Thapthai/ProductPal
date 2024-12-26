module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const ReviewImages = sequelize.define(
    "review_images",
    {
      review_id: {
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
  ReviewImages.sync();

  return ReviewImages;
};
