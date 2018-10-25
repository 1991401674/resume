window.onscroll=function(){
    var scrollTop=
        $(document).scrollTop();
    var a=$(".my_title")
    if(scrollTop>=150){
        a.css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "right":"0",
            "margin":"auto",
            "zIndex":"999",
            "background":"#000",
            "width":"100%"
        })

    }else{
        a.css("position","")
    }


var sp1=$(".sp1")
var sp2=$(".sp2")
var b1=$(".b1")
var b2=$(".b2")
sp1.click(function(e){
    e.preventDefault()
    sp1.toggleClass("border-bottom-0 text-danger");
    sp2.toggleClass("border-bottom-0 text-danger");
    b2.toggleClass("d-none");
    b1.toggleClass("d-none");
})
sp2.click(function(e){
    e.preventDefault()
    sp2.toggleClass("border-bottom-0 text-danger");
    sp1.toggleClass("border-bottom-0 text-danger");
    b2.toggleClass("d-none");
    b1.toggleClass("d-none");
})
//放大镜
    var img=$(".fdj").prev()
    var lgimg=$(".fdj").children();
    var imgh=parseInt(img.css("height"))
    var imgw=parseInt(img.css("width"))
    $(".tm").css({
        "width":`${imgw}`,
        "height":`${imgh}`
    })
    img.parent().css({
        "width":`${imgw}`,
        "height":`${imgh}`
    })
    var tmw=$(".tm").css("width")
    var tmh=$(".tm").css("height")
    var h=imgh*0.8
    var w=imgw*0.8
    var lgh=imgh*2
    var lgw=imgw*2
    var jzw=imgh*0.4
    var jzh=imgw*0.4
    var ZXW=jzw/2
    var ZXH=jzh/2

    $(".tm").hover(
        function(){
            lgimg.css({
                "height":`${lgh}px`,
                "width":`${lgw}px`
            })
            $(".jz").css({
                "height":`${jzw}px`,
                "width":`${jzh}px`
            })
            $(".fdj").css({
                "height":`${h}px`,
                "width":`${w}px`
            })
            $(".fdj").toggleClass("d-none")
            $(".jz").toggleClass("d-none")
        }
    )
    $(".tm").mousemove(function(e){
        var left=e.offsetX-ZXW;
        var top=e.offsetY-ZXH;
        if(left<0) left=0;
        else if (left>ZXW*3) left=ZXW*3
        if(top<0) top=0;
        else if(top>ZXW*3) top=ZXW*3
        $(".jz").css({
            left,top
        })
        top=2*top
        left=2*left
        lgimg.css({
            "top":`-${top}px`,
            "left":`-${left}px`
        })
    })

//加减
var jia=$(".nu").children("a")
var num=$(".nu").children("input")
jia.click(function(e){
    e.preventDefault()
    var jia=this;
    var n=num.val();
    if(jia.innerHTML=="+")
        n++
    else if(n<=1)
        n=1
    else
        n--
    num.val(n);
})

//点击小图
var simg=$(".simg").children()
simg.click(function () {
    var simg=$(this);
    simg.siblings().removeClass("border-active")
    simg.addClass("border-active");
    var ssimg=simg.children().attr("src")
    img.attr("src",`${ssimg}`)
    lgimg.attr("src",`${ssimg}`)
})


//选择。。。
var x_z=$(".cm").children()
x_z.click(function (e) {
    e.preventDefault();
    var x_z=$(this);
    var ax=x_z.children("span")
    x_z.addClass("border-danger")
    x_z.siblings().removeClass("border-danger")
})
