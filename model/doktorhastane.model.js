module.exports = (sequelize, Sequelize) => {
    const DoktorHastane = sequelize.define('doktorhastane', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        doktorid: {
            type: Sequelize.INTEGER
            
        },
        hastaneid: {
            type: Sequelize.INTEGER
            
        }

    }, { freezeTableName: true, timestamps: false });

    return DoktorHastane;
}
