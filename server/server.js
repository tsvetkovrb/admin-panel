const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const employeesList = require('./list.json').list;

const VERSIONS = {
  V1: 'v1',
};

const baseUrl = `/api/${VERSIONS.V1}`;

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get(`${baseUrl}/staff-list/`, (req, res) => {
  res.send(employeesList);
});

app.get(`${baseUrl}/staff-list/:id`, (req, res) => {
  const userID = parseInt(req.params.id, 10);
  const employee = employeesList.find(worker => worker.id === userID);

  if (!employee) return res.sendStatus(404);

  res.send(employee);
});

app.post(`${baseUrl}/add-comment/`, (req, res) => {
  const { id, comment } = req.body;
  const employee = employeesList.find(worker => worker.id === id);
  const { comments } = employee;

  comments.push(comment);

  res.send(employee);
});

// eslint-disable-next-line
app.listen(app.get('port'), () => console.log(`http://localhost:${app.get('port')}`),);
