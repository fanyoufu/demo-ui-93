# demo-ui-93
这是一个学习性质的组件库。依赖于semantic-ui中的样式来开发的一套vue的公共组件。
仅供学习使用哈。


# 安装
安装两个包：
- demo-ui-93
- semantic-ui-css

```
npm i demo-ui-93
npm i semantic-ui-css
```
# 引入
在main.js中
```
// 引入依赖样式
import "semantic-ui-css/semantic.css"

// 引入组件
import UI from 'demo-ui-93'
// 引入样式
import "demo-ui-93/dist/mylib.css"

Vue.use(UI)
```

# 使用
##  my-headline
```
<my-headline>标题</my-headline>
```
##  my-button
```
<my-button>按钮</my-button>
```
##  my-divider

##  my-slider

##  my-dialog