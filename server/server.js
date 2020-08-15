const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.urlencoded())


app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});


// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }

app.listen(3000, () => console.log('Listening on port 3000...'));