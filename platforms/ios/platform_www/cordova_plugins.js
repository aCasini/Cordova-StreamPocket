cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-spinnerdialog.SpinnerDialog",
        "file": "plugins/cordova-plugin-spinnerdialog/www/spinner.js",
        "pluginId": "cordova-plugin-spinnerdialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-tabrisjs-card.TabrisJSCards",
        "file": "plugins/cordova-plugin-tabrisjs-card/www/tabrisjscard.js",
        "pluginId": "cordova-plugin-tabrisjs-card",
        "clobbers": [
            "window.tabrisJsPlugins.cards"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "com.hutchind.cordova.plugins.streamingmedia.StreamingMedia",
        "file": "plugins/com.hutchind.cordova.plugins.streamingmedia/www/StreamingMedia.js",
        "pluginId": "com.hutchind.cordova.plugins.streamingmedia",
        "clobbers": [
            "streamingMedia"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-spinnerdialog": "1.3.2",
    "cordova-plugin-tabrisjs-card": "1.0.2",
    "cordova-plugin-statusbar": "2.2.1",
    "com.hutchind.cordova.plugins.streamingmedia": "0.1.4"
};
// BOTTOM OF METADATA
});