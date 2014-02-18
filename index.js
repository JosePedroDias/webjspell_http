var jsdom = require('jsdom');
var request = require('request');



var URL = 'http://natura.di.uminho.pt/webjspell/jsol.pl';

var strip = function(t) {
    return t.replace(/(<([^>]+)>)/ig, '');
};

var stripLi = function(liEl) {
    var t = strip(liEl.innerHTML);
    var p = t.split(':');
    return [
        p[0].toLowerCase().trim(),
        p[1].toLowerCase().trim()
    ];
};



var webjspell_http = function(phrase, cb) {

    var words = phrase.split(' ');
    var o = {};

    request({url:URL, method:'POST', form: {words:phrase, dics:'port'}}, function(err, req, body) {

        body = body.substring(body.indexOf('<html'));

        jsdom.env(
            body,
            [],
            function(err, window) {
                if (err) {
                    return cb(err);
                }

                var doc = window.document;
                var palavraEls = doc.querySelectorAll('.blocoPalavra');
                palavraEls = Array.prototype.slice.call(palavraEls);
                palavraEls.forEach(function(palavraEl, wordIndex) {
                    var word = words[wordIndex];
                    var bag = {};
                    var lemaEls = palavraEl.querySelectorAll('.lema');
                    lemaEls = Array.prototype.slice.call(lemaEls);
                    lemaEls.forEach(function(lemaEl) {
                        var liEls;

                        var morfEl = lemaEl.querySelector('.morfInfo');
                        if (morfEl) {
                            var mBag = {};
                            liEls = morfEl.querySelectorAll('li');
                            liEls = Array.prototype.slice.call(liEls);
                            liEls.forEach(function(liEl) {
                                var p = stripLi(liEl);
                                mBag[p[0]] = p[1];
                            });
                            bag.morf = mBag;
                        }

                        var sinEl = lemaEl.querySelector('.sinInfo');
                        if (sinEl) {
                            var liEl = sinEl.querySelector('li');
                            if (liEl) {
                                var p = stripLi(liEl);
                                bag.sin = p[1].split(' ; ');
                            }
                        }

                        var defEl = lemaEl.querySelector('.defInfo');
                        if (defEl) {
                            var dBag = [];
                            liEls = defEl.querySelectorAll('li');
                            liEls = Array.prototype.slice.call(liEls);
                            liEls.forEach(function(liEl) {
                                liEl.removeChild( liEl.firstChild );
                                var t = strip(liEl.innerHTML);
                                //if (t.length > 80) { t = t.substring(0, 80-3) + '...'; }
                                dBag.push(t);
                            });
                            if (dBag.length > 0) {
                                bag.def = dBag;
                            }
                        }
                    });
                    o[word] = bag;
                });

                cb(null, o);
            }
        );
        
    });

};



module.exports = webjspell_http;
