(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.prueba_de_bloque = function() {
    	alert(" Hola ")
    }

    ext.entrada = function() {
    	promptvalue = prompt(".","entrada");
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [' ', 'prueba de bloque', 'prueba_de_bloque']
        [' ', 'entrada', 'entrada']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});