# 一个帮助你快速搭建和开发前端项目的 CLI

如何安装？

```bash
npm install coderzzx -g
```

## 创建项目

目前支持(Vite 版本) React,Vue

通用配置:

- eslint prettier (代码规范)
- normalize.css(样式重置,可自行删除)
- vite.config.js(其中配置了别名，你可以自行修改和配置更多)

react 项目模块已经帮你配置:

- axios(网络请求 axios 的二次封装)
- react-router-dom(路由默认配置)
- @reduxjs/toolkit(状态管理)
- styled-components(样式编写解决方案)

vue 项目模块已经帮你配置:

- axios(网络请求 axios 的二次封装)
- vue-router(路由默认配置)
- pinia(状态管理)

### 1.执行命令创建项目

```bash
coderzzx init
```

### 2. 选择项目模版

目前支持

1. React+Vite+TS
2. Vue+Vite+TS

### 3. 输入项目名称

### 4. 进入项目目录

```bash
npm install
```

### 5. 启动项目

```bash
npm run dev
```

### 6. 打包项目

```bash
npm run build
```
