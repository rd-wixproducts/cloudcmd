#!/usr/bin/env node

(function(){
    'use strict';
    
    var Info        = require('../package'),
        
        DIR         = '../lib/',
        Util        = require(DIR + 'util'),
        argv        = process.argv,
        length      = argv.length - 1,
        argvLast    = argv[length];
    
    switch (argvLast) {
    default:
        start({});
        break;
    
    case '--test':
        Util.log('Cloud Commander testing mode');
        Util.log('argv: ', argv);
        
        start({
            isTest: true
        });
        break;
    
    case '-v':
        version();
        break;
    
    case '--version':
        version();
        break;
    }
    
    function version() {
        console.log('v' + Info.version);
    }
    
    function start(params) {
        var cloudcmd    = require('../cloudcmd');
        
        cloudcmd.start(params);
    }
    
})();