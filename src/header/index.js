import yo from 'yo-yo'

module.exports = function header(box){
  var el = yo`
<header>
  <a class="logo"></a>
  ${box}
</header>`

return el
}

