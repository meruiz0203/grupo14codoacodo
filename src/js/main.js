// obtiene dia de la semana del 0-6 (0-6, donde 0 representa el domingo)
const diaSemana = new Date().getDay();

let contenedorImagenes = document.querySelector(".contenedorImagenes");

// Crear la imagen y establecer el atributo src y alt
let imagen20 = document.createElement("img");
imagen20.className = "promo1";
imagen20.src = "./src/img/20.png";
imagen20.alt = "promo 20%";

// Crear la imagen y establecer el atributo src y alt
let imagen40 = document.createElement("img");
imagen40.className = "promo2";
imagen40.src = "./src/img/40.png";
imagen40.alt = "promo 40%";

// Según el día de la semana, asignar la imagen de promo al div correspondiente
switch (diaSemana) {
  case 0: // Domingo
    contenedorImagenes.querySelector("#cepillo").appendChild(imagen40);
    break;
  case 1: // Lunes
    contenedorImagenes.querySelector("#intimo").appendChild(imagen20);
    break;
  case 2: // Martes
    break;
  case 3: // Miércoles
    contenedorImagenes.querySelector("#leche").appendChild(imagen40);
    break;
  case 4: // Jueves
    break;
  case 5: // Viernes
    contenedorImagenes.querySelector("#bucal").appendChild(imagen20);
    break;
  case 6: // Sábado
    break;
  default:
    break;
}