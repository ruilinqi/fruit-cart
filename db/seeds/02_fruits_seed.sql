-- Removed id, as a SERIAL id is provided by default.
INSERT INTO fruits (name, description, fruit_picture_url, price, owner_id, isSold, list_time)
VALUES ('Apple', 'organic royal gala, each', 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1.25, 3, FALSE, '2022-12-25'),
('Banana', 'organic, bunch', 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.99, 3, FALSE, '2022-12-22'),
('Blueberry', 'organic, 1LB', 'https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4.99, 3, FALSE, '2022-12-27'),
('Durian', 'organic, each', 'https://images.pexels.com/photos/11493641/pexels-photo-11493641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 14.99, 3, FALSE, '2022-12-28'),
('Dragonfruit', 'pink, each', 'https://images.unsplash.com/photo-1607532668400-f162fce11d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80', 1.99, 3, FALSE, '2022-12-27'),
('Watermelon', 'seedless, each', 'https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 12.99, 3, FALSE, '2022-12-27');
