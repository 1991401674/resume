var gj=$("#cbl");
var a0=$(".a0");
var a1=$(".a1");
var a2=$(".a2");
var a3=$(".a3");
var a4=$(".a4");
var a5=$(".a5");
var a6=$(".a6");
//С����
a0.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop:0
    },500)
})
a1.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop:$("#f1").offset().top-100
    },1000)
})
a2.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop:$("#f2").offset().top-100
    },1000)
})
a3.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop:$("#f3").offset().top-100
    },1000)
})
a4.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop:$("#f4").offset().top-100
    },1000)
})
a5.click(function (e) {
    e.preventDefault()
    none(a0)
    none(a4)
    none(a5)
    none(a6)
    a1.css({
        "bottom":"350px",
        "left":"0",
        "right":"0",
        "width":"25%",
        "height":"25%"
    })
    a2.css({
        "bottom":"0",
        "top":"0",
        "left":"-350px",
        "width":"25%",
        "height":"25%"
    })
    a3.css({
        "bottom":"0",
        "top":"0",
        "right":"-350px",
        "width":"25%",
        "height":"25%"
    })
    a4.css({
        "top":"",
        "bottom":"121px",
        "left":"0",
        "right":"0",
        "width":"25%",
        "height":"25%"
    })
    function none(x){
        console.log(x)
        x.css("visibility","hidden")
    }
    gj1();
})
a6.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop:document.body.clientHeight
    },1000)
})
var canMove=false,offsetX,offsetY;
gj.mousedown(function(e){
    if(gj.css("height")=="80px"){
        canMove=true;
        offsetX= e.offsetX;
        offsetY= e.offsetY;
		gj.css("transition","top,left 0s")
    }
})
var input=gj.children(0)
$(document).mousemove(function (e) {
    if(canMove){
        var top= e.clientY-offsetY;
        var left= e.clientX-offsetX;
        var top1=top+"px";
        var left1=left+"px";
        gj.css({
            "top":`${top1}`,
            "left":`${left1}`
        })
        if(gj.css("height")=="80px"){
            var a=window.screen.availHeight*0.8;
            var c=window.screen.availHeight*0.35;
            var b=window.screen.availWidth*0.8;
            if(top<c){
                gj3();
                none(a0)
                none(a4)
                none(a5)
                none(a6)
                a1.css({
                    "bottom":"280px",
                    "left":"0",
                    "right":"0",
                    "width":"75%",
                    "height":""
                })
                a2.css({
                    "bottom":"227px",
                    "top":"",
                    "left":"0",
                    "width":"75%",
                    "height":""
                })
                a3.css({
                    "bottom":"174px",
                    "top":"",
                    "left":"0",
                    "right":"0",
                    "width":"75%",
                    "height":""
                })
                a4.css({
                    "top":"",
                    "bottom":"121px",
                    "left":"0",
                    "right":"0",
                    "width":"75%",
                    "height":""
                })
                function none(x){
                    console.log(x)
                    x.css("visibility","visible")
                }
            }
            if(left<b){
                gj2()
                a4.css({
                    "top":"470px",
                    "bottom":"",
                    "visibility":"visible"
                })
                input.css({
                    "display":"block",
                    "transition":"all 0.5s linear"
                })
                canMove=false;
            }
        }
    }
})
gj.mouseup(function(e){
    canMove=false;
})

var cbl=0;
var i=0;
var timer;
gj.on("dblclick",function(){
    if(gj.css("height")=="80px") {
        i++
        if(i==2){
            clearInterval(timer);
            i=0;
        }else{
            timer=setInterval(function () {
                document.documentElement.scrollTop++;
            },30)
        }
    }else if(gj.css("height")=="480px"){
        gj1()
        input.css("display","none")
    }
    return timer;
})
function gj1(){
    gj.css({
        "height":"5rem",
        "width":"5rem",
        "top":"50%",
        "bottom":"50%",
        "left":"92%",
        "borderRadius":"50%",
        "marginTop":"",
        "marginLeft":""
    })
}
function gj2(){
    gj.css({
        "height":"480px",
        "width":"480px",
        "top":"50%",
        "left":"50%",
        "borderRadius":"3%",
        "marginTop":"-240px",
        "marginLeft":"-240px",
        "transition":"all 0.5s linear"
    })
}
function gj3(){
    gj.css({
        "height":"386px",
        "width":"5rem",
        "top":"30%",
        "left":"92%",
        "borderRadius":"2%",
        "transition":"opacity,width,height 0.5s linear"
    })
}



/*var gh=gj.style;
 if(gh.width="5rem"){
 gh.width=gh.height="10rem";
 }else{
 gh.width=gh.height="5rem";
 }*/
//ѡȡ��ɫ
var color=$("#cbl").children(0);
color.attr("value","#f4f4f4")
var myBody=$("#my_body");
function co(){
    var clr=color.val();
    myBody.css("background",`${clr}`);
}



$(".tran00").hover(function () {
    var tran=$(this).children()
    tran.css({
        "transform":"rotatex(-90deg)",
        "transition":"All 0.2s linear"
    })
}, function () {
    var tran=$(this).children()
    tran.css({
        "transform":"rotatex(0deg)"
    })
})


var all=$(".xf").parent()
var h6=$(".xf").children("h6")
all.mouseenter(function (e) {
	e.preventDefault();
	$(".xf").css({
		"height":"28rem",
		"transition":"0.5s linear"
	})
}).mouseleave(function (e) {
    e.preventDefault();
    $(".xf").css({
        "height":"0rem",
        "transition":"0.5s linear"
    })
})
h6.mouseenter(function(e){
	e.preventDefault();
	var h6=$(this)
	h6.next().css({
		"height":"3rem",
		"transition":"0.5s linear"
	})
	h6.siblings("h6").next().css({
		"height":"0px",
		"transition":"0.5s linear"
	})
})