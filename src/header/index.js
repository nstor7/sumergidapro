import empty from 'empty-element'
import template from './template'

module.exports = function(ctx, next){
  var header = document.getElementById('header-container');
  empty(header).appendChild(template);
  next()
}