/***
    countdown.js https://github.com/queentvxq
****/    
    var secs =59; //count down seconds

    var t = setInterval(function(){
        

        $('#countText').text(secs+'秒后倒计时结束');
        if(secs == 0){
            $("#takVad").text('发送验证码');
            
            _self.canSend = true;
            clearInterval(t);
        }
        secs --;

    },1000);



    var speed=30;
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth-tab.scrollLeft<=0){
            tab.scrollLeft-=tab1.offsetWidth
        }
        else{
            tab.scrollLeft++;
        }
    }
    var MyMar=setInterval(Marquee,speed);
    tab.onmouseover=function() {clearInterval(MyMar)};
    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};