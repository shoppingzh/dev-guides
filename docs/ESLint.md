## 变量声明

- <RuleName color="blue">no-delete-var</RuleName> <RuleLevel :value="2" /> 禁止删除变量
使用`delete`操作符删除对象的属性，而不是删除变量。反例：
```js
var a = 1
delete a
```

<LineSpace />

-  <RuleName color="blue">no-restricted-globals</RuleName> <RuleLevel :value="2" /> 禁止使用某些全局变量
如配置`no-restricted-globals: [2, 'event']`后，以下代码就会报错：
```js
document.addEventListener('click', function() {
  console.log(event) // event已被废除，不建议这么使用
})
```

<LineSpace />

- <RuleName>no-shadow-restricted-names</RuleName> <RuleLevel :value="2" /> 禁止覆盖受限制的标识符
```js
const undefined = 1
```

<LineSpace />

- <RuleName>no-undef</RuleName> <RuleLevel :value="2" /> 禁止使用未声明的变量
```js
const a = 1
console.log(b)
```

<LineSpace />

- <RuleName>no-unused-vars</RuleName> <RuleLevel :value="1" /> 声明了变量，却不使用，发出警告
```js
const a = 1
```

<LineSpace />

- <RuleName>no-use-before-define</RuleName> <RuleLevel :value="1" /> 声明之前使用变量、函数或类，发出警告
由于`const`、`let`在声明前使用变量会报错，因此该规则可以不用那么严格。
规则配置：`{ functions: false, classes: false, variables: true }`
```js
console.log(d)
const d = 1
hello()
function hello() {}
new Person()
class Person {}
```


## 逻辑正确性与严谨性

- <RuleName>for-directon</RuleName> <RuleLevel :value="2" /> for循环中的计数器朝着正确的方向移动，反例：
```js
for (let i = 0; i < 5; i--) {
}
```

<LineSpace />

- <RuleName>no-cond-assign</RuleName> 禁止在条件语句中出现赋值操作符
在一些编程语言（如C/Java），有一种[`Yoda条件式`](https://baike.baidu.com/item/%E5%B0%A4%E8%BE%BE%E6%9D%A1%E4%BB%B6%E5%BC%8F)：
```c
if (3 == a) {}
```
这种条件式的好处是可以防止如果编程人员一不小心把`==`写成了`=`，使用`if (3 = a)`这样的表达式会触发编译错误，而`if (a = 3)`这种却不会，因此可以有效避免一些未来很难排查到的BUG。

但是，在条件语句中使用赋值操作这本身就很不合理，所以有一些编程语言（如Python/Swift）直接禁止在条件语句中使用赋值操作，这样也就不用使用可读性很差的`Yoda条件式`了。

<LineSpace />

- <RuleName>no-console</RuleName> <RuleLevel :value="1" /> 禁用使用控制台
**根据需要开启此规则。** 使用`console`调试程序非常方便，但是如果在生产环境下，大量的控制台打印会造成一定的性能影响，但是如果禁用又会对开发过程不利。因此，如果想不禁用`console`并且不影响生产环境，可以使用打包工具在打包过程中去除控制台打印的相关代码，这样既能保证调试方便，也能不影响生产环境。

<LineSpace />

- <RuleName>no-constant-condition</RuleName> <RuleLevel :value="2" /> 禁止在条件中使用常量表达式
反例：
```js
if (true) {
  console.log(1)
}
```

<LineSpace />

- <RuleName>no-debugger</RuleName> <RuleLevel :value="2" /> 禁用使用debugger
可能会导致浏览器进入调试模式，禁用。

<LineSpace />

- <RuleName>no-dupe-args</RuleName> <RuleLevel :value="2" /> 禁止函数参数列表中出现重名参数
反例：
```js
function hello(a, b, c, b) {
}
```

> 注：箭头函数会在发生参数重名时报错。

<LineSpace />

- <RuleName>no-duplicate-case</RuleName> <RuleLevel :value="2" /> 禁止switch...case中出现重复的case
反例：
```js
const a = 1
switch(a) {
  case 1:
    break;
  case 1:
    break;
}
```

<LineSpace />

- <RuleName>no-empty</RuleName> <RuleLevel :value="2" /> 禁止出现空语句
反例：
```js
if (a === 1) {
}
while(x < 100) {
}
```
注：如果需要支持`catch`语句可空，可配置`{ allowEmptyCatch: true }`

