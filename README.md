# react-native-webview-crosswalk-android
鉴于react-native-crosswalk-android 不能用了，项目上又急用(虽然不是我的项目)，调了一下放上来

参考：https://github.com/iwater/react-native-crosswalk-android

重复的内容不再粘贴，请参考原内容，目前项目未上传到npm，什么时候上传看心情

以下为简要的使用说明

1. 将项目扔到node_modules中
2. settings.gradle

```
':CrosswalkWebView', ':app'
project(':CrosswalkWebView').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-webview-crosswalk-android')
```

3. build.gradle
```
    compile (name: "xwalk_core_library-17.46.448.10", ext: "aar")     // <--- add this line
    compile project(':CrosswalkWebView')

```
4. app\build.gradle
```
  
allprojects {
    repositories {
        mavenLocal()
        jcenter()
//        jcenter {
//            url "http://dl.bintray.com/mkonicek/maven"
//        }
        maven{
            url "$projectDir/../../node_modules/react-native/android"
        }
        flatDir {          // <--- add this line
            dirs 'libs'    // <--- add this line
        }                  // <--- add this line

    }
}
```

5. Application
```

  @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNWebViewPackage(getActivity()) //activity的问题自己解决
            );
        }
```
6. 将xwalk-command-line 拷贝到主工程assets文件夹下，原因：https://crosswalk-project.org/documentation/about/faq_zh.html 搜索blacklist

7. 举个栗子
```
/**
* crosswalk.test
* @author crosswalk.test
* Thu Mar 30 09:12:39 CST 2017
*/
'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View, Text, PixelRatio ,NativeModules,findNodeHandle} from 'react-native';
var Crosswalk = require('react-native-webview-crosswalk-android');
class Nectar extends Component{
  componentWillMount() {
     if(this.props.WebRoot != null && GLOBAL.WebRoot == null) {
        GLOBAL.WebRoot = this.props.WebRoot;
     }
  }
  componentDidMount(){
  }
  render() {
     return (
     <Crosswalk
    style={styles.containerWebView}
     ref={(ref)=>{this.state.webview=ref;}}
     javaScriptEnabled={true}
            geolocationEnabled={false}
            builtInZoomControls={false}
            url={"http://my.3vfang.com/p/share/content.php?m=bG5pbmctaXRlbT0xMTQ4MQ=="}
             
     />
     );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  containerWebView: {
    flex: 1,
    },
  
});

AppRegistry.registerComponent('Nectar', () => Nectar);

```
## License
MIT 
