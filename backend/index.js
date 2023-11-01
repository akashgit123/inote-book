const express = require('express');
const cors = require('cors');
const connectToDb = require('./db');
const app = express()
const port = 7000

connectToDb();

app.use(express.json());
app.use(cors());

// apis
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})