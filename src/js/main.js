/**
 * 入口JS
 *
 */

require.config({
    baseUrl: 'src/js',
    paths: {
        'jquery': 'jquery-1.10.2',
        //'fpi': 'app/fpi/fpi',
        'app': 'app'//,
    }

});



require(['app/layout/Layout'], function(Layout){
    var lay = new Layout();
    lay.init();
    $(window).resize(function() {
        lay.autoHeight();
    });
});

//artDialog
require(['app/artDialog/src/dialog-plus']);