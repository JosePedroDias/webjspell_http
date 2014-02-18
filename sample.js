//var webjspell_http = require('webjspell_http');
var webjspell_http = require('./index');

var e1 = 'talvez faça falta';
var e2 = 'um grande passo para a humanidade';

webjspell_http(e2, function(err, o) {
    //console.log(err, o);
    console.log( JSON.stringify(o, null, '  ') );
});
