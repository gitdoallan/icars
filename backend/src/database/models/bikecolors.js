module.exports = (sequelize, DataTypes) => {
  const bikeColorsModel = sequelize.define('bikeColors', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'bike_colors',
    underscored: true,
  });

  return bikeColorsModel;
};
