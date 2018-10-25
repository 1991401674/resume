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
}