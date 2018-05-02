var ejs = require('ejs'),
 usuarios = ['penelope', 'muttley', 'medinho']
// Apenas um template
ejs.render('<?= usuarios.join(" | "); ?>', {usuarios: usuarios},
{delimiter: '?'})
// Globalmente
ejs.delimiter = '$'
var html = ejs.render('<$= usuarios.join(" | "); $>', {usuarios:
usuarios})
console.log( html )