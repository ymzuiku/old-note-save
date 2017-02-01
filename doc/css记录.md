# css记录

## 鼠标移动上去的样式:
cursor: pointer;

## 防止文本被选中(chrome, 火狐):
user-select: none;

## 更加全面的禁止选中
### 使用-webkit-user-select:none; 这个属性会在IOS 上回造成 input 无法输入
`
* {
-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
}
`
## 设置影子的格式:(x, y, blur, color)
boxShadow:'1rem 1rem 1rem #888',

## 改变按钮和其他控件的外观，使其类似于原生控件
http://www.css88.com/book/css/webkit/visual/appearance.html
`
'-webkit-appearance': 'none',
`

## 添加描边 border-style:dotted solid double dashed; 
`border:'0.01rem solid #000',`

## 屏蔽ios点选元素变灰 css:
 http://www.tuicool.com/articles/3mYfQjJ
`
'-webkit-tap-highlight-color': 'transparent',
`

## 防止pc端错误警告
`
if(!i.pc) {
    this.css['-webkit-tap-highlight-color']='transparent'
}
`

## 禁止浏览器随意滚动(横线无法滚动)
overflow:’hidden’

## 禁止手势放大,在html head中加入
<script>
    window.onload=function () {  
        document.addEventListener('touchstart',function (event) {  
            if(event.touches.length>1){  
                event.preventDefault();  
            }  
        })  
        var lastTouchEnd=0;  
        document.addEventListener('touchend',function (event) {  
            var now=(new Date()).getTime();  
            if(now-lastTouchEnd<=300){  
                event.preventDefault();  
            }  
            lastTouchEnd=now;  
        },false)  
    }  
</script> 