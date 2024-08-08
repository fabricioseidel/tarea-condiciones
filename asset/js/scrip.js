function toggleRedBorder(img) {
  img.style.border = img.style.border === "" ? "2px solid red" : "";
}
document.getElementById("imagenAlfajor").addEventListener("click", function () {
  toggleRedBorder(this);
});

const inputs = document.querySelectorAll('.stiker-input input[type="number"]');
const botonVerificar = document.getElementById("boton-verificar");
const mensajitoElement = document.getElementById("mensajito");

botonVerificar.addEventListener("click", () => {
  let suma = 0;
  inputs.forEach((input) => {
    suma += parseInt(input.value);
  });

  if (suma > 10) {
    mensajitoElement.textContent = "llevas demasiados stikers";
  } else {
    mensajitoElement.textContent = `Llevas: ${suma} stikers`;
  }
});

const ingresarButton = document.getElementById("ingresar");
const mensajeElement = document.getElementById("mensaje");

ingresarButton.addEventListener("click", (event) => {
  event.preventDefault();
  const selectValues = [
    document.getElementById("select1").value,
    document.getElementById("select2").value,
    document.getElementById("select3").value,
  ];
  const password = selectValues.join("");
  if (password === "714") {
    mensajeElement.textContent = "password 2 correcto";
  } else if (password === "911") {
    mensajeElement.textContent = "password 1 correcto";
  } else {
    mensajeElement.textContent = "contraseña incorrecta";
  }
});
