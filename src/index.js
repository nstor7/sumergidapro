import page from 'page'

page('*', function(ctx, next){
 window.scrollTo(0,0)
 next()
})
require('./inicio')
require('./musica')
require('./contacto')
require('./confirmacion')
require('./error')

page()