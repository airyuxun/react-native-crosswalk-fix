/**
 * @providesModule WebViewAndroid
 */
'use strict';
import React, { Component ,PropTypes} from 'react';
var ReactNative = require('react-native');
var { View,requireNativeComponent } = ReactNative;
// var RCTUIManager = React.NativeModules.UIManager;

var WEBVIEW_REF = 'androidWebView';

class WebViewAndroid extends Component{
  static propTypes={
    url: PropTypes.string,
    baseUrl: PropTypes.string,
    html: PropTypes.string,
    htmlCharset: PropTypes.string,
    userAgent: PropTypes.string,
    injectedJavaScript: PropTypes.string,
    disablePlugins: PropTypes.bool,
    disableCookies: PropTypes.bool,
    javaScriptEnabled: PropTypes.bool,
    geolocationEnabled: PropTypes.bool,
    builtInZoomControls: PropTypes.bool,
    onNavigationStateChange: PropTypes.func,
    ...View.propTypes
  }
  _onNavigationStateChange(event) {
  }
  goBack() {
  }
  goForward() {
  }
  reload() {
  }
  render() {
    return <RNWebViewAndroid  {...this.props} onNavigationStateChange={this._onNavigationStateChange} />;
  }
  _getWebViewHandle() {
    return React.findNodeHandle(this.refs[WEBVIEW_REF]);
  }
}

var RNWebViewAndroid = requireNativeComponent('RNWebViewAndroid',WebViewAndroid);

module.exports = WebViewAndroid;
