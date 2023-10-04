function calculateCartQuantityAndPrint() {
  // obtener el elemento del dom
  const cartButtonEl = document.querySelector(".header__button");

  // calcular los productos que hay dentro del carrito
  let totalItems = 0;

  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];

    totalItems = totalItems + element.quantity;
  }

  //imprimirlo
  cartButtonEl.innerHTML = `Cart ${totalItems}`;
}

function printProducts() {
  const principalPageEl = document.querySelector(".products");

  inventory.forEach((currentProduct) => {
    const productEl = document.createElement("li");
    productEl.classList.add("product");

    principalPageEl.appendChild(productEl);

    const productimgEl = document.createElement("img");
    productimgEl.classList.add("product__img");
    productimgEl.src = currentProduct.image;

    productEl.appendChild(productimgEl);

    const productBrandEl = document.createElement("p");
    productBrandEl.innerHTML = currentProduct.brand;

    productEl.appendChild(productBrandEl);

    const productNameEl = document.createElement("p");
    productNameEl.classList.add("product__name");
    productNameEl.innerHTML = currentProduct.name;

    productEl.appendChild(productNameEl);

    const productTypeEl = document.createElement("p");
    productTypeEl.innerHTML = currentProduct.type;

    productEl.appendChild(productTypeEl);

    const productPriceEl = document.createElement("p");
    productPriceEl.innerHTML = `${currentProduct.price} €`;

    productEl.appendChild(productPriceEl);

    const productButtonEl = document.createElement("button");
    productButtonEl.classList.add("product__button");
    productButtonEl.innerHTML = "Add Cart";
    productButtonEl.addEventListener("click", (event) => {
      const productFound = cart.find(
        (cartElement) => cartElement.name === currentProduct.name
      );

      if (productFound === undefined) {
        cart.push({
          name: currentProduct.name,
          brand: currentProduct.brand,
          type: currentProduct.type,
          quantity: 1,
          price: currentProduct.price,
          image: currentProduct.image,
        });
      } else {
        productFound.quantity = productFound.quantity + 1;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      calculateCartQuantityAndPrint();
    });

    productEl.appendChild(productButtonEl);
  });
}

printProducts();
calculateCartQuantityAndPrint();
