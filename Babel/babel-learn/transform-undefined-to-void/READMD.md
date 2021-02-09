# Babel插件开发学习

### babel的三个重要过程，解析，转换，生成

1. 对于解析过程，babel给我们提供了一个工具，我们可以直接使用，那就是@bable/parser
我们先来安装他
```
    npm i -S @babel/parser
```

2. 对于转换过程，babel给我们提供了一个工具，那就是@bable/traverse
我们先来安装他
```
    npm install --save @babel/traverse
```

3. 在转换的过程中，可能需要一些工具，来协助转换ast，最常用的是 @babel/types， @babel/template
我们先来安装他
```
   npm install --save-dev @babel/types
   npm install --save-dev @babel/template
```

4. 对于生成过程，babel给我们提供了一个工具，那就是@bable/generator
我们先来安装他
```
    npm install --save-dev @babel/generator
```