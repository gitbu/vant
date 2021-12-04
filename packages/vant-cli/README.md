# CHATUI ClI

CHATUI ClI 是一个 Vue 组件库构建工具，通过 CHATUI ClI 可以快速搭建一套功能完备的 Vue 组件库。

### 特性

- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESlint、Stylelint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 手动安装

```shell
# step1: 安装vue和vue-template-compiler
npm 
# step2: 通过 npm 安装
npm i chatui-cli -D

安装完成后，请将以下配置添加到 package.json 文件中

```json
{
  "scripts": {
    "dev": "chatui-cli dev",
    "test": "chatui-cli test",
    "lint": "chatui-cli lint",
    "build": "chatui-cli build",
    "release": "chatui-cli release",
    "build-site": "chatui-cli build-site"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
    "*.{vue,css,less,scss}": "stylelint --fix"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@vant"]
  },
  "stylelint": {
    "extends": ["@vant/stylelint-config"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Android >= 6.0", "iOS >= 10"]
}
```
