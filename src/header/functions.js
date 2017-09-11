var navegacion = function(){
 var nav = document.getElementById('nav')
 nav.classList.toggle('hidden')
}

var scrollFunction = function(){
 if(window.innerWidth > 900) var altura = window.innerWidth * 0.23
 else var altura = window.innerWidth * 0.66
  
 var header = document.getElementById('header')
if(window.scrollY > altura){
 header.classList.add('headerVisible')
}if(window.scrollY < altura){
 header.classList.remove('headerVisible')
}
}

var noScrollFunction = function(ctx, next){
removeEventListener('scroll', scrollFunction)
var header = document.getElementById('header')
header.classList.add('headerVisible')
next()
}

module.exports = {navegacion, scrollFunction, noScrollFunction}
