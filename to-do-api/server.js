const PORT = process.env.PORT ?? 8000;
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors({
  origin: ['http://edlynshih.com', 'http://www.edlynshih.com']
}));
app.use(express.json())

const checkTableExist = async (tableName, client) => {
  const query = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables 
      WHERE table_name = $1
    )`;
  const values = [tableName];
  const result = await client.query(query, values);
  const tableExists = result.rows[0].exists;
  return tableExists;
}

// get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const tableName = 'todos';
    const exists = await checkTableExist(tableName, pool);
    
    // If the table exists, fetch todos
    if (exists) {
      const todos = await pool.query('SELECT * FROM todos');
      res.json(todos.rows);
    } else {
      // If the table doesn't exist, create table
      const createTableQuery = `
        CREATE TABLE todos (
          id SERIAL PRIMARY KEY NOT NULL,
          title VARCHAR(50) NOT NULL,
          description VARCHAR(255) NOT NULL,
          status VARCHAR(50),
          dueDate VARCHAR(50),
          priority INTEGER,
          progress INTEGER,
          owner VARCHAR(50) NOT NULL,
          avatar VARCHAR(255),
          category VARCHAR(50)
        )`;
      
      // Execute the queries
      await pool.query(createTableQuery);

      // Fetch todos
      const todos = await pool.query('SELECT * FROM todos');
      res.json(todos.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// create a new todo
app.post('/api/todos', async (req, res) => {
  const { title, description, status, duedate, priority, progress, owner, avatar, category } = req.body;
  console.log(title, description, status, duedate, priority, progress, owner, avatar, category)
  try { 
    const newTodo = await pool.query(`INSERT INTO todos(title, description, status, duedate, priority, progress, owner, avatar, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [title, description, status, duedate, priority, progress, owner, avatar, category])
    res.json(newTodo)
  } catch (err) {
    console.log(err);
  }
})

//get one specific todo based one id
app.get('/api/todo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query('SELECT * FROM todos WHERE id = $1;',
      [id]);
    res.json(todos.rows);
  } catch (err) {
    console.log(err);
  }
})

// edit a todo
app.put('/api/todo/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status, duedate, priority, progress, owner, avatar, category } = req.body;
  try {
    const editTodo = await pool.query(`UPDATE todos SET title = $1, description = $2, status = $3, duedate = $4, priority = $5, progress = $6, owner = $7, avatar = $8, category = $9 WHERE id = $10;`,
      [title, description, status, duedate, priority, progress, owner, avatar, category, id])
    res.json(editTodo)
  } catch (err) {
    console.log(err);
  }
})

// delete a todo
app.delete('/api/todo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query('DELETE FROM todos WHERE id = $1;', [id])
    res.json(deleteTodo)
  } catch (err) {
    console.log(err);
  }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
