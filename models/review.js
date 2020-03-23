module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
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
    return Review;
  };