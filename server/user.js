const { Sequelize, DataTypes } = require('sequelize');

// Replace with your own database credentials
const sequelize = new Sequelize('s3tutorial', 'postgres', 'sneha0506', {
  host: 'localhost',
  dialect: 'postgres' // Change based on your database
});

const User = sequelize.define('hello', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  timestamps: true // Automatically adds `createdAt` and `updatedAt`
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Unable to sync database:', error);
  });

module.exports = User;
