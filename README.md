# Fruit Cart

Fruit Cart is a bright ecommerce app where customers can browse, favourite, and add delicious fruits to their cart. Admins can mark fruits as sold and choose which fruits to sell.

## Features

### Customers

- Browse fruit listings and view detailed information including price, description, and image
- Mark fruit listings as favourite that show up in their favourites page
- Add fruit to their carts
- Click more info to view a popup that shows a second functional add to cart button and email seller button
- Contact the seller via an email form
- Filter fruit by price and date listed

### Admin

- Post new listings of fruit
- Remove listings of fruit
- Mark fruit as sold two ways: the main page and the more information popup
- Receive emails sent by customers

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
