# 项目结构及简介
## 需求配置
* node `^4.5.0`
* npm `^3.0.0`

## 开始


```bash
$ git clone https://github.com/jinxin479/webpack2-redux-antd-demo.git
$ npm install                   # 安装依赖
$ npm start                     # 运行
```


npm 命令详解

|`npm run <script>`|解释|
|------------------|-----------|
|`start`|服务启动在3000端口，代码热替换开启。|
|`compile`|编译程序到dist目录下（默认目录~/dist）。|
|`dev`|与`npm start`相同, 但是启动nodemon守护进程。|
|`dev:no-debug`|与`npm run dev` 但是禁用devtool（开发工具）。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`test:dev`|开启Karma测试并监听改变随时重新测试，但是生成覆盖率报告。|
|`deploy`|启动代码检查，测试，如果成功，编译到dist目录下。|
|`deploy:dev`|与`deploy`相同，但是`NODE_ENV`值为"development"。|
|`deploy:prod`|与`deploy`相同，但是`NODE_ENV`值为"production"。|
|`lint`|检查所有.js文件是否规范。|
|`lint:fix`|检查所有.js文件是否规范并修复它们。 |

## 项目目录


```
.
├── bin                      # 启动脚本
├── blueprints               # redux-cli的蓝图
├── build                    # 所有打包配置项
│   └── webpack              # webpack的指定环境配置文件
├── config                   # 项目配置文件
├── server                   # Express 程序 (使用 webpack 中间件)
│   └── main.js              # 服务端程序入口文件
├── src                      # 程序源文件
│   ├── main.js              # 程序启动和渲染
│   ├── components           # 布局UI组件
│   ├── containers           # 全局容器组件
│   ├── feature              # 功能模块
│   ├── static               # 静态文件(不要到处imported源文件)
│   ├── styles               # 程序样式
│   ├── store                # Redux指定块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── rootReducers.js      # 根reducer注册和注入
│   └── routes               # 主路由和异步分割点
│       ├── route.js         # 用store启动主程序路由
│       ├── Root.js          # 为上下文providers包住组件
└── tests                    # 单元测试
```

## 样式

所有的css都支持会被预处理。只要被引入，都会经过[PostCSS](https://github.com/postcss/postcss)压缩，加前缀。在生产环境下会提取到一个css文件下。

由于使用antd 框架，改变原有样式，需要覆盖其样式，需要在class优先级上高于已有的。另外在本项目中，各功能模块的样式使用css-module,需要覆盖的css,请在layout.css中修改。

## 服务端

这个项目的服务端使用express。

## 打包优化

Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化。另外，在生产环境，我们使用[react-optimize](https://github.com/thejameskyle/babel-react-optimize)来优化React代码。

在生产环境下，webpack会导出一个css文件并压缩Javascript，并把js模块优化到最好的性能。


##feautre文件夹下，按照项目功能进行组织，提高了可扩展性和可维护性
1. components是UI组件，
2. container是容器组件，
3. module中是action actionCreators,reducers.
以上3点是redux概念中的内容，UI组件和容器组件分离，尽量将所有的业务逻辑数据处理放在容器组件中，UI方面的代码放在UI组件中，实现关注点分离。modules中集中放置action,actionCreators,reducers。之所以放在一个文件中，可以避免在不同文件中跳来跳去的繁琐，增强后期维护方便性。
## 使用webpack2最新版本配置

## 登录权限验
引入 redux-auth-wrapper 组件进行权限控制，可根据需要进行修改。
## 登录账号密码
1. 手机号：有效手机号
2. 密码:4位数字
