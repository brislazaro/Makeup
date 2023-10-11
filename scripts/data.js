let inventory = [];

function loadInventory() {
  const defaultInventory = [
    {
      brand: "Armani",
      name: "Lip de labios Mate",
      type: "Labios",
      price: 38.99,
      image: "../imagenes/labial.avif",
    },
    {
      brand: "Dior",
      name: "Rubor luminoso natural",
      type: "Labios",
      price: 46.99,
      image: "../imagenes/rubor.avif",
    },
    {
      brand: "Rare Beauty",
      name: "Duo de balsamo labial",
      type: "Labios",
      price: 31.99,
      image: "../imagenes/gloss.avif",
    },
    {
      brand: "Benefit Cosmetics",
      name: "Kit maquillaje y cuidado de poros",
      type: "Cara",
      price: 122.99,
      image: "../imagenes/kit.avif",
    },
    {
      brand: "La mer",
      name: "Lip Volumizer",
      type: "Labios",
      price: 86.99,
      image: "../imagenes/gloss2.avif",
    },
    {
      brand: "Dior",
      name: "Esmalte de uñas efecto gel",
      type: "Uñas",
      price: 32.99,
      image: "../imagenes/esmalte.avif",
    },
  ];

  const localStorageInventory = JSON.parse(localStorage.getItem("inventory"));

  if (localStorageInventory) {
    inventory = localStorageInventory;
  } else {
    inventory = defaultInventory;
  }
}

loadInventory();

function addProductToInventory(product) {
  inventory.push(product);

  localStorage.setItem("inventory", JSON.stringify(inventory));
}

let cart = [];

function loadCart() {
  const persistedCart = JSON.parse(localStorage.getItem("cart"));

  if (persistedCart) {
    cart = persistedCart;
  }
}

loadCart();

function addProductToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addQuantityToCartProduct(product) {
  product.quantity = product.quantity + 1;
  localStorage.setItem("cart", JSON.stringify(cart));
}
