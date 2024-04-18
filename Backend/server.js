const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const path = require('path')
const sequelize = require('./config/db.js');
const app = express();

app.use(bodyParser.json());
app.use(cors());


sequelize.authenticate()
  .then(() => {
    console.log('Sequelize connected to the database successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/", express.static(path.join(__dirname, "frontend/build")));
app.use("/*", express.static(path.join(__dirname, "frontend/build")));
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
