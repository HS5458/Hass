# 吴博--个人简历
* QQ:1781483056
* 以一个网页项目来展示个人信息，平常自主做的项目和学习的经验分享.
* 工程化创建项目创建采用了yoeman + angularJs,构建工具使用了grunt，采用npm和bower包管理工具
* clone本项目后,请先安装包(命令行执行npm install 和 bower install 命令 ),安装完成后,运行grunt serve启动服务；
* 如果想自行修改代码，请修改完成后，运行grunt build将项目打包，并将生成的dist文件夹内的文件放入自己的服务器中。

## 2016年5月4号
    version@0.1.0.0 : 几天的时候完成了项目的构建，并完成了第一页面的静态制作

## 2016年5月5号
    version@0.1.1.0 : 优化了项目结构，修改了项目导航栏的内容，同事将第一个section 的内容分类通过两个section展示。
*   今天完成的事情：
    *   如上
    *   与大神交流，学习了页面布局的只是，盒模型的六大元素：position,margin,shadow,border,padding,content
*   遇到的问题：
        暂无
*   明天的计划：
    *   将第一和第二section内容进行渲染，还是决定采用Bootstrap来做，完成响应式
*   心得：
    *   布局从网小看，小的分为各个模块，所有模块合起来必须能完成的凑成上一层大的模块。
    *   少用margin，如果子元素的宽高是父元素的100%，子元素设置margin后，会挤出去，破坏其他容器的布局，
            需要采用padding，归结为：margin不占据空间

## 2016年5月6号
    version@0.1.2.0 : 第一页面大屏幕响应式完成
    version@0.1.2.1 : 解决了grunt build 打包不出views文件夹和没有正确打包出styles文件夹的问题
*   今天完成的事情：
    *   如上
*   遇到的问题：
    *   Bootstrap框架下的栅格系统，container 下的row下div总是居中的；
    *   响应式之间变换的时候，我的图片错位了
*   解决办法：          
    *   用定位来解决,并手动设置宽和高，最终版本去掉了类container
*   明天的计划：
    *   .完成第2页面的渲染
*   心得：
    *   Bootstrap的栅格系统真是好用；

## 2016年5月7号
    version@0.1.3.0 : 导航栏的响应式布局
*   今天完成的事情：
    *   如上
*   遇到的问题：
    *   给div加上了click事件，然后点击它时，出现了边框
    *   响应式之间变换的时候，我的图片错位了
*   解决办法：          
    *   给div加上了CSS属性：outline:none; 可解决此问题
*   明天的计划：
    *   第 2 页面的翻牌效果
*   心得：
    *   总体感觉不错，应用前天的响应式思想，做出了导航栏的响应式，更熟悉怎么运用Bootstrap来实现了。

## 2016年5月8号
    version@0.1.4.0 : 第二页面翻拍效果实现,大屏幕响应式设计实现完成
    version@0.1.4.1 : 第二页面中小型屏幕响应式设计实现完成
*   今天完成的事情：
    *   如上
*   遇到的问题：
    *   翻牌时，两个面虽然都设置了背景色，但是仍然还是可以看到对面
    *   另一种布局时遇到的定位编译量，容器大小，字体等来适应新的情况经过了多次修改
*   解决办法：          
    *   需要加上CSS属性： backface-visibility: hidden;
    *   这一步需要细心，而且对心中必须有一种形状，根据此形状转化为代码来实现效果。
*   明天的计划：
    *   第3页面的设计思路和基本布局实现(明天要上班了！)
*   心得：
    *   进一步理解了布局的思想，从宽高的角度来分配区域，所有的区域的和必须为父容器的大小.当然可以通过z-index来在Z轴上
    增加一层，但是这一层同样需要满足上一条件
    *   做的越多越是属性，我感觉这响应式设计中，对应了多种的布局，很是考验基础

## 2016年5月9号
      身体不舒服，暂停一天！
      
## 2016年5月10号
    version@0.1.5.0 : 第三页面展示
    version@0.1.5.1 : 第三页面基本完成，待后续优化
*   今天完成的事情：
    *   如上
*   遇到的问题：
    *   如何去掉点击a标签时的下划线
*   解决办法：          
    *   需要加上CSS属性： backface-visibility: hidden;
*   明天的计划：
    *   第4页面的个人经历完成50%
*   心得：
    *   所有问题都有办法解决的，关键是静下心多思考，多请求帮助，总能找到办法的。

## 2016年5月11号
    生病了，这几天难受的很。
    
## 2016年5月12号
    生病了，这几天难受的很。

## 2016年5月13号
    version@0.1.6.0 : 第四页面基本布局构思完成
*   今天完成的事情：
    *   如上
*   遇到的问题：
    *   ul li 布局时，如何隐藏并只显示一个li
*   解决办法：          
    *   每个li百分之百占用div，并且将ul设置overflow:hiiden;
*   明天的计划：
    *   
*   心得：
    *   运用JQ，来实现图片轮转的功能

## 2016年5月14号
    搭了一天的车！
    
## 2016年5月15号
    终于到北京了！明天加油继续做！！

## 2016年5月16号
    研究了JavaScript对象继承
*   老版的有5中继承方式
    *   使用对象冒充实现继承(该种方式可以实现多继承)
        function Parent(firstname)
        {
            this.fname=firstname;
            this.age=40;
            this.sayAge=function()
            {
                console.log(this.age);
            }
        }
        function Child(firstname)
        {
            this.parent=Parent;
            this.parent(firstname);
            delete this.parent;
            this.saySomeThing=function()
            {
                console.log(this.fname);
                this.sayAge();
            }
        }
        var mychild=new  Child("李");
        mychild.saySomeThing();
     *  采用call方法改变函数上下文实现继承(该种方式不能继承原型链)
              实现原理：改变函数内部的函数上下文this，使它指向传入函数的具体对象
        function Parent(firstname)
        {
            this.fname=firstname;
            this.age=40;
            this.sayAge=function()
            {
                console.log(this.age);
            }
        }
        function Child(firstname)
        {

            this.saySomeThing=function()
            {
                console.log(this.fname);
                this.sayAge();
            }
           this.getName=function()
           {
               return firstname;
           }

        }
        var child=new Child("张");
        Parent.call(child,child.getName());
        child.saySomeThing();

      *     使用Apply方法改变函数上下文实现继承(该种方式不能继承原型链)
            实现原理：改变函数内部的函数上下文this，使它指向传入函数的具体对象
        function Parent(firstname)
        {
            this.fname=firstname;
            this.age=40;
            this.sayAge=function()
            {
                console.log(this.age);
            }
        }
        function Child(firstname)
        {

            this.saySomeThing=function()
            {
                console.log(this.fname);
                this.sayAge();
            }
            this.getName=function()
            {
                return firstname;
            }

        }
        var child=new Child("张");
        Parent.apply(child,[child.getName()]);
        child.saySomeThing();
       *    采用原型链的方式实现继承
            实现原理：使子类原型对象指向弗雷的实例以实现继承，即重写类的原型，弊端是不能直接实现多继承
        function Parent()
        {

            this.sayAge=function()
            {
                console.log(this.age);
            }
        }
        function Child(firstname)
        {
            this.fname=firstname;
            this.age=40;
            this.saySomeThing=function()
            {
                console.log(this.fname);
                this.sayAge();
            }
        }

        Child.prototype=new  Parent();
        var child=new Child("张");
        child.saySomeThing();
      *     采用混合模式实现继承
        function Parent()
        {

            this.sayAge=function()
            {
                console.log(this.age);
            }
        }

        Parent.prototype.sayParent=function()
        {
           alert("this is parentmethod!!!");
        }

        function Child(firstname)
        {
            Parent.call(this);
            this.fname=firstname;
            this.age=40;
            this.saySomeThing=function()
            {
                console.log(this.fname);
                this.sayAge();
            }
        }

        Child.prototype=new  Parent();
        var child=new Child("张");
        child.saySomeThing();
        child.sayParent();
*   最新出来的实现继承的方式是：Object.create()
        function origObject(){
            this.val1 = 'a';
            this.val2 = 'b';
        }
        origObject.prototype.returnVal1 = function(){
            return this.val1;
        }
        origObject.prototype.returnValu2 = function(){
            return this.val2;
        }
        function newObject(){
            this.val3 = 'c';
            origObject.call(this);
        }

        newObject.prototype = Object.create(origObject.prototype);
        newObject.prototype.constructor = newObject;

        newObject.prototype.getValues = function(){
            return this.val1 + " " + this.val2 + " " + this.val3;
        }
        var obj = new newObject();
        console.log(obj instanceof newObject); //true
        console.log(obj instanceof origObject);//true

        console.log(obj.getValues()); "a b c"