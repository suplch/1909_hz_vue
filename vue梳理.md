Vue 知识梳理

### 基础知识
- Vue 是 MVVM 数据模型驱动页面显示, 页面用户行为去修改 数据模型 实现双向联动

```ecmascript 6

    let template = `
        <div> {{ 属性名称 }} </div>
    `

    let backValue;
    Object.defineProperty(obj, '属性名称', {
        get() {
            收集有哪些东西在访问本属性用来监视();
            
            
            return backValue;
        },
        set(value) {
            if (检查数据是否发生变化, 是) {
                backValue = value
                if (检查本属性是否被监控) {
                    
                }
                
            }
        }
    })

    obj.属性名称;

    obj.属性名称 = 'hello'
    
    
    

```

```html
<div id="app">
  {{ message }}
</div>

<div id="app1">
  {{ message }}
</div>

```

```ecmascript 6
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Hello Vue!'
  }
})
```
- 事实上我们可以创建多个 vue app 实例, 只要我们能保证 每个vue app 实例 接管不同 div 也行

```html
<div id="app-5">
  <p>{{ message }}</p>   两种方式调用事件
  <button v-on:click="reverseMessage">反转消息</button>
  <button v-on:click="reverseMessage($event)">反转消息</button>
</div>
```
```ecmascript 6
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

- v-model
- Radio 单选 绑定模式
```html

//  当 v-model 绑定 的变量 和 当前raido box 的value 值 相当那么 选择
// 当用户主动点击 radio box 是的 被选中 那么 被选择的 value 会自动赋值到  v-model 变量
    <label><input  v-model="sex" name="sex" type="radio" value="男"> 男</label>
    <label><input  v-model="sex" name="sex" type="radio" value="女"> 女</label>
    <label><input  v-model="sex" name="sex" type="radio" value="未知"> 未知</label>
```

- Checkbox 多选 绑定模式
```html

// v-model 绑定的必须是 数组, 当 v-bind:value 的值在数组中 那么 本 input 选择, 否则不选择
// 当用户主动点击 checkbox 使得选中checkbox, 那么 就把 value 的值 push 到数组中, 否则从数组中移除对应的值 
<input v-model="bestFavoriteList" type="checkbox" v-bind:value="lesson">


// 当show 为true 的时候, 自动打钩选择, 当 为false的时候 自动 去钩
// 反过来 当用户自动单击 选择, 那么 show 变量被赋值为 true 否则 为false
<input v-model="show" type="checkbox">
```



### 组件

### 指令
