module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastFed: DATE
    }

    return sequelize.define('Cat', schema);
}