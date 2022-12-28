DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price FLOAT,
  description TEXT,
  product_picture_url VARCHAR(255),
  owner_id INTEGER REFERENCES users(id),
  isSold BOOLEAN DEFAULT FALSE,
  listTime DATE
);
