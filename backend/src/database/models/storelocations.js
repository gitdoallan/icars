module.exports = (sequelize, DataTypes) => {
  const storeLocationsModel = sequelize.define('storeLocations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'store_locations',
    underscored: true,
  });

  storeLocationsModel.associate = (models) => {
    storeLocationsModel.hasMany(models.bikes, {
      foreignKey: 'location_id',
    });
  };

  return storeLocationsModel;
};
