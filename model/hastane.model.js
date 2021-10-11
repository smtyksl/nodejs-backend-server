module.exports = (sequelize, Sequelize) => {
    const Hastane = sequelize.define('hastane', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ad: {
            type: Sequelize.STRING
        }

    }, { freezeTableName: true, timestamps: false });

    return Hastane;
}
