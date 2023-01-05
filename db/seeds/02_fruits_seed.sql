-- Removed id, as a SERIAL id is provided by default.
INSERT INTO fruits (name, description, fruit_picture_url, price, owner_id, isSold, list_time)
VALUES ('Apple', 'Organic Royal Gala, Each', 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1.25, 1, FALSE, '2022-12-31'),
('Banana', 'Organic, 1LB', 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2.28, 1, FALSE, '2022-12-30'),
('Blueberry', 'Organic, 1LB', 'https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4.99, 1, FALSE, '2022-12-29'),
('Durian', 'Organic, each', 'https://images.pexels.com/photos/11493641/pexels-photo-11493641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 14.99, 1, FALSE, '2022-12-28'),
('Dragonfruit', 'Pink, Each', 'https://images.unsplash.com/photo-1607532668400-f162fce11d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80', 6.23, 1, FALSE, '2022-12-27'),
('Watermelon', 'Seedless, Each', 'https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 12.85, 1, FALSE, '2022-12-25'),
('Lime', 'Each', 'https://images.unsplash.com/photo-1603042293225-e7d880f97d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 0.35, 1, FALSE, '2022-12-29'),
('Orange', 'Seedless, Each', 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1.99, 1, FALSE, '2022-12-30'),
('Pineapple', 'Each', 'https://images.unsplash.com/photo-1558195955-c4751542e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 3.29, 1, FALSE, '2022-12-31'),
('Lychee', '1LB', 'https://images.pexels.com/photos/39288/lychee-fruit-fresh-food-39288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 9.99, 1, FALSE, '2023-01-02'),
('Mangosteen', 'Each', 'https://images.pexels.com/photos/4516066/pexels-photo-4516066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2.99, 1, FALSE, '2022-12-31'),
('Rambutan', '1LB', 'https://images.pexels.com/photos/2563242/pexels-photo-2563242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 12.99, 1, FALSE, '2023-01-01');
