$(document).ready(function() {
  $(".addToCart").on("click",modalImageMarkSold);
});

function modalImageMarkSold(){
  if ($(this)[0].id == "markSold"){
    let modalImage = $(this).next().find("#modalFruitImage");
    let modalAdd = modalImage.siblings().eq(2).find("#modalAddToCart");
    modalImage[0].classList.add("grayscale");

    modalAdd[0].classList.remove("bg-fruitYellow", "text-fruitBrown");
    modalAdd[0].classList.add("bg-fruitPink", "text-white");
    modalAdd[0].disabled = true;
    modalAdd[0].innerHTML = "SOLD";
  }
}

const markSoldBtns = document.getElementsByClassName("addToCart");

for (let element of markSoldBtns) {
  element.addEventListener("click",function(){markFruitSold(element)});
}

function markFruitSold(element){

  // console.log(element);

  if (element.id == "markSold") {
    fruitImage = element.previousElementSibling.firstElementChild.firstElementChild;
    fruitImage.classList.add("grayscale");

    element.innerHTML = "SOLD";
    element.disabled = true;
    element.classList.add("bg-fruitPink", "text-white");
  }
}

function updateFruitSold(fruit_id) {
  console.log(fruit_id);
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
