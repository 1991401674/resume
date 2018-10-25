//ÂÖ²¥Í¼
var bt=document.getElementById("my_bt")
bt.children[0].style.background="red";
function lbt(i){
    var ii=setInterval(function(){
        if(i>4){
            i=1
        }
        $("#myBlb").attr("src",`./img/l${i}.jpg`)
        bt.children[i-1].style.background="red";
        $(`#my_bt li:eq(${i-1})`).siblings().css("background","#7d7d7d")
        i++;
    },2000)
    $(`#my_bt li`).click(function (e) {
        var li= e.target;
        i=li.innerHTML;
        bt.children[i-1].style.background="red";
        $(`#my_bt li:eq(${i-1})`).siblings().css("background","#7d7d7d");
        $("#myBlb").attr("src",`./img/l${i}.jpg`)
    })
    $("#myBlb").mouseenter(function () {
        clearInterval(ii)
    })
    $("#myBlb").mouseleave(function () {
        lbt(i)
    })
}
lbt(2)


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
    var gj=document.getElementById("cbl");
    var a0=$(".a0");
    var a1=$(".a1");
    var a2=$(".a2");
    var a3=$(".a3");
    var a4=$(".a4");
    var a6=$(".a6");
    var doctop1=$("#f1").offset().top-101;
    var doctop2=$("#f2").offset().top-101;
    var doctop3=$("#f3").offset().top-101;
    var doctop4=$("#f4").offset().top-101;
    if(scrollTop>doctop1&&doctop2>scrollTop){
        ab(a1);
    }else if(scrollTop>doctop2&&doctop3>scrollTop){
        ab(a2)
    }else if(scrollTop>doctop3&&doctop4>scrollTop){
        ab(a3)
    }else if(scrollTop>doctop4&&doctop4+1000>scrollTop){
        ab(a4);
    }else if(scrollTop>doctop4+1000){
        ab(a6);
    }else if(scrollTop<doctop1-2000){
        ab(a0);
    }else{
        abs(a0);
        abs(a1);
        abs(a2);
        abs(a3);
        abs(a4);
        abs(a6);
    }
    function ab(x){
        x.css("background","green").siblings().css("background","#7d7d7d")
    }
    function abs(x){
        x.css("background","#7d7d7d")
    }
}