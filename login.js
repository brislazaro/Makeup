const users = [
  {
    name: "brisa",
    type: "admin",
  },
  {
    name: "sarai",
    type: "client",
  },
  {
    name: "max",
    type: "client",
  },
  {
    name: "gerard",
    type: "admin",
  },
];

const userNameEl = document.querySelector(".container__input");
const cbEl = document.querySelector("#terms-checkbox");

function entry() {
  if (!cbEl.checked) {
    alert("Tienes que aceptar los terminos y condiciones");
    return;
  }

  const user = userNameEl.value;

  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];

    if (currentUser.name === user && currentUser.type === "admin") {
      window.open("admin.html", "_self");
      return;
    }

    if (currentUser.name === user && currentUser.type === "client") {
      window.open("products.html", "_self");
      return;
    }
  }

  alert("Los datos no son correctos");
}

const loginInputEl = document.querySelector(".container__input");
loginInputEl.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    entry();
  }
});
