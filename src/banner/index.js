import page from 'page'
import empty from 'empty-element'
import template from './template'


page('/banner', function(ctx, next){ 
 var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
