document.addEventListener('DOMContentLoaded', function() {
    // 获取所有侧边栏链接
    const sideLinks = document.querySelectorAll('.broadside, .side1, .side2, .sied3, .c1_1, .c1_2, .c1_3, .c1_4, .c2_1, .c2_2, .c3_1, .c3_2');

    sideLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为

            // 获取目标元素的 id
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // 使用 scrollIntoView 实现平滑滚动
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    function handleScroll() {
        const broadside = document.querySelector('.broadside');
        const b1 = document.querySelector('.side1'); // 不可以All
        const b2 = document.querySelector('.side2');
        const b3 = document.querySelector('.side3');

        const c1_1 = document.querySelector('.c1_1');
        const c1_2 = document.querySelector('.c1_2');
        const c1_3 = document.querySelector('.c1_3');
        const c1_4 = document.querySelector('.c1_4');
        const c2_1 = document.querySelector('.c2_1');
        const c2_2 = document.querySelector('.c2_2');
        const c3_1 = document.querySelector('.c3_1');
        const c3_2 = document.querySelector('.c3_2');

        const vh = window.innerHeight; // 当前视口高度

        // 使用 vh 单位计算阈值
        const hideThreshold = 0.2 * vh; // 20% 高度
        const sizeChangeThreshold1 = 0.5 * vh; // 50% 高度
        const sizeChangeThreshold2 = 0.65 * vh; // 65% 高度
        const sizeChangeThreshold3 = 0.75 * vh; // 75% 高度

        if (window.scrollY < 0.3 * vh) {
            // 恢复初始样式
            b1.style.cssText = '';
            b2.style.cssText = '';
            b3.style.cssText = '';
            c1_1.style.cssText = '';
            c1_2.style.cssText = '';
            c1_3.style.cssText = '';
            c1_4.style.cssText = '';
            c3_1.style.cssText = '';
            c3_2.style.cssText = '';
            broadside.style.cssText = '';
        } else {
            broadside.style.position = 'fixed';
            broadside.style.marginTop = '40vh';
            broadside.style.marginRight = '1.1vh';
        }


        if (window.scrollY >= 0.6 * vh && window.scrollY < 14.8 * vh) {
            b1.style.fontSize = "3.5vh";
            b1.style.color = "rgb(60, 60, 195)";
            c1_1.style.display = 'block';
            c1_2.style.display = 'block';
            c1_3.style.display = 'block';
            c1_4.style.display = 'block';

            if (window.scrollY >= 0.7 * vh && window.scrollY < 2.6 * vh) {
                c1_1.style.fontSize = "2.8vh";
                c1_1.style.color = "#ac5483";
            }else{
                c1_1.style.cssText = '';
                c1_1.style.display = 'block';
            }

            if (window.scrollY >= 2.6 * vh && window.scrollY < 4.9 * vh) {
                c1_2.style.fontSize = "2.8vh";
                c1_2.style.color = "#ac5483";
            }else{
                c1_2.style.cssText = '';
                c1_2.style.display = 'block';
            }

            if (window.scrollY >= 4.9 * vh && window.scrollY < 5.9 * vh) {
                c1_3.style.fontSize = "2.8vh";
                c1_3.style.color = "#ac5483";
            }else{
                c1_3.style.cssText = '';
                c1_3.style.display = 'block';
            }

            if (window.scrollY >= 5.9 * vh && window.scrollY < 14.8 * vh) {

                c1_4.style.fontSize = "2.8vh";
                c1_4.style.color = "#ac5483";
            }else{
                c1_4.style.cssText = '';
                c1_4.style.display = 'block';
            }
        }else{
            b1.style.cssText = '';
        }

       if (window.scrollY >= 14.8 * vh && window.scrollY < 16.0 * vh) {
            b2.style.fontSize = "3.5vh";
            b2.style.color = "rgb(60, 60, 195)";

            // 清除其他元素的样式
            c1_1.style.cssText = '';
            c1_2.style.cssText = '';
            c1_3.style.cssText = '';
            c1_4.style.cssText = '';
            c3_1.style.cssText = '';
            c3_2.style.cssText = '';
            b1.style.cssText = '';
            b3.style.cssText = '';
        }else{
            b2.style.cssText = '';
        }


        if (window.scrollY >= 16.0 * vh && window.scrollY < 24.0 * vh) {
            b3.style.fontSize = "3.5vh";
            b3.style.color = "rgb(60, 60, 195)";
            c3_1.style.display = 'block';
            c3_2.style.display = 'block';

            if (window.scrollY >= 16.0 * vh && window.scrollY < 19.8 * vh) {
                c3_1.style.fontSize = "2.8vh";
                c3_1.style.color = "#ac5483";
            }else{
                c3_1.style.cssText = '';
                c3_1.style.display = 'block';
            }

            if (window.scrollY >= 19.8 * vh && window.scrollY < 24.0 * vh) {
                c3_2.style.fontSize = "2.8vh";
                c3_2.style.color = "#ac5483";
            }else{
                c3_2.style.cssText = '';
                c3_2.style.display = 'block';
            }
        }else{
            b3.style.cssText = '';
        }

        if (window.scrollY >= 24.0 * vh) {
            // 恢复初始样式
            b1.style.cssText = '';
            b2.style.cssText = '';
            b3.style.cssText = '';
            c1_1.style.cssText = '';
            c1_2.style.cssText = '';
            c1_3.style.cssText = '';
            c1_4.style.cssText = '';
            c3_1.style.cssText = '';
            c3_2.style.cssText = '';
        }
    }

    // 页面加载时立即执行一次
    handleScroll();

    // 监听页面滚动事件
    window.addEventListener('scroll', handleScroll);
});
