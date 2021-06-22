const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require("cors")

// PAGES
const Users = require('./routes/Users.js')
const Categories = require('./routes/Categories.js')
const Comments = require('./routes/Comments.js')
const Tasks = require('./routes/Tasks.js')
const searchUser = require('./routes/searchUser.js')
const searchTask = require('./routes/searchTask.js')
const UsersTasks = require('./routes/UsersTask.js')
const tasksByCategory = require('./routes/tasksByCategory.js')
const commentsByTask = require('./routes/commentsByTask.js')
const Login = require('./routes/Login.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(express.static("public"))

const allowCrossDomain = function (req, res, next) {
  const allowOrigin = req.headers.origin || "*";
  res.header("Access-Control-Allow-Origin", allowOrigin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authentication, x-access-token, Accept, Origin");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
};

app.use(cors({
  "origin": "*"
}))

app.options('*', cors())


app.use(allowCrossDomain);

// set the routes
app.use('/users', Users)
app.use('/categories', Categories)
app.use('/comments', Comments)
app.use('/searchUser', searchUser)
app.use('/searchTask', searchTask)
app.use('/tasks', Tasks)
app.use('/login', Login)
app.use('/usersByTaskId', UsersTasks)
app.use('/tasksByCategoryId', tasksByCategory)
app.use('/commentsByTaskId', commentsByTask)
app.use('/', (req, res) => {
  res.send('API')
})


app.use((err, _, res, next) => {
  console.log(err)
  next()
})

module.exports = app
