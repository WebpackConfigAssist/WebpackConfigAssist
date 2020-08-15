const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.urlencoded())


if (process.env.NODE_ENV === 'production') {

  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });

}



app.listen(3000, () => console.log('Listening on port 3000...'));