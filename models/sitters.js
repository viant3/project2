module.exports = function(sequelize, DataTypes) {
  var Sitters = sequelize.define("Sitters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    rate: {
      type: DataTypes.INTEGER
    }
  });
  return Sitters;
};
