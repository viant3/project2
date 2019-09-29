module.exports = function(sequelize, DataTypes) {
  var Sitters = sequelize.define("Sitters", {
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    firstName: {
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
    cats: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    dogs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    both: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER
    }
  });
  return Sitters;
};
