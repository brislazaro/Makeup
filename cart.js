const cartList = document.querySelector(".cart__list");
function printCart() {
  cartList.innerHTML = "";

  cart.forEach((currentProduct) => {
    const cardEl = document.createElement("li");
    cardEl.classList.add("cart__card");

    cartList.appendChild(cardEl);

    const cartImgEl = document.createElement("img");
    cartImgEl.classList.add("cart__img");
    cartImgEl.src = currentProduct.image;
    cartImgEl.alt = "productName";

    cardEl.appendChild(cartImgEl);

    const cardInfoEl = document.createElement("div");
    cardInfoEl.classList.add("cart__info");

    cardEl.appendChild(cardInfoEl);

    const nameEl = document.createElement("p");
    nameEl.innerHTML = currentProduct.name;

    cardInfoEl.appendChild(nameEl);

    const priceEl = document.createElement("p");
    priceEl.innerHTML = currentProduct.price;

    cardInfoEl.appendChild(priceEl);

    const flexEl = document.createElement("div");
    flexEl.classList.add("flex-1");

    cardInfoEl.appendChild(flexEl);

    const cartSelectorEl = document.createElement("div");
    cartSelectorEl.classList.add("cart__button");

    cardInfoEl.appendChild(cartSelectorEl);

    const numberSelector = document.createElement("select");
    numberSelector.classList.add("cart__select");
    numberSelector.name = "quantity";
    numberSelector.addEventListener("change", (event) => {
      currentProduct.quantity = Number(event.target.value);

      localStorage.setItem("cart", JSON.stringify(cart));

      if (currentProduct.quantity === 0) {
        cart = cart.filter((cartItem) => cartItem.name !== currentProduct.name);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      printCart();

      calculatePrice();
    });

    cartSelectorEl.appendChild(numberSelector);

    for (let i = 0; i <= 15; i++) {
      const optionEl = document.createElement("option");
      optionEl.value = i;
      optionEl.innerHTML = i;

      numberSelector.appendChild(optionEl);
    }
    numberSelector.selectedIndex = currentProduct.quantity;

    const delateEl = document.createElement("button");
    delateEl.classList.add("button");
    delateEl.innerHTML = "Delate";

    delateEl.addEventListener("click", (event) => {
      cart = cart.filter((cartItem) => cartItem.name !== currentProduct.name);

      localStorage.setItem("cart", JSON.stringify(cart));
      printCart();
      calculatePrice();
    });

    cartSelectorEl.appendChild(delateEl);
  });
}

function calculatePrice() {
  const price = document.querySelector(".buy__total");

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];

    totalPrice = totalPrice + element.quantity * element.price;
  }

  price.innerHTML = `${totalPrice} Euros`;
}

printCart();
calculatePrice();
