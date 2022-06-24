// Button Light/Dark

night_color = false

function commonChangeColor() {
  if (night_color == false) {
    document.body.style.backgroundColor = "#CC6633";
    document.getElementById('headercolor').style.backgroundColor = "#333333";
    document.getElementById('footercolor').style.backgroundColor = "#333333";
  } else {
    document.body.style.backgroundColor = "#CC6633";
    document.getElementById('headercolor').style.backgroundColor = "#FFFFCC";
    document.getElementById('footercolor').style.backgroundColor = "#FFFFCC";
  }
}

function mainChangeColor() {
  commonChangeColor();
  if (night_color == false) {
    night_color = true;
    document.getElementById('navcolor').style.backgroundColor = "#333333";
    document.getElementById('sectioncolor').style.backgroundColor = "#333333";
    document.getElementById('asidecolor').style.backgroundColor = "#333333";
    document.getElementById('cardcolor1').style.backgroundColor = "#333333";
    document.getElementById('cardcolor2').style.backgroundColor = "#333333";
    document.getElementById('cardcolor3').style.backgroundColor = "#333333";
    document.getElementById('cardcolor4').style.backgroundColor = "#333333";
  } else {
    night_color = false;
    document.getElementById('navcolor').style.backgroundColor = "#FFFFCC";
    document.getElementById('sectioncolor').style.backgroundColor = "#FFFFCC";
    document.getElementById('asidecolor').style.backgroundColor = "#FFFFCC";
    document.getElementById('cardcolor1').style.backgroundColor = "#FFFFCC";
    document.getElementById('cardcolor2').style.backgroundColor = "#FFFFCC";
    document.getElementById('cardcolor3').style.backgroundColor = "#FFFFCC";
    document.getElementById('cardcolor4').style.backgroundColor = "#FFFFCC";
  }
}

function contactChangeColor() {
  commonChangeColor();
  if (night_color == false) {
    night_color = true;
    document.getElementById('formcolor').style.backgroundColor = "#333333";
  } else {
    night_color = false;
    document.getElementById('formcolor').style.backgroundColor = "#FFFFCC";
  }
}

// Button site info

function info() {
  alert("Autoría: Mare - Contacto: mare.developer@gmail.com")
}

// COLORS
// Light: #CC6633 terracota fondo, #FFFFCC amarillo-pálido secciones, #FF9933 anaranjado-amarillo botones, #993300 marrón bordes, #FFCC66 ocre imágenes
// Dark: #CC6633 terracota fondo, #333333 gris-obscuro secciones, #FF9933 anaranjado-amarillo botones, #993300 marrón bordes, #FFCC66 ocre imágenes
