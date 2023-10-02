const inventory = [
  {
    brand: "Armani",
    name: "Lip de labios Mate",
    type: "Labios",
    price: 38.99,
    image: "./imagenes/labial.avif",
  },
  {
    brand: "Dior",
    name: "Rubor luminoso natural",
    type: "Labios",
    price: 46.99,
    image: "./imagenes/rubor.avif",
  },
  {
    brand: "Rare Beauty",
    name: "Duo de balsamo labial",
    type: "Labios",
    price: 31.99,
    image: "./imagenes/gloss.avif",
  },
  {
    brand: "Benefit Cosmetics",
    name: "Kit maquillaje y cuidado de poros",
    type: "Cara",
    price: 122.99,
    image: "./imagenes/kit.avif",
  },
  {
    brand: "La mer",
    name: "Lip Volumizer",
    type: "Labios",
    price: 86.99,
    image: "./imagenes/gloss2.avif",
  },
  {
    brand: "Dior",
    name: "Esmalte de uñas efecto gel",
    type: "Uñas",
    price: 32.99,
    image: "./imagenes/esmalte.avif",
  },
];

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

    productEl.appendChild(productButtonEl);
  });
}

printProducts();
