module.exports = (sequelize, DataTypes) => {
  const carColorsModel = sequelize.define('carColors', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'car_colors',
    underscored: true,
  });

  carColorsModel.associate = (models) => {
    carColorsModel.hasMany(models.cars, {
      foreignKey: 'colorId',
    });
  };

  return carColorsModel;
};
