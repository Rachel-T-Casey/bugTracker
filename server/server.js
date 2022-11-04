const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/api/users/register', (req, res) => {
  const { username, email, password } = req.body;
  res.send(req.body);
  console.log(username);
  console.log(email);
  console.log(password);

})

app.listen(5000)