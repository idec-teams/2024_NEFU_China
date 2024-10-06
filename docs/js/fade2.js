function handleScroll() {
    const elements1 = document.querySelectorAll('.fade-element1');
    const elements2 = document.querySelectorAll('.fade-element2');


    // 获取视口高度
    const viewportHeight = window.innerHeight;

    // 处理 .fade-element1 元素
    elements1.forEach(element => {
        // 获取元素的位置
        const elementRect = element.getBoundingClientRect();
        const top = elementRect.top;
        const bottom = elementRect.bottom;

        // 设置渐显和渐隐的阈值
        const fadeStart = viewportHeight * 19 / 20;  // 视口高度的
        const fadeEnd = viewportHeight * 1 / 20;    // 视口高度的

        if (bottom < fadeEnd || top > fadeStart) {
            // 物块完全不在目标区域内
            element.style.opacity = '0';
            element.style.transform = 'translateX(-50vh) rotate(0deg)';//translateX(-50vh) rotate(-5deg)
        } else if (top >= fadeEnd && bottom <= fadeStart) {
            // 物块完全在目标区域内
            element.style.opacity = '1';
            element.style.transform = 'translateX(0) rotate(0deg)';
        } else {
            // 物块在目标区域内部分重叠
            const fadeRange = fadeStart - fadeEnd;
            const overlapStart = Math.max(top, fadeEnd);
            const overlapEnd = Math.min(bottom, fadeStart);
            const overlapHeight = overlapEnd - overlapStart;
            const opacity = overlapHeight / fadeRange;
            element.style.opacity = opacity;
            
            // 计算渐隐时的平移效果
            const translateX = -50 * (1 - opacity) + 'vh';
            const rotate = 0 * (1 - opacity) + 'deg';//-5 * (1 - opacity) + 'deg'
            element.style.transform = 'translateX(${translateX}) rotate(${rotate})';
        }
    });

    // 处理 .fade-element2 元素
    elements2.forEach(element => {
        // 获取元素的位置
        const elementRect = element.getBoundingClientRect();
        const top = elementRect.top;
        const bottom = elementRect.bottom;

        // 设置渐显和渐隐的阈值
        const fadeStart = viewportHeight * 19 / 20;  // 视口高度的七分之四位置
        const fadeEnd = viewportHeight * 1 / 20;    // 视口高度的三分之一位置

        if (bottom < fadeEnd || top > fadeStart) {
            // 物块完全不在目标区域内
            element.style.opacity = '0';
            element.style.transform = 'translateX(50vh) rotate(0deg)';//translateX(50vh) rotate(5deg)
        } else if (top >= fadeEnd && bottom <= fadeStart) {
            // 物块完全在目标区域内
            element.style.opacity = '1';
            element.style.transform = 'translateX(0) rotate(0deg)';
        } else {
            // 物块在目标区域内部分重叠
            const fadeRange = fadeStart - fadeEnd;
            const overlapStart = Math.max(top, fadeEnd);
            const overlapEnd = Math.min(bottom, fadeStart);
            const overlapHeight = overlapEnd - overlapStart;
            const opacity = overlapHeight / fadeRange;
            element.style.opacity = opacity;
            
            // 计算渐隐时的缩放效果
            const scale = 0.8 + 0.2 * opacity;
            const rotate = 0 * (1 - opacity) + 'deg';//10 * (1 - opacity) + 'deg'
            element.style.transform = `scale(${scale}) rotate(${rotate})`;
        }
    })
    ;
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll); // 处理窗口尺寸变化
handleScroll(); // 初始调用，以确保在页面加载时也能正确显示






document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text9');
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 配置对象，根据不同的类设置触发点和动画类
    const config = {                        // 若无.FIoS则需要在上面添加 
        
        text9: {
            triggerPoint: 0.1, // 根据需要设置
            animationClass: 'animate_text9'
        },
        default: {/*只有.FIoS的执行这个*/ 
            triggerPoint: 0.33, // 视口下方三分之一处
            //animationClass: 'animate_FIoS_default'
        }
    };

    function checkVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;

        textBlocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            const blockTop = rect.top + scrollTop;

            let triggerPoint = config.default.triggerPoint;
            let animationClass = config.default.animationClass;

            // 根据块的类名选择配置
            Object.keys(config).forEach(className => {
                if (block.classList.contains(className)) {
                    triggerPoint = viewportHeight * config[className].triggerPoint;
                    animationClass = config[className].animationClass;
                }
            });

            if (scrollTop > lastScrollTop) {
                // 向下滚动
                if (blockTop < scrollTop + viewportHeight - triggerPoint && rect.bottom >= 0) {
                    block.classList.add('visible');
                    block.classList.add(animationClass);
                }
            } else {
                // 向上滚动
                if (blockTop < scrollTop + viewportHeight && rect.bottom >= 0) {
                    block.classList.add('visible');
                    block.classList.add(animationClass);
                }
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初始检查，以防已滚动到部分内容
});