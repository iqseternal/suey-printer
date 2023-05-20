

设置 npm 源

`npm config set registry https://registry.npmjs.org`

安装

`npm install @suey/printer --save`


```javascript
import { print, printInfo, printWarn, printError } from '@suey/printer';

`调用这个函数你可以格式化打印你想要的信息, 相比于 console.log, 此函数的调用更加符合函数化, 人性化
请注意, 由于控制台所处于的平台不同, 可能出现打印失效的情况
例如：CSS 样式, 可能在 Windows 控制台中可能就会出现不支持的情况
目前 ANSI 模式表现良好`

print('HelloWorld'); // 无格式化信息

print('color: red;', 'HelloWorld'); // 红色 HelloWorld 字体信息, 自动识别 css 样式

print(toColor('red', 'HelloWorld'), '你的打印信息的位置可以自己选择'); // 使用toColor配合,红色字体信息

print(toColor('red'), 'HelloWrold'); // 使用toColor配合,红色字体信息

print(toColor(['white', 'red:bg']), 'HelloWorld'); // 使用toColor创建多ANSI格式的样式

print(toColor({ color: 'red' }), 'HelloWrold'); // 使用toColor创建css格式的样式, 用这个方式相较于直接书写css更加友好,具有ts类型提示

printInfo('HelloWrold!');

printWarn('Warn'); // 打印一条警告信息, 黄色字体

printError('error'); // 打印一条错误信息, 红色字体

```


