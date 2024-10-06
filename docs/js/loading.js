// 等待页面加载完成
window.onload = function() {
    // 添加 hidden 类以隐藏加载动画
    document.querySelector('.loading').classList.add('hidden');
    document.querySelector('.loading_background').classList.add('hidden');
    
    // 确保在动画结束后再移除元素
    setTimeout(function () {
        document.querySelector('.loading').remove();
        document.querySelector('.loading_background').remove();
    }, 200);
};