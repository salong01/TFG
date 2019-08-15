const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('ComicVerse', 'saul', 'uLEmomJAL2BGj2XL', {
  host: '192.168.1.129',
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
    },
    rol: {
      type: sequelize.STRING,
      defaultValue: "user"
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

  class Comics extends Model {}
    Comics.init({
      name :{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false
      },
      image:{
        type:sequelize.STRING
      },
      date:{
        type: Sequelize.DATE,
      },
      faction: {
        type: sequelize.STRING,
        allowNull: true
      }
  });
 

  Users.hasMany(HeroUser);
  Heroes.hasMany(HeroUser);

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
//POST http://localhost:3000/register 
app.post('/register', function(req,res){
  console.log(req.body)

  let errorLogin = 'error';

  User.findAll({
    where: {
      userID: req.body.user
    }
  }).then(data =>{
    if(isEmpty(data)==true || data === undefined){

      User.create({
          userID : req.body.user,
          nameID : req.body.name,
          pass: req.body.password,
          birth: req.body.date,
          email: req.body.email
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send();
        console.log("There was an error registering the user on DB", err);
        res.status(500).end();   
       }) ; 

    }else{
      res.send(errorLogin);
      console.log("The user is already registered");
      res.status(500).end();   
    } 
  });
});

//POST http://localhost:3000/login
app.get('/login', function(req,res){
  
  console.log("USER LOGIN \n");

  let errorLogin = 'error';

  User.findAll({
      where: {
        nameID: req.query.ID
      }
    }).then(data =>{
      if(isEmpty(data)==true || data === undefined){
        res.send(errorLogin);
        res.status(500).end();
      }else{
        res.send(data);
      }
     
    });
});
app.listen(port, function () {
    console.log('ComicVerse app listening on port '+port+'!\n\n');
});  