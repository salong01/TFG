const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('ComicVerse', 'Saul', 'hUo9WTMaaCL5a1o0', {
  host: '192.168.1.39',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Model = Sequelize.Model;
  class Users extends Model {}
  Users.init({
    userID: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pass: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birth: {
        type: Sequelize.DATE,
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'users'
  });
  

  class Heroes extends Model {}
  Heroes.init({
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    biography: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false
    }, 
    birth: {
      type: Sequelize.STRING,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    faction: {
        type: Sequelize.STRING
    }
    
  }, {
    sequelize,
    modelName: 'heroes'
  });

  class HeroUser extends Model {}
  HeroUser.init({
  }, {
    sequelize,
    modelName: 'heroUser'
  });

  User.hasMany(HeroUser);
  Hero.hasMany(HeroUser);
  //HeroUser.belongsTo(Hero);

  sequelize.sync({force: false});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(port, function () {
    console.log('ComicVerse app listening on port '+port+'!\n\n');
  });
  