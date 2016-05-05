# 吴博--个人简历
  以一个网页项目来展示个人信息，平常自主做的项目和学习的经验分享.
  工程化创建项目创建采用了yoeman + angularJs,构建工具使用了grunt，采用npm和bower包管理工具
  clone本项目后,请先安装包(命令行执行npm install 和 bower install 命令 ),安装完成后,运行grunt serve启动服务；
  如果想自行修改代码，请修改完成后，运行grunt build将项目打包，并将生成的dist文件夹内的文件放入自己的服务器中。

## 2015年5月4号
    第一版:导航栏和第一个section页面完成
## 2015年5月5号
    version@0.1.1.0 : 优化了项目结构，修改了项目导航栏的内容，同事将第一个section 的内容分类通过两个section展示。
        今天完成的事情：如上；同时与大神交流，学习了页面布局的只是，盒模型的六大元素：position,margin,shadow,border,padding,content
        遇到的问题：AngularJS的init 的书写不是很熟，还得照着以前的写，所以需要多多努力了。
        明天的计划：将第一和第二section内容进行渲染，还是决定采用Bootstrap来做，完成响应式
        心得：布局从网小看，小的分为各个模块，所有模块合起来必须能完成的凑成上一层大的模块。
              少用margin，如果子元素的宽高是父元素的100%，子元素设置margin后，会挤出去，破坏其他容器的布局，需要采用padding，归结为：margin不占据空间
