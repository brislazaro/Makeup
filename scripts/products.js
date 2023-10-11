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
  const userType = localStorage.getItem("user");
  const principalPageEl = document.querySelector(".products");

  inventory.forEach((currentProduct) => {
    const productEl = document.createElement("li");
    productEl.classList.add("product");

    principalPageEl.appendChild(productEl);

    const productimgEl = document.createElement("img");
    productimgEl.classList.add("product__img");
    productimgEl.src = currentProduct.image;
    productimgEl.alt = currentProduct.name;

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
    productTypeEl.classList.add("type__default");

    if (currentProduct.type === "Labios") {
      productTypeEl.classList.add("type__labios");
    }

    if (currentProduct.type === "Cara") {
      productTypeEl.classList.add("type__cara");
    }

    if (currentProduct.type === "Uñas") {
      productTypeEl.classList.add("type__uñas");
    }

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
        const newProductInCart = {
          name: currentProduct.name,
          brand: currentProduct.brand,
          type: currentProduct.type,
          quantity: 1,
          price: currentProduct.price,
          image: currentProduct.image,
        };

        addProductToCart(newProductInCart);
      } else {
        addQuantityToCartProduct(productFound);
      }

      if (productFound.quantity === 15) {
        productButtonEl.classList.add("product__button--disabled");
        productButtonEl.disabled = true;
      }

      calculateCartQuantityAndPrint();
    });

    const productFoundCart = cart.find(
      (element) => element.name === currentProduct.name
    );

    if (productFoundCart?.quantity === 15) {
      productButtonEl.classList.add("product__button--disabled");
      productButtonEl.disabled = true;
    }

    productEl.appendChild(productButtonEl);

    if (userType === "admin") {
      const deleteButtonEl = document.createElement("button");
      deleteButtonEl.innerHTML = "Delete";

      productEl.appendChild(deleteButtonEl);
    }
  });
}

printProducts();
calculateCartQuantityAndPrint();
