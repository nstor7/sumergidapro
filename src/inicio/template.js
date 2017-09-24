import yo from 'yo-yo'
import banner from './banner'

module.exports = yo`
<main>
  ${banner}
  <article class="tarjeta alrevez">
    <div class="c3 imagen" id="imagenAudio"></div>
    <div class="c2 info naranja">
      <div class="infoTexto">
          <h1>SUMERGIDA</h1>
          <h2>PRODUCCIONES</h2>
          <p>Somos una <b>productora</b> de música y audio-visuales, cuyo objetivo principal es la creación de arte y la producción de piezas que sirvan para difundir el trabajo de artístas, especialmente el realizado en Panamá.</p>
          <p>Nuestro nombre es un homenaje a la <i>"Cathédrale Engloutie"</i> de <b>Claude Debussy</b>, que en español se traduce la <i>"Catedral Sumergida"</i>.</p>
          <p>Creemos en el poder del <b>arte</b> para hacer crecer al ser humano, para generar identidad, para desarrollar la sensibilidad y para entender la historia de nuestra especie.</p>
      </div>
    </div>
  </article>
  <article class="c5 separador" id="inicioConsole">
    <div>
    </div>
  </article>
  <article class="tarjeta">
    <div class="c3 imagen" id="imagenMusica"></div>
    <div class="c2 info verde">
      <div class="infoTexto">
        <h3>SUMERGIDA</h3>
        <h2>MÚSICA</h2>
        <p>Estamos enfocados en la producción musical. Nuestra <b>visión</b> es la de propiciar el desarrollo de grandes músicos, compositores y arreglistas en los que creemos.</p>
        <p>Buscamos llevar, a cada vez más personas, música de <b>excelente</b> calidad, que inspire, emocione y toque su vida. </p>
        <p>También queremos difundir géneros poco conocidos u olvidados, que creemos que son muy valiosos. Desde los grandes <b>maestros</b> de la música erudita hasta las nuevas corrientes de vanguardia.</p>
      </div> 
    </div>
  </article>
  <article class="c5 separador" id="inicioCamaras">
    <div>
    </div>
  </article>
  <article class="tarjeta alrevez">
    <div class="c3 imagen" id="imagenCine"></div>
    <div class="c2 info naranja">
      <div class="infoTexto">
          <h3>SUMERGIDA</h3>
          <h2>AUDIOVISUALES</h2>
          <p>Los géneros audiovisuales son cada vez más relevantes y creemos que es importante generar contenidos para la altísima demanda que trae el mundo digital. </p>
          <p>Es necesario complementar la oferta audiovisual actual, centrada en la velocidad y muchas veces en una impersonal y consumista manera de ver el mundo. Queremos invitarles a <b>disfrutar</b>  del presente y a sensibilizarse ante la belleza de la creación <b>artística</b>.</p>
          <p>La tecnología actual nos dá la oportunidad de trascender fronteras, idiomas, culturas. Buscamos aprovechar al máximo las herramientas que tenemos hoy en día para presentarle nuestra propuesta al mundo.</p>
      </div>
    </div>
  </article>
</main>
`