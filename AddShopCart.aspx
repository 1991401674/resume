<!DOCTYPE html>
<html>
    <head>
        <title>未将对象引用设置到对象的实例。</title>
        <meta name="viewport" content="width=device-width" />
        <style>
         body {font-family:"Verdana";font-weight:normal;font-size: .7em;color:black;} 
         p {font-family:"Verdana";font-weight:normal;color:black;margin-top: -5px}
         b {font-family:"Verdana";font-weight:bold;color:black;margin-top: -5px}
         H1 { font-family:"Verdana";font-weight:normal;font-size:18pt;color:red }
         H2 { font-family:"Verdana";font-weight:normal;font-size:14pt;color:maroon }
         pre {font-family:"Consolas","Lucida Console",Monospace;font-size:11pt;margin:0;padding:0.5em;line-height:14pt}
         .marker {font-weight: bold; color: black;text-decoration: none;}
         .version {color: gray;}
         .error {margin-bottom: 10px;}
         .expandable { text-decoration:underline; font-weight:bold; color:navy; cursor:hand; }
         @media screen and (max-width: 639px) {
          pre { width: 440px; overflow: auto; white-space: pre-wrap; word-wrap: break-word; }
         }
         @media screen and (max-width: 479px) {
          pre { width: 280px; }
         }
        </style>
    </head>

    <body bgcolor="white">

            <span><H1>“/”应用程序中的服务器错误。<hr width=100% size=1 color=silver></H1>

            <h2> <i>未将对象引用设置到对象的实例。</i> </h2></span>

            <font face="Arial, Helvetica, Geneva, SunSans-Regular, sans-serif ">

            <b> 说明: </b>执行当前 Web 请求期间，出现未经处理的异常。请检查堆栈跟踪信息，以了解有关该错误以及代码中导致错误的出处的详细信息。

            <br><br>

            <b> 异常详细信息: </b>System.NullReferenceException: 未将对象引用设置到对象的实例。<br><br>

            <b>源错误:</b> <br><br>

            <table width=100% bgcolor="#ffffcc">
               <tr>
                  <td>
                      <code><pre>

行 18:         VerifyHelper vh=new VerifyHelper();
行 19:         string action = RequestData.GetStringByParams(&quot;action&quot;);
<font color=red>行 20:         long userid = vh.CurrentUser.Id;
</font>行 21:         switch (action)
行 22:         {</pre></code>

                  </td>
               </tr>
            </table>

            <br>

            <b> 源文件: </b> e:\website\mainsite\Shop.xtep.com\Ajax\AddShopCart.aspx.cs<b> &nbsp;&nbsp; 行: </b> 20
            <br><br>

            <b>堆栈跟踪:</b> <br><br>

            <table width=100% bgcolor="#ffffcc">
               <tr>
                  <td>
                      <code><pre>

[NullReferenceException: 未将对象引用设置到对象的实例。]
   Ajax_AddShopCart.Page_Load(Object sender, EventArgs e) in e:\website\mainsite\Shop.xtep.com\Ajax\AddShopCart.aspx.cs:20
   System.Web.UI.Control.OnLoad(EventArgs e) +102
   System.Web.UI.Control.LoadRecursive() +67
   System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +3810
</pre></code>

                  </td>
               </tr>
            </table>

            <br>

            <hr width=100% size=1 color=silver>

            <b>版本信息:</b>&nbsp;Microsoft .NET Framework 版本:4.0.30319; ASP.NET 版本:4.7.2106.0

            </font>

    </body>
</html>
<!-- 
[NullReferenceException]: 未将对象引用设置到对象的实例。
   在 Ajax_AddShopCart.Page_Load(Object sender, EventArgs e) 位置 e:\website\mainsite\Shop.xtep.com\Ajax\AddShopCart.aspx.cs:行号 20
   在 System.Web.UI.Control.OnLoad(EventArgs e)
   在 System.Web.UI.Control.LoadRecursive()
   在 System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
[HttpUnhandledException]: 引发类型为“System.Web.HttpUnhandledException”的异常。
   在 System.Web.UI.Page.HandleError(Exception e)
   在 System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
   在 System.Web.UI.Page.ProcessRequest(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
   在 System.Web.UI.Page.ProcessRequest()
   在 System.Web.UI.Page.ProcessRequest(HttpContext context)
   在 ASP.ajax_addshopcart_aspx.ProcessRequest(HttpContext context) 位置 c:\Windows\Microsoft.NET\Framework64\v4.0.30319\Temporary ASP.NET Files\root\ffe11d0b\d27b6785\App_Web_m4jtjy2c.6.cs:行号 0
   在 System.Web.HttpApplication.CallHandlerExecutionStep.System.Web.HttpApplication.IExecutionStep.Execute()
   在 System.Web.HttpApplication.ExecuteStep(IExecutionStep step, Boolean& completedSynchronously)
--><!-- 
此错误页可能包含敏感信息，因为 ASP.NET 通过 &lt;customErrors mode="Off"/&gt; 被配置为显示详细错误消息。请考虑在生产环境中使用 &lt;customErrors mode="On"/&gt; 或 &lt;customErrors mode="RemoteOnly"/&gt;。-->