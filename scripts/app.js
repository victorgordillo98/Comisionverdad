const iconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) => {
  //Alternamos estilos para el menu y body
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");

  // Alternamos su atributo 'src' para el icono del menú
  const rutaActual = e.target.getAttribute("src");

  if (rutaActual === "../components/menu.png") {
    e.target.setAttribute("src", "../components/menu.png");
  } else {
    e.target.setAttribute("src", "../components/menu2.png");
  }
});
