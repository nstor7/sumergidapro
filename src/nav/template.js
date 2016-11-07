import yo from 'yo-yo'
import header from '../header'

var nav = yo`
<nav id="nav">
 <ul>
  <li><a href="#">Registrate</a></li>
  <li><a href="#">pedazo</a></li>
  <li><a href="#">deloco</a></li>
 </ul>
 <a href="">
  <i class="fa fa-bars" aria-hidden="true"></i>
 </a>
</nav>
`
module.exports = header(nav)