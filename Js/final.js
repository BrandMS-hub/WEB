//menu dispositivos
var   btnMenuOpen = document.getElementById("btnMenu"),
      btnMenuClose = document.getElementById("btnMenuClose"),
      menuResponsive = document.getElementById("menu"),
      enlaces = document.getElementById("enlaces");

btnMenuOpen.addEventListener("click", function() {
      menuResponsive.classList.add("active");

});
btnMenuClose.addEventListener("click", function() {
      menuResponsive.classList.remove("active");

});
enlaces.addEventListener("click", function() {
      menuResponsive.style.transitionDelay = "0.6s";
      menuResponsive.classList.remove("active");
});


