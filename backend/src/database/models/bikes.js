module.exports = (sequelize, DataTypes) => {
  const bikesModel = sequelize.define('bikes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    modelId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    rating: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'bikes',
    underscored: true,
  });

  return bikesModel;
};
