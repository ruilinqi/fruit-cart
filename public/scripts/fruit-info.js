const markSoldBtns = document.getElementsByClassName("addToCart");

for (let element of markSoldBtns) {
  element.addEventListener("click",function(){markFruitSold(element)});
}

function markFruitSold(element){
  fruitImage = element.previousElementSibling.firstElementChild.firstElementChild;
  console.log(fruitImage);

  fruitImage.classList.add("grayscale");

  element.innerHTML = "SOLD";
  element.disabled = true;
  element.classList.add("bg-fruitPink", "text-white");

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
