module.exports = (sequelize, DataTypes) => {
    const Opinion = sequelize.define('Opinion', {
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
        unique: true
      },
      textbody: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
      { timestamps: false });
    return Opinion;
  };