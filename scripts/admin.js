const cardNewProduct = document.querySelector(".new__products");
const productNameEl = document.querySelector(".new__products--name");
const productTypeEl = document.querySelector(".new__products--type");
const productBrandEl = document.querySelector(".new__products--brand");
const productPriceEl = document.querySelector(".new__products--price");
const productImgEl = document.querySelector(".new__products--img");

const buttonEl = document.createElement("button");
buttonEl.classList.add("newproducts__button");
buttonEl.innerHTML = "Añadir Producto";
buttonEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (productTypeEl.value === "") {
    alert("No introduciste el tipo de Producto");
    return;
  }

  if (productBrandEl.value === "") {
    alert("No introduciste la marca del Producto");
    return;
  }

  if (productImgEl.value === "") {
    alert("No introduciste una imagen para el Producto");
    return;
  }

  if (productNameEl.value === "") {
    alert("No introduciste un nombre para el Producto");
    return;
  }
  if (productPriceEl.value === "") {
    alert("No introduciste el precio del Producto");
    return;
  }

  inventory.forEach((product) => {
    if (product.name.value === product.name) {
      alert("El nombre no es valido");
      return;
    }
  });

  const parsedPrice = Number(productPriceEl.value);
  if (isNaN(parsedPrice)) {
    alert("El precio no es valido");
    return;
  }

  const newProduct = {
    brand: productBrandEl.value,
    name: productNameEl.value,
    type: productTypeEl.value,
    price: productPriceEl.value,
    image: productImgEl.value,
  };

  addProductToInventory(newProduct);
  alert("Producto añadido correctamente");
});

cardNewProduct.appendChild(buttonEl);
