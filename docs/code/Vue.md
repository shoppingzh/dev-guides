---
title: Vue
---



- 【强烈推荐】**使用组合式API**

**Composition API**相比**Option API**有以下好处：

- 代码可读性好，同类逻辑统一维护
- 逻辑易于抽离，轻松实现逻辑与UI分离
- TypeScript支持度更高

一个组合式API代码示例：
```js
// useWindowSize
function() {
  const width = ref(null)
  const width = ref(null)
  const resizeHandler = () => {
    width.value = window.innerWidth || document.documentElement.clientWidth || 0
    height.value = window.innerHeight || document.documentElement.clientHeight || 0
  }
  window.addEventListener('resize', resizeHandler)
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })
  resizeHandler()

  return {
    width,
    height
  }
}

// App.vue
setup() {
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const size = computed(() => `[${windowWidth.value}, ${windowHeight.value}]`)
  return {
    size
  }
}
```

相关文档请参见：[https://v3.cn.vuejs.org/guide/composition-api-introduction.html](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

- 组件名使用多个单词

使用多个单词的组件名可以防止未来与`HTML`的元素冲突，因为HTML元素名都是单个单词。

```js
// 正例
UserProfile
BaseDialog

// 反例
Dialog
```


- 使用`-`分隔组件

```html
<!-- 正例 -->
<todo-item />

<!-- 反例 -->
<TodoItme />
```


- 组件`prop`尽量描述完整

```js
// 正例
{
  size: {
    type: Number,
    required: true,
    validator: val => val > 0
  },
  options: {
    type: Object,
    default: () => ({})
  }
}

// 反例
['size', 'options']
{
  size: Number,
  options: Object
}
```

- 【推荐】组件属性、事件定义顺序（先属性，后事件）

```vue
<template>
  <todo-item
    v-for="item in items"
    :key="item.id"
    :id="${item.id}"
    :ref="item${item.id}"
    v-model="item.name"
    :desription="item.description"
    @click="handleClick" />
</template>
```

参考文档：[https://cn.vuejs.org/v2/style-guide/#%E5%85%83%E7%B4%A0-attribute-%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%8E%A8%E8%8D%90](https://cn.vuejs.org/v2/style-guide/#%E5%85%83%E7%B4%A0-attribute-%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%8E%A8%E8%8D%90)

- 【推荐】事件处理函数以`handle`开头

```vue
<template>
  <div @click="handleClick" />
</template>
```

- 【推荐】事件名遵循**kebab-case**风格

```js
// 正例
emit('item-change')

// 反例
emit('itemChange')
emit('itemchange')
```

- 【推荐】Vue组件属性定义顺序

```js
export default {
  name: 'TodoItem',
  functional: true,
  components: { SearchInput },
  mixins: [mixin],
  provide() {
    return this
  },
  inject: ['todo'],
  model: {},
  props: {
    name: { type: String }
  },
  setup() {},
  data() {},
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
}
```

- 尽量不要使用全局style

```vue
// 正例
<style scoped>
</style>

// 反例
<style>
</style>
```

全局样式形成全局样式污染，给调试带来困难。如果实在要写全局样式，可选择两种方案：
- 将全局样式放到项目`src/styles`目录下统一维护
- 给全局`class`一个绝不可能重复的名称


## 组件规范

- 【推荐】组件名以统一的前缀作为名称空间

> 推荐使用组织名、公司名、个人名。

```js
// 正例
WxButton
WxCard

// 反例
Button
BaseButton
```

- 【推荐】组件根节点的class为组件名

```html
<!-- 正例 -->
<div class="tx-button" />

<!-- 反例 -->
<div class="wrap" />
<div class="container" />
```

- 【推荐】推荐使用BEM定义组件模板结构

```html
<div class="tx-button tx-button--primary">
  <div class="tx-button__loading"></div>
</div>
```

- 对组件进行合理的布局划分，切勿随意摆放。

- 为了性能考虑，组件中不需要动态响应的字段，不定义为响应式数据

```js
data() {
  this.maxCount = 100
  return {
    count: 1
  }
}
```

- 【强烈推荐】依赖了`props`或`data`的字段，设计为`computed`字段而不是`data`字段，减少手动同步数据状态

```js
// 正例
{
  data() {
    this.maxCount = 100
    return {
      count: 1
    }
  },
  computed: {
    canInc() {
      return this.count < this.maxCount
    }
  }
}

// 反例
{
  data() {
    this.maxCount = 100
    return {
      count: 1,
      canInc: null
    }
  },
  watch: {
    count(newVa) {
      this.canInc = this.count < this.maxCount
    }
  }
}
```

- 减少接口的抛出

组件接口四要素：**属性（props）**、**事件（events）**、**方法（methods）**、**插槽（slots）**

尽量减少接口的数量，在满足需求的前提下，谨慎设计接口，以防未来发生不兼容改动，导致依赖了此组件的代码产生问题。

从更根本的角度考虑，建议为公共组件写单元测试，当修改组件接口或实现时，及时测试，以防给使用者造成困扰。

