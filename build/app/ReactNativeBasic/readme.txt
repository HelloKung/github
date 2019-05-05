安装步骤
1.https://blog.csdn.net/applek_case/article/details/80183938  安装SDK
2.https://blog.csdn.net/github_34402358/article/details/84189735  连接模拟器



打包apk  android文件夹下运行
./gradlew assembleRelease


运行项目

1.adb.exe connect 127.0.0.1:62001
2.react-native run-android


问题
1.native-chart 打包apk
https://blog.csdn.net/fivestar2009/article/details/83750062

node_modules\native-echarts\src\components\Echarts\index.js
修改source={Platform.OS==='ios' ? require('./tpl.html'):{uri:'file:///android_asset/tpl.html'}}

2.native-chart 点击刷新问题
https://www.cnblogs.com/qiyecao/p/8316231.html

3.axios 封装
https://blog.csdn.net/sinat_33134895/article/details/80945642


4.react-native-splash-screen 启动屏 https://www.jianshu.com/p/4540ac17dfd4

5.react-native-image-picker  上传图片 https://www.jianshu.com/p/727c9d4c080c

6.react-native-camera  识别二维码 https://www.jianshu.com/p/bfad4c158f07  https://www.jianshu.com/p/61fb36bea60d
