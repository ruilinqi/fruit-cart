$(document).ready(function() {
  // Event listener for all MARK SOLD buttons (MARK SOLD buttons use the same class as the ADD TO CART buttons).
  $(".addToCart").on("click",modalMarkSold);
  // Same event listeners, but for modal popup buttons.
  $(".cart_btn").on("click",modalMarkSold);
});

// This function cuses jQuery to locate and update the modal image and mark sold button.
// Those elements are then changes in the UI accordingly.
function modalMarkSold(){
  if ($(this)[0].id == "markSold") {
    let modalImage = $(this).next().find("#modalFruitImage");

    let modalAdd = modalImage.siblings().eq(2).find("#modalMarkSold");
    modalImage[0].classList.add("grayscale");

    modalAdd[0].classList.remove("bg-fruitYellow", "text-fruitBrown");
    modalAdd[0].classList.add("bg-fruitPink", "text-white");
    modalAdd[0].disabled = true;
    modalAdd[0].innerHTML = "SOLD";
  }

  if ($(this)[0].id == "modalMarkSold") {
    let modalImage = $(this).parent().siblings().eq(1);
    let modalAdd = modalImage.siblings().eq(2).find("#modalMarkSold");
    modalImage[0].classList.add("grayscale");

    modalAdd[0].classList.remove("bg-fruitYellow", "text-fruitBrown");
    modalAdd[0].classList.add("bg-fruitPink", "text-white");
    modalAdd[0].disabled = true;
    modalAdd[0].innerHTML = "SOLD";

    markFruitSold($(this).parents().eq(4).children().eq(2)[0]);
  }
}


const markSoldBtns = document.getElementsByClassName("addToCart");

for (let element of markSoldBtns) {
  element.addEventListener("click",function(){markFruitSold(element)});
}

function markFruitSold(element){

  // console.log("MARK FRUIT SOLD function, element: ",element);

  if (element.id == "markSold") {
    fruitImage = element.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild;
    fruitImage.classList.add("grayscale");

    element.innerHTML = "SOLD";
    element.disabled = true;
    element.classList.add("bg-fruitPink", "text-white");
  }
}

function updateFruitSold(fruit_id) {
  // console.log(fruit_id);
  fetch("/sold", {
    method: "POST",
    body: JSON.stringify({id: fruit_id}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((data) => console.log(data));
}
