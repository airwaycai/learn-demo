1. @babel/core
    根据我们的配置文件转换代码,所以安装之后，需要配置文件。
    配置文件通常为.babelrc或者babel.config.js
2. @babel/cli
    能够在命令行使用babel。
    npx babel index.js
3. @babel/plugin-transform-arrow-functions
    转换箭头函数，但是，很多其他的语法转换不了，怎么破？babel为我们准备了@babel/preset-env，里面有很多预先设置好的东西
4. @babel/preset-env
    3.1 预设了很多语法转换，比如箭头函数，不用这个的话，需要手动配置babel的插件【 "@babel/plugin-transform-arrow-functions"】
    而@babel/preset-env预设了很多新的语法，不用一个一个再配置了。
    3.2 @babel/preset-env默认只对syntax进行转换，我们需要使用@babel/polyfill来提供对api的的支持。
    babel 把 Javascript 语法为syntax 和 api， api 指那些我们可以通过 函数重新覆盖的语法 ，类似 includes， map， includes， Promise， 凡是我们能想到重写的都可以归属到api。syntax 指像箭头函数，let，const，class， 依赖注入 Decorators等等这些，我们在 Javascript在运行是无法重写的，想象下，在不支持的浏览器里不管怎么样，你都用不了 let 这个关键字;
    接着@babel/polyfill出场了。
5. @babel/polyfill
    (已经过时了，import "@babel/polyfill"; 替换成 import "core-js/stable";
    import "regenerator-runtime/runtime";)
    新增的语法是可以用@babel/preset-env来transform的，但是新的api只能被polyfill。
    (@babel/polyfill这个包本身是没有内容的，它依赖于core-js和regenerator-runtime这两个包)
    在入口处，引入import '@babel/polyfill'即可，但是这个包太大了，我能不能只能用我想用到的？可以。利用 @babel/preset-env配置options，  "useBuiltIns": "entry|usage|false",
6. @babel/runtime
    (1)高阶语法向低阶语法转化时引入了了很多helper函数(如_classCallCheck)。当文件数量很多时，每个文件都引入这些helper函数会使得文件体积增大，怎么这些helper函数抽离到单独的模块，然后按需引入呢？
    (2)虽然polyfill是按需引入的，但是会污染全局命名空间，当你写的是公共库时，可能会与使用者本地的方法产生冲突。例如你在你的库中引入了polyfill中的Promise，使用者自身定义了自己的Promise，这就容易产生冲突。如何将你的公共库中引入的polyfill api隔离起来呢？

    要解决这两个问题，就要需要使用@babel/runtime和@babel/plugin-transform-runtime了。
    @babel/runtime依赖@babel/helpers和regenerator-runtime，helper函数都可以从这里面引入而不是每个js文件都模拟实现一个此方法。babel 提供了 @babel/plugin-transform-runtime来帮助我们helper引入，并且提供了corejs配置，来实现环境隔离。