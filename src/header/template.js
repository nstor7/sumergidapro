import yo from 'yo-yo'
import ctrl from './functions'

module.exports = yo`
<header id="header">
 <a class="logo"></a>
 <nav id="nav" class="nav hidden">
  <ul>
   <li><a onclick=${ctrl.navegacion} href="/">Inicio</a></li>
   <li><a onclick=${ctrl.navegacion} href="/musica">Música</a></li>
   <li><a onclick=${ctrl.navegacion} href="/contacto">Contacto</a></li>
  </ul>
 </nav>
 <a href="#" class="navButton" onclick=${ctrl.navegacion}>
   <i class="fa fa-bars" aria-hidden="true"></i>
 </a>
</header>`

  //  <li><a onclick=${ctrl.navegacion} href="/audiovisuales">AudioVisuales</a></li>
  //  <li><a onclick=${ctrl.navegacion} href="/blog">Blog</a></li>