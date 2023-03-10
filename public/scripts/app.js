// Client facing scripts here
$(() => {
  console.log("Test on app.js");

  // Click on the Favourite button
  $(".fav_btn").click((event) => {
    console.log("favourite click");
    const fruitId = $(event.target).attr('data-fruitId')
    let url = `/api/users/${fruitId}/favourite`;
    if ($(event.target).attr("data-id") === "minus") {
      url = `/favourites/${fruitId}/delete`;
    }
    $.post(url)
    .then((result) => {
      if ($(event.target).attr("data-id") === "minus") {
        $(event.target).removeClass("fa-heart-circle-minus").addClass("fa-heart-circle-plus");
        $(event.target).attr("data-id", "plus");
      } else {
        $(event.target).removeClass("fa-heart-circle-plus").addClass("fa-heart-circle-minus");
        $(event.target).attr("data-id", "minus");
      }

    })
  });

  // Click on the Add to Cart button
  $(".cart_btn").click((event) => {
    console.log("shopping cart button click");
    const fruitId = $(event.target).attr('data-fruitId')
    let url = `/api/users/${fruitId}/shopping_cart`;

     $.post(url)
    .then((result) => {
      //   $(event.target).removeClass("cart_minus").addClass("cart_plus");
      //   $(event.target).attr("data-id", "plus");

    })
  });

  // Click on the Remove from Cart button
  $(".cart_remove_btn").click((event) => {
    console.log("Remove itme from shopping cart button click");
    const fruitId = $(event.target).attr('data-fruitId')
    let url = `/shopping_cart/${fruitId}/delete`;

     $.post(url)
    .then((result) => {
      location.reload();

    })
  });

  // Click on the RemoveAll from Cart button
  $(".cart_removeall_btn").click((event) => {
    console.log("Remove all items from shopping cart button click");
    //const fruitId = $(event.target).attr('data-fruitId')
    let url = `/shopping_cart/deleteall`;


     $.post(url)
    .then((result) => {
      location.reload();

    })
  });

});

