$(function(){//login.html中jquery-3.2.1.js
    $(".loo").click(function(){
      var uname=$(".uname").val();
      var upwd=$(".upwd").val();
      (async function(){
        var res=await $.ajax({
          url:"http://localhost:2000/user/login",
          type:"post",
          data:{uname,upwd},
          dataType:"json"
        })
        console.log(res)
        if(res.ok==0){
           alert(res.msg); 
        }
        else{
          alert("登录成功！即将返回来时的页面...")
          location.href="index.html";
        }
      })()
    })
  })













window.onscroll=function() {
    var scrollTop =
        $(document).scrollTop();
    var a = $(".my_title")
    if (scrollTop >= 150) {
        a.css({
            "position": "fixed",
            "top": "0",
            "left": "0",
            "right": "0",
            "margin": "auto",
            "zIndex": "999",
            "background": "#000",
            "width": "100%"
        })
    }else{
        a.css("position","")
    }
}
var reg=$(".register")
var close=$(".close")
var ljdl=close.parent().next().children().eq(1)
reg.click(function(e){
    e.preventDefault();
    var reg= e.target;
    var reg1=$(".bg_1").children().children("div")
    reg1.toggleClass("d-none")
})
close.click(function(e){
    e.preventDefault();
    var close= e.target;
    var reg1=$(".bg_1").children().children("div")
    reg1.toggleClass("d-none")
})
ljdl.click(function(e){
    e.preventDefault();
    var close= e.target;
    var reg1=$(".bg_1").children().children("div")
    reg1.toggleClass("d-none")
})

//�˺�/����  ��֤
var a=reg.parent().next().first()
function un(){
    var b= a.next().children().val()
    if(!b.length)
        a.html("Null")
    else  if(b.length>11 || b.length<6)
        a.html("uname !!!")
    else
        a.html("")
}
function up(){
    var c= a.next().next().children().val()
    if(!c.length)
        a.html("Null")
    else if(c.length>11 || c.length<6)
        a.html("upwd !!!")
    else
        a.html("")
}
