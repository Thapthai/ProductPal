const dbConfig = require("../configs/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  define: {
    freezeTableName: true,
  },
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);

  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cartItems = require("./cartItems.model")(sequelize, Sequelize);
db.carts = require("./carts.model")(sequelize, Sequelize);
db.categories = require("./categories.model")(sequelize, Sequelize);
db.orderItem = require("./orderItem.model")(sequelize, Sequelize);
db.orderPromotions = require("./orderPromotions.model")(sequelize, Sequelize);
db.orders = require("./orders.model")(sequelize, Sequelize);
db.products = require("./product.model")(sequelize, Sequelize);
db.productImages = require("./productImages.model")(sequelize, Sequelize);
db.productPromotions = require("./productPromotions.model")(
  sequelize,
  Sequelize
);

db.promotion = require("./promotion.model")(sequelize, Sequelize);
db.reviewImages = require("./reviewImages.model")(sequelize, Sequelize);
db.reviews = require("./reviews.model")(sequelize, Sequelize);

module.exports = db;
