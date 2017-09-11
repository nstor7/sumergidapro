import yo from 'yo-yo'
module.exports = function(produccion){
 var el = yo`
 <a href=${produccion.url} class="tarjetita">
  <div class="tarjetitaElemento imagen" id="imagenAudio" target="_blank" style="background: url(${produccion.miniatura}); background-size: cover;">

  </div>
  <div class="tarjetitaElemento info naranja">
   <div class="infoTexto">
    <h3>${produccion.titulo}</h3>
    <h2>${produccion.autor}</h2>
    <p>${produccion.descripcion}</p>
    <div class="proximo verde ${produccion.proximo}">
     <h5>Proximamente</h5>
    </div>
   </div>
  </div>
 </a>
 `
 return el  
}