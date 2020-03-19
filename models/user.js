module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        },
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 100]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 100]
        }
      }
    },
      { timestamps: false });
    return User;
  };