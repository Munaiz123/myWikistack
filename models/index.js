const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',{
  logging:false
})



//created table called 'page' and assigning it columns.
//Each sub property is a column in the table/model.
const Page = db.define('page', {
  title:{
    type: Sequelize.STRING,
    allowNull: false,

  },
  slug:{
    type: Sequelize.STRING,
    allowNull: true

  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false

  },
  status:{
    type: Sequelize.ENUM('open', 'close')
  },
  // date:{
  //   type:Sequelize.DATEONLY
  // }

});

//created table called 'user'
const User = db.define('user', {
  name:{
    type: Sequelize.STRING,
    allowNull: false

  },
  email :{
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true

  }
});

module.exports = {
  db
}
