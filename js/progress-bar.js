window.onscroll = function() {
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var progress = (scrollTop / docHeight) * 100.0;//控制进度条长度
    document.getElementById('progress-bar').style.width = progress + '%';
};