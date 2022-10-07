module.exports = (sequelize, DataTypes) => {
  const bikesModel = sequelize.define('bikes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    reserved: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    rentDueDate: DataTypes.DATE,
  });

  return bikesModel;
};
