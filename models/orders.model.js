module.exports = function (sequelize, Sequelize) {
  const { DataTypes } = require("sequelize");
  const Orders = sequelize.define(
    "orders",
    {
      name: {
        type: DataTypes.STRING,
      },
      description: {
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
  Orders.sync();

  return Orders;
};
