---
title: CSS
---


- 尽量不使用`!important`

- 不要使用`moz`、`webkit`、`ms`等前缀，使用PostCSS的`autoprefixer`插件搞定

- 属性独占一行

```css
/* 正例 */
div {
  display: block;
  width: 10px;
}

/* 反例 */
div {
  display: block; width: 10px;
}
```

- 推荐属性定义顺序

> 规范属性定义顺序的目的主要是为了提升可读性和方便维护，团队中遵循相同的规范可以使得维护代码变得方便，查找属性不需要将整个样式代码区域全部扫描，只要在特定的区域找到属性列表即可。

```css
div {
  /* 布局、可见性、位置 */
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  /* 尺寸与边界 */
  width: 300px;
  height: 300px;
  margin: 0 10px;
  padding: 5px;
  /* 文字 */
  font-size: 12px;
  color: #333;
  font-weight: 700;
  line-height: 1.5;
  /* 装饰/视觉 */
  border: 1px solid orange;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, .2);
  box-shadow: 0 0 7px #ccc;
  /* 转换/动效/动画 */
  transform: translate(10px, 10px);
  transition: all .3s ease-in-out;
  animation: ani 1s;
  /* 其他 */
  overflow: hidden;
}
```

- 使用`-`分隔类名

```css
/* 正例 */
.nav-title {}

/* 反例 */
.cardBody {}
```
