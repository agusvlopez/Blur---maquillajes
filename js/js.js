const link = document.querySelector('.link');
link.addEventListener("click",activarModal);
const link2 = document.querySelector('.link2');
link2.addEventListener("click",activarModal);
const link3 = document.querySelector('.link3');
link3.addEventListener("click",activarModal);
const link4 = document.querySelector('.link4');
link4.addEventListener("click",activarModal );
const link5 = document.querySelector('.link5');
link5.addEventListener("click",activarModal);
const link6 = document.querySelector('.link6');
link6.addEventListener("click",activarModal);

const cerrar = document.querySelector('#modal-detalles button');
cerrar.addEventListener("click", cerrarModal);

const modal = document.querySelector(".modal");

function activarModal (){
    
    modal.style.display = "block"
    
}
function cerrarModal () {
    modal.style.display = "none";
}