学会自己切图？，dpr设备像素比=物理像素/dips,比值越大，像素越高，iPhone6是2，iPhone6plus是3.
将svg图片转化为图标字体，制作图标字体，打开IcoMoon网站：https://icomoon.io
我们会在src下创建一个公共目录common,用于存放公共资源和公共模块。将图标字体放在这个目录下。将图标字体文件里的css文件改为stylus语法。package.json配置stylus-loader

项目的data.json文件：包括商家相关数据：seller，产品信息：goods，商家评论：ratings
测试写的api:localhost:8080/api/seller,

路径设置问题:webpack.base.conf.js下面：
 alias: {
      'src': path.resolve(__dirname, '../src'),
      // 'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }

谷歌安装jsonview
flex:1的作用,&表示他的父元素

电脑用手机预览：用草料二维码生成二维码预览，前提是保证你的手机和电脑在同一个局域网


全局定义，在base.styl: .border-1px

 v-if="seller.supports" 异步加载，最初为空，要先做判断。
 
图片与文字之间会有空白：消除空白，设置父元素，font-size:0;但子元素要单独设置font-size;
图片与文字在同一行没有对齐：图片加样式：vertical-align:top;

sticky footers: www.w3cplus.com/css3/
星星的分级：

因为是异步更新数据：用this.$nextTick(() => {
                    this._initScroll()
                })

vscode设置模板：快速设置用户代码片段：文件->首选项->用户代码片段  

可以被外部调用的，一般不带下换线；如果不行的话，不带下滑线；

 select(type,event){
      if(!event._constructed){
        return
      }
      this.selectType = type
    }
这里讲传进来的selectType改变，只能通过派发事件改变父组件的值。

export default 引入的话不带花括号，export function,可以export多个模块，引入的话要带花括号。

build.js下面有env.NODE_ENV = 'production'

项目问题，第一次加载画面时，不能滚动；商品详情页时，点击不同商品会有上次商品的图片切换。