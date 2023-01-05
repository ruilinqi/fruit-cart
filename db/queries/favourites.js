const db = require('../connection');

const getFavourites = (user_id) => {
  return db.query(`SELECT fruits.id, fruits.name as fruit_name, fruits.price, users.id, users.name as user_name, users.email FROM favourites
  JOIN users ON users.id = favourites.user_id
  JOIN fruits ON fruits.id = favourites.fruit_id
  WHERE users.id = $1`, [user_id])
    .then(data => {
      return data.rows;
    });
};


// const getAllListings = (user_id) => {
//   const listingsQuery = pool.query(`SELECT fruits.*, users.name as seller, users.email, users.phone FROM fruits
//   JOIN users ON fruits.owner_id = users.id`)
//   const favouritesQuery =  pool.query('SELECT * FROM favourites WHERE user_id = $1', [user_id])
//   return Promise.all([listingsQuery, favouritesQuery])
//   .then(res => {
//     const listings = res[0].rows;
//     const favourites = res[1].rows;
//     for (const favourite of favourites) {
//       const foundListing = listings.find( listing => {
//       return listing.id === favourite.fruit_id;
//       })
//       foundListing.isFavourite = true;
//     }
//     return listings;
//   })
//   .catch((error => {
//     console.log("Error message", error)
//   }));
// };
module.exports = { getFavourites };
