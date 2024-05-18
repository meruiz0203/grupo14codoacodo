// obtiene dia de la semana del 0-6 (0-6, donde 0 representa el domingo)
const diaSemana = new Date().getDay();

let contenedorImagenes
let url
let imgProductosContainer = document.getElementById("imgProductosContainer");
let imgIndexContainer = document.getElementById("imgIndexContainer");

if (imgProductosContainer) {
  contenedorImagenes = imgProductosContainer
  url = '../img/'
  
} else {
  contenedorImagenes = imgIndexContainer
  url = './src/img/'
}

// Crear la imagen y establecer el atributo src y alt
let imagen20 = document.createElement("img");
imagen20.className = "promo1";
imagen20.src = url + "20.png";
imagen20.alt = "promo 20%";

// Crear la imagen y establecer el atributo src y alt
let imagen40 = document.createElement("img");
imagen40.className = "promo2";
imagen40.src = url + "40.png";
imagen40.alt = "promo 40%";

// Según el día de la semana, asigna la imagen con el descuento a la etiqueta div correspondiente
switch (diaSemana) {
  case 0: // Domingo
    contenedorImagenes.querySelector("#pasta").appendChild(imagen20);
    contenedorImagenes.querySelector("#cepillo").appendChild(imagen40);
    break;
  case 1: // Lunes
    contenedorImagenes.querySelector("#bucal").appendChild(imagen20);
    contenedorImagenes.querySelector("#intimo").appendChild(imagen40);
    break;
  case 2: // Martes
    contenedorImagenes.querySelector("#shampoo").appendChild(imagen20);
    contenedorImagenes.querySelector("#leche").appendChild(imagen40);  
    break;
  case 3: // Miércoles
    contenedorImagenes.querySelector("#toallitas").appendChild(imagen20);
    contenedorImagenes.querySelector("#facial").appendChild(imagen40);
    break;
  case 4: // Jueves
     contenedorImagenes.querySelector("#pasta2").appendChild(imagen40);
     contenedorImagenes.querySelector("#intimo2").appendChild(imagen20);
    break;
  case 5: // Viernes
    contenedorImagenes.querySelector("#acondicionador").appendChild(imagen20);
    contenedorImagenes.querySelector("#pasta").appendChild(imagen40);
    break;
  case 6: // Sábado
    contenedorImagenes.querySelector("#ojos").appendChild(imagen20);
    contenedorImagenes.querySelector("#pasta").appendChild(imagen40);
    break;
  default:
    break;
}