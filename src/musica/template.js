import yo from 'yo-yo'
import tarjeta from '../componentes/tarjeta'
import musica from './musicaLista'

module.exports = yo`
<main class="main">
 <div class="listaTitulo verde">
  <h1>sumergida</h1>
  <h2>Música</h2>
 </div>
 <section class="lista">
  ${musica.map(function(produccion){
   return tarjeta(produccion)
  })}
 </section>
</main>
`