function saludo(){
      alert("Bienvenido!");
}
// Panel lateral contacto
btn_menu.addEventListener("click", ()=>{
      document.getElementById("panel").classList.toggle("panel-active");
      document.getElementById("btn_menu").classList.toggle("is-active");
})