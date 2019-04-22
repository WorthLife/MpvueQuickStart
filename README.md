# Mpvue-project

> 使用mpvue + vuex + Vant Weapp + we-validator来构建一个简易的微信小程序
## Quick Start

### 开发环境准备

#### 1. 开发工具：VSCode

为了更高效的开发，强烈建议使用[VsCode](https://code.visualstudio.com/), 提供了代码自动补全、ESLint 格式校验和自动修正，完善且一直在增长的代码片段库，自定义的主题界面，更好的 Git 集成。

需安装的插件：

1.  Vetur
2.  eslint
3.  Vue 2 Snippts

建议的配置 (settings 快捷键： `CTRL + ,`)：

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": false,
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "eslint.validate": [
    "javascript",
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    "javascriptreact",
    "html",
    "vue"
  ],
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.eslintIntegration": true
}
```

#### 2. 预览工具： 微信开发者工具

在本项目根目录运行如下命令启动项目（VSCode 集成了`powershell`命令行工具)：

```bash
npm start
# 或者：
npm run dev
```

##### 注意事项

1.  新增的页面需要重新 `npm run dev` 来进行编译

更多相关介绍请参考： [mpvue 快速上手](http://mpvue.com/mpvue/quickstart/)

### 项目结构

```
project.config.json   	#微信项目配置文件
package.json	     	#npm项目配置文件
/dist					#项目编译的目标目录，也作为小程序的根目录
/static						#静态资源文件夹，将编译到 /dist 目录下
	/functions				#云函数目录
	/images					#图片文件目录
	/icons					#图标文件目录
	/...
/src					# mpvue源码目录
	/components				#自定义组件目录
	/data					#数据相关，如网络api定义
		data1.js				# 定义
	/stores					#vuex stores目录，管理状态（页面的数据）
		index.js				# store模块
		store1.js				# store定义
	/pages					#页面目录
		/page1				# 具体的页面
			index.vue			#vue页面组件
			main.js				#将vue组件转为小程序组件
			main.json			#页面配置文件, 参考 [1]
		/page2
		/...
	/utils				#工具类
	app.json			# 小程序全局配置，参考[2]
	App.vue				# 相当于小程序里的Application，作用于全局
	main.js				# 将vue组件转为小程序组件
```

[1]: https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE "小程序页面配置"
[2]: https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE "小程序全局配置"

### 开发页面

1.  拷贝一个已有页面，粘贴到 `src/pages/`下，重命名文件夹名为新页面名称

2.  在`src/app/.json`得到 pages 中添加新建 页面 （如： `"pages/new-page-name/main"` )

3.  如需在页面中引入第三方组件或自定义组件

    示例引入 mpvue-weui 的 MpField 组件：

    ```html
    # /pages/page-name/index.vue
    <script>
    import MpField from 'mp-weui/packages/field';

    export default {
      components: {
        MpField,
      },
      methods: {
      }
    };
    </script>
    ```

4)  相关资料： （`mpvue`语法和规范同`vue`）

1.  [mpvue 使用手册](http://mpvue.com/mpvue/)
2.  [Vuex 指南](https://vuex.vuejs.org/zh/guide/)
3.  [mpvue-weui](https://mpcomponent.github.io/mpvue-weui/)
4.  [mp-weui](https://youngluo.github.io/mp-weui/)
5.  [we-validator 表单校验文档](https://github.com/ChanceYu/we-validator)

### 常见问题

**Q1**: 新建或删除页面后，微信开发者工具中无法预览，提示找不到页面

重新 `npm run dev` 来进行编译

**Q2**: 新增依赖后，微信开发者工具中提示找不到依赖

解决办法同 **Q1**

若仍无法解决：

1.  关掉微信开发者工具

2.  删除 dist 文件
3.  重复**Q1**的解决办法

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
