document.getElementById("menu-icon").addEventListener("click", function() {
    var nav = document.querySelector("nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
    this.classList.toggle("active");
});


function updateNavToggles() {  
const mediaQuery = window.matchMedia("(max-width: 959px)");  
const navToggles = document.querySelectorAll(".nav_ul_li_a");  

navToggles.forEach(toggle => {
const submenu = toggle.nextElementSibling;
if (mediaQuery.matches) {  
    // 如果媒体查询匹配，则添加事件监听器  
    toggle.removeEventListener("click", toggleClickHandler);  
    toggle.addEventListener("click", toggleClickHandler);  
} else {  
    // 如果媒体查询不匹配，则移除事件监听器并恢复子菜单样式  
    toggle.removeEventListener("click", toggleClickHandler);  
    if (submenu) {
        submenu.style.display = ""; // 恢复原来的样式
    }
}  
});  
}  

// 定义点击事件处理函数  
function toggleClickHandler(event) {  
event.preventDefault(); // 防止链接跳转  
var submenu = this.nextElementSibling; // 获取下一个兄弟元素  

if (submenu && (submenu.style.display === "block" || submenu.offsetWidth > 0 || submenu.offsetHeight > 0)) {  
// 使用offsetWidth和offsetHeight作为额外的检查  
submenu.style.display = "none"; // 隐藏子菜单  
} else {  
submenu.style.display = "block"; // 显示子菜单  
}  
}  

// 初始调用updateNavToggles函数  
updateNavToggles();  

// 添加监听器以在窗口大小变化时更新导航项  
window.addEventListener("resize", updateNavToggles);



document.querySelectorAll('.nav_ul_li_a').forEach((elem) => {
    elem.onmouseenter =
    elem.onmouseleave = (e) => {
        const tolerance = 10;
        const left = 0;
        const right = elem.clientWidth;
        let x = e.pageX - elem.offsetLeft;

        if (x - tolerance < left) x = left;
        if (x + tolerance > right) x = right;

        elem.style.setProperty('--x', `${x}px`);
    }
});