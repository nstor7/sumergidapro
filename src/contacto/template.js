import yo from 'yo-yo'
import social from '../componentes/social'

module.exports = yo`
 <div class="main">
  <div class="listaTitulo verde">
   <h1>Conctáctenos</h1>
  </div>
  <article class="tarjeta alrevez">
   <div class="c3 imagen" id="imagenAudio"></div>
   <div class="c2 info naranja">
    <div class="infoTexto contacto">
     <h5>Email:</h5>
     <h3>info@sumergidapro.com</h3>
     <h5>teléfono:</h5>
     <h3>6643 3698</h3>
     <h5>Síguenos en:</h5> 
     ${social}
    </div>
   </div>
  </article>
 </div>
`
// <form action="/send" method="post">
//       <input type="text" name="nombre" placeholder="Nombre">
//       <input type="text" name="email" placeholder="Email">
//       <input type="text" name="asunto" placeholder="Asunto">
//       <textarea name="mensaje" rows="10" cols="30" placeholder="Envianos Tu Mensaje"></textarea>
//       <input class="boton verde" type="submit" name="submit" value="Enviar">
//      </form>