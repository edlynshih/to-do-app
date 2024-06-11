CREATE DATABASE todoapp;

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
);