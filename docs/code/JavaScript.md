---
title: JavaScript
---



> 文中标注了 <UseLint /> 的规范表示加入了ESLint配置规则，会自动检测。

## 代码美观度

- <UseLint /> 文件末尾有空行。

- <UseLint /> 不使用分号。

- <UseLint /> 缩进：使用空格，2个。

- <UseLint /> 字符串使用单引号。
正例：
```js
const str = 'hello'
const o = {
  'name': 'xpzheng'
}
```
反例：
```js
const str = "hello"
```

- <UseLint /> 禁止使用var声明变量，使用const/let代替。

- <UseLint /> 统一空格，提升代码美观度。
在这些地方需要添加空格：
```js
// 操作符的前后
const a = 1
const a = 1 + 1
if (a > 1)
typeof a === 'string'
// 对象属性名冒号的后面
const user = {
  name: 'xpzheng'
}
// 数组元素之间
const arr = [1, 2, 3]
// if/for/white的后面，else的前后
if (a) {}
for (;;;);
while (1);
if (a) {
} else {
}
// 函数参数右括号的后面
function hello() {}
const hello = () => {}
// 单行语句的首尾
function hello() { console.log('hello') }
```
这些地方，不需要空格：
```js
// 语句后面
console.log(1) 
// 属性取值点后面
user. name
// 函数调用的函数名后面
hello ()
// 函数声明的函数名后面
function hello () {}
// 自增、自减操作符
a ++
a --
```

- <UseLint /> 三元表达式风格
```js
// 单行
const a = 2 > 1 ? 'yes' : 'no'
// 多行：操作符放在开头，提高可读性
const a = 2 > 1
  ? 'yes'
  : 'no'
```

- <UseLint /> 禁止使用Yoda条件式
Yoda条件式在一些编程语言中可以起到防止在条件表达式中赋值的情况，如：
```js
if (a = 1) {} // 原本是 if (a == 1)
```
但是，在Python/Swift这样的语言里，条件中不允许出现赋值语句，所以就不需要可读性较差的Yoda条件式。同样，我们使用Lint限制了在条件中使用赋值语句，所以也就不需要Yoda条件式了。
反例：
```js
if (1 === a) {}
```
正例：
```js
if (a === 1) {}
```

## 最佳实践

- <UseLint /> 使用全等比较
正例：
```js
if (a === 1) {}
```
反例：
```js
if (a == 1) {}
```

`==`操作符会进行隐式的类型转换，常常会引发一些难以预知的错误。例如：
```js
const a = '1'
if (a == 1) {
  return a + 1 // 期望结果：2，实际结果：'11'
}
```
注意，有一种情况比较特殊：**判断变量是否为空**。为空有两种情况，`undefined`与`null`，一般这两种情况都需要检查：
```js
if (a === undefined || a === null) {}
```
但是，也可以使用简化写法：
```js
if (a == null) {}
```
`==`操作符中，只要被比较的双方中有一个是`null`或`undefined`都成立。详情可参见：
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)

- <UseLint /> 变量的声明与使用规范
反例：
```js
// 声明却不使用
const a = 1
// 不声明却使用
console.log(b)
// 在声明前使用
console.log(c)
const c = 1
```

> 注：`const`与`let`声明的变量不会提升，在声明前使用会触发错误。但我们还是希望这样的问题在编译期间就得到解决。

- <UseLint /> 避免typeof操作符的结果与一个错误值比较
```js
// 如果不小心将string写成了strign，Lint会给出错误提示
if (typeof str === 'strign')
```

- <UseLint /> 禁止使用==或===对NaN进行判断
在js中，NaN不等于NaN，所以下面的代码是错的：
```js
const num = 1
if (num !== NaN) {}
```
可参见文档：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)

- <UseLint /> 禁止在条件语句中赋值
```js
const a = 1
if (a = 1) {}
```

- <UseLint /> 禁止单行语句
看一个常见错误的例子：
```js
if (a > 1)
  console.log(a)
  console.log(a + 1)
```
代码的第三行虽然给人的感觉与第二行是在一起的，但其实无论条件判断结果如何，都会执行。
因此，如果语句有多行，则需要使用大括号括起来：
```js
if (a > 1) {
  console.log(a)
  console.log(a + 1)
}
```
如果语句只有单行，则放在同一行：
```js
if (a > 1) console.log(a)
```

- <UseLint /> 禁用稀疏数组
稀疏数组的应用场景极少，但可能引发不可预料的问题，如：
```js
const arr = [1,, 2, 3] // 开发人员手抖，多打了一个逗号
console.log(arr[1]) // 期望输出2， 却输出了undefined
```

- 常见判空方法

**字符串**
```js
if (!str) {}
// 考虑空白字符串的情况
if (!str || !str.trim())
```

**数值**
```js
if (num != null)
```

**数组**
不为`null`的对象皆为Truthy，因此要判断是否为空元素数组。
```js
if (!arr || !arr.length)
```

**对象**
```js
if (object)
```

参见文档：[MDN Truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)

- 使用字面量创建变量

```js
const o = { name: 'xpzheng' }
const arr = [1, 2, 3]
```

- 使用展开运算符`...`做浅拷贝而不是`Object.assign`

```js
// 正例
const source = { a: 1 }
const target = { ...source, b: 2 }

// 反例
const target = Object.assign({}, source, { b: 2 })
```

- 使用剩余参数运算符`...`而不是`arguments`

```js
// 正例
function func(...args) {
  console.log(args)
}

// 反例
function func() {
  console.log(arguments)
}
```

- 箭头函数返回值为对象时的简写写法

```js
// 正确
const func = () => ({})

// 错误
const func = () => {} // {}会被理解为函数体，所以返回值为undefined
```

