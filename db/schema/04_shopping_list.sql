DROP TABLE IF EXISTS shopping_list CASCADE;
CREATE TABLE shopping_list (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  fruit_id INTEGER REFERENCES fruits(id)
);
