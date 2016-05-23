## 自己搭建的一个gulp+webpack的前端项目生成器；完成前端重复的一些步骤；
	
	Gulp用于前端项目流程控制，webpack用于vue组件和js的模块化

### 安装依赖
```nodejs
npm install
```

### 使用方法
```nodejs
gulp //运行默认的Gulp任务，得到将是压缩混合后的版本
gulp --env=beta 运行测试环境下的Gulp任务
```

### Tips
1、gulpfile.js中的comeIn和output分别是文件进入和处理之后的路径
2、默认运行gulp,执行html,sass,image,js等任务
3、默认为测试环境，打包的静态文件不压缩，需要压缩可以添加参数 --env=pro 或者 --ENV=pro