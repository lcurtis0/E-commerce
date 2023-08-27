require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, "2Qu@5#3R$$", {
      host: 'localhost',
      dialect: 'mysql',
      port: 3305,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
