const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cabins: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    draft: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuelCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    waterCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cruiseVel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fuelType: {
      type: DataTypes.STRING,
      defaultValue: "gasoline",
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    }
  });
};