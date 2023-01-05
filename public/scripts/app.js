// Client facing scripts here
$(() => {
  console.log("Test on app.js");
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
});
