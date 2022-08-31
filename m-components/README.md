# 基于Element-plus二次封装组件
1、实现组件封装
2、全量打包、单组件打包
3、发布到npm服务器
4、github上生成在线文档
5、支持全量use引入、单组件use引入、单组件import引入

# 启动本地服务
npm run dev

# 打包整个项目
npm run build

# 打包成lib库，用来发布到npm服务器中，打包前需要再command/build.js升级版本号
npm run lib

# 发布到npm服务器中
1、cd lib 进度lib文件夹
2、npm publish发布到npm服务
