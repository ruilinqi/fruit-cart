DROP TABLE IF EXISTS fruits CASCADE;
CREATE TABLE fruits (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price FLOAT,
  description TEXT,
  fruit_picture_url VARCHAR(255),
  owner_id INTEGER REFERENCES users(id),
  isSold BOOLEAN DEFAULT FALSE,
  list_time DATE
);
