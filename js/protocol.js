document.addEventListener('DOMContentLoaded', () => {  
    const buttons = document.querySelectorAll('.toggle-button');  
    const contents = document.querySelectorAll('.content');  

    buttons.forEach((button, index) => {  
        button.addEventListener('click', () => {  
            const content = contents[index];  

            // 暂时禁用过渡效果  
            content.classList.add('transition-none');  

            // 切换显示状态  
            content.classList.toggle('show');  

            setTimeout(() => {  
                content.classList.remove('transition-none');  
            }, 0);  
        });  
    });  
});  