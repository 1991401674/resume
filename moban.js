/*$(".tran").mouseenter(function (e) {
    e.preventDefault()
    var tran=$(this)
    tran.css({
        "transform":"rotatex(-90deg)",
        "transition":"All 0.2s linear"
    })
})
$(".tran").mouseleave(function (e) {
    e.preventDefault()
    var tran=$(this).parent();
    tran.css({
        "transform":"rotatex(0deg)"
    })
})
*/
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