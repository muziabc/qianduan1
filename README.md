# Optimus小程序项目

> StroneHenge小程序项目是基于mpvue搭建的小程序快速开发框架


## 运行方法

``` bash
# 安装依赖
npm install

# 运行开发模式, 热部署于localhost:8080
npm run dev

# 构建生产版本
npm run build
```

## 项目目录说明

```
  ---build
   |-config   //配置
   |-dist     //开发&生产运行目录
   |-src
      |-components   //公用组件
      |-pages        //页面
      |-store        //vuex
         |-modules
            |_counter
                |_index.js
         |-actions.js
         |_mutations.js
   |-static
   |-.babelrc
   |-.editorconfig
   |-.eslintrc.js
   |-project.config.json //小程序及项目相关配置
      .
      .
      .
   
```

