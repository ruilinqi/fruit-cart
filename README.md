# Fruit Cart

Fruit Cart is a bright ecommerce app where customers can browse, favourite, and add delicious fruits to their cart. Admins can mark fruits as sold and choose which fruits to sell

## Final Product

### Customer View
Main Page of Fruits Loading

!["Screenshot of main page of fruit loading"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/customer_card_loading.png)

Popup Window of Active Fruits

!["Screenshot of active popup window"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/customer_popup_window_active.png)

Popup Window of Sold Out Fruits

!["Screenshot of popup window of sold fruits"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/customer_popup_window_sold.png)

Favourites Page

!["Screenshot of favourite page"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/favourites.png)

Shopping Cart Page

!["Screenshot of shopping cart page"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/shopping_cart.png)

Email Send Form To Seller

!["Screenshot of email send form"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/customer_email_send_form.png)

### Admin View
Main Page of Fruits Loading

!["Screenshot of main page of fruit loading"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/seller_card_loading.png)

Post New Fruits Page

!["Screenshot of post new fruits page"](https://github.com/ruilinqi/fruit-cart/blob/master/public/docs/seller_post_new_item.png)


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
