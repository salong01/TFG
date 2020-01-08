const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('comicverse', 'saul', 'RIiIrLyNAliLpM6g', {
  host: '192.168.1.42',
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
  }, {
    sequelize,
    modelName: 'users'
  });
  

  class Characters extends Model {}
  Characters.init({
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
    views:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue: 0
    }
    
  }, {
    sequelize,
    modelName: 'characters'
  });

  class subscriptionsCharac extends Model {}
   subscriptionsCharac.init({
  }, {
    sequelize,
    modelName: 'subsCharac'
  });

  class subscriptionsComics extends Model {}
   subscriptionsComics.init({
  }, {
    sequelize,
    modelName: 'subsComics'
  });

  class Rol extends Model{}
    Rol.init({
      rol: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false
      }
    },{
      sequelize,
      modelName: 'Rol'
    });

  class Faction extends Model {}
    Faction.init({
      name:{
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      }
    },{
      sequelize,
      modelName: 'Rol'
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
        type:Sequelize.STRING
      },
      date:{
        type: Sequelize.DATE,
      },
      views:{
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 0
      }
  },{
    sequelize,
    modelName:'comics'
  }
  );
 
  Users.hasMany(subscriptionsCharac);
  Characters.hasMany(subscriptionsCharac);
  Users.hasMany(subscriptionsComics);
  Comics.hasMany(subscriptionsComics);
  Users.belongsTo(Rol);
  Characters.hasOne(Faction);
  Comics.hasOne(Faction);

  sequelize.sync({force: true});

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

  let errorLogin = 'Este usuario ya está registrado';

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

//GET http://localhost:3000/login
app.get('/login', function(req,res){
  
  console.log("USER LOGIN \n");

  let errorLogin = 'Esta cuenta no existe';

  User.findAll({
      where: {
        userID: req.query.userID,
        pass: req.query.pass
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