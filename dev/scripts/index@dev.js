
;(function(__context){
    var module = {
        id : "e686c4e396f44b0288f5a8203f0c650e" ,
        filename : "say.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var Hllo = {
	sayhello:function(msg){
		console.log(msg)
	}
}

module.exports = Hllo;

    })( module.exports , module , __context );
    __context.____MODULES[ "e686c4e396f44b0288f5a8203f0c650e" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "ee7ae29b24552fb77841f9e82034e279" ,
        filename : "say2.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var Hello2 = {
	sayhello:function(msg){
		console.log(msg)
	}
}

module.exports = Hello2;

    })( module.exports , module , __context );
    __context.____MODULES[ "ee7ae29b24552fb77841f9e82034e279" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "fe63af6d0085ac320ebc7a98a23aa830" ,
        filename : "index.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var hello = __context.____MODULES['e686c4e396f44b0288f5a8203f0c650e'];
var hello2 = __context.____MODULES['ee7ae29b24552fb77841f9e82034e279'];
hello.sayhello('ab')
hello2.sayhello('cd')


    })( module.exports , module , __context );
    __context.____MODULES[ "fe63af6d0085ac320ebc7a98a23aa830" ] = module.exports;
})(this);
