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