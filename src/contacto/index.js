import page from 'page'
import empty from 'empty-element'
import header from '../header'
import template from './template'
import ctrl from '../header/functions'

page('/contacto', header, ctrl.noScrollFunction, function(ctx, next){
 var main = document.getElementById('main-container')
 empty(main).appendChild(template)
})
