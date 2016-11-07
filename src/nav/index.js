import yo from 'yo-yo'
import empty from 'empty-element'
import nav from './template'

module.exports = function header (ctx, next){
  var container = document.getElementById('header');
  empty(container).appendChild(nav);
 next();
}