const Sequelize = require('sequelize');

const sequelize = new Sequelize("hastane", "root", "12345", {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: 0,
    timezone: '+03:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(err => {
    console.log("%s\x1b[32m%s", 'MySQL connection: ', 'success')
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.hastane = require('./model/hastane.model')(sequelize, Sequelize);

module.exports = db