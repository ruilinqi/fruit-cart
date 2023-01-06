$(document).ready(function() {
  // $(".removeProductBtn").on("click",removeProduct);
});

function removeProduct(fruit_id) {
  productToRemove = $(".fruit_id-"+fruit_id)[0];

  productToRemove.remove();

  removeProductFromDb(fruit_id);

  // console.log($(".fruit_id-"+fruit_id));
  // console.log(fruit_id);
}

function removeProductFromDb(fruit_id) {
  console.log("REMOVE FRUIT DB FUNCTION: ",fruit_id);
  fetch("/route-remove-product", {
    method: "POST",
    body: JSON.stringify({id: fruit_id}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((data) => console.log(data));
}
