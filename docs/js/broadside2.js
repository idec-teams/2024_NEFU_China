document.addEventListener('DOMContentLoaded', function() {
    const sideLinks = document.querySelectorAll('.broadside a');
    const broadsideContainer = document.querySelector('.broadside');
    const styleMap = {
        'side1': { fontSize: '1.7vw', color: '#c1dd0d', display: 'block'},
        'side2': { fontSize: '1.7vw', color: '#c1dd0d', display: 'block'},
        'side3': { fontSize: '1.7vw', color: '#c1dd0d', display: 'block'},
        'side4': { fontSize: '1.7vw', color: '#c1dd0d', display: 'block'},
        'side5': { fontSize: '1.7vw', color: '#c1dd0d', display: 'block'},
        'side6': { fontSize: '1.7vw', color: '#c1dd0d', display: 'block'},
        

        'side2_1': { fontSize: '1.7vw', color: '#feb737' }


    };

    // Smooth scroll to target section
    sideLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let activeSectionId1 = null;
    let activeSectionId2 = null;

    // Function to check scroll position and highlight the corresponding link
    function checkScroll() {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.2; // Trigger point for activation
    
        let newActiveSectionId1 = null;
        let newActiveSectionId2 = null;
    
        document.querySelectorAll('.section1').forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
    
            if (sectionTop <= triggerPoint && sectionBottom >= triggerPoint) {
                newActiveSectionId1 = section.id;
            }
        });
    
        document.querySelectorAll('.section2').forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
    
            if (sectionTop <= triggerPoint && sectionBottom >= triggerPoint) {
                newActiveSectionId2 = section.id;
            }
        });
    
        if (newActiveSectionId1 !== activeSectionId1 || newActiveSectionId2 !== activeSectionId2) {
            // 如果到section
            if (newActiveSectionId1 || newActiveSectionId2) {
                broadsideContainer.style.position = 'fixed';
                broadsideContainer.style.marginTop = '16vh';
                broadsideContainer.style.marginRight = '1.1vh';

            } else {
                broadsideContainer.style.position = ''; 
                broadsideContainer.style.marginTop = '';
                broadsideContainer.style.marginRight = '';
            }

            sideLinks.forEach(link => {
                const linkId = link.getAttribute('href').substring(1);
                const styles = styleMap[linkId];
    
                if (linkId === newActiveSectionId1 || linkId === newActiveSectionId2) {
                    link.style.fontSize = styles.fontSize;
                    link.style.color = styles.color;
                    link.style.display = styles.display; 
                    link.style.position = styles.position; 
                    link.style.marginTop = styles.marginTop;
                    link.style.marginRight = styles.marginRight;

                }
                else {
                    link.style.fontSize = '';
                    link.style.color = '';
                    link.style.display = ''; // Reset display property
                }
                if (linkId.startsWith('side1') && newActiveSectionId1 && newActiveSectionId1.startsWith('side1')) {
                    // 有以 side1 开头的链接（包括 side1_1、side1_2、side1_3 和 side1_4）都会应用 side1 的样式
                    const side1Styles = styleMap['side1'];
                    link.style.display = side1Styles.display;
                } 
                else if (linkId.startsWith('side2') && newActiveSectionId1 && newActiveSectionId1.startsWith('side2')) {
                    const side3Styles = styleMap['side2'];
                    link.style.display = side3Styles.display;
                }
                else if (linkId.startsWith('side3') && newActiveSectionId1 && newActiveSectionId1.startsWith('side3')) {
                    const side3Styles = styleMap['side3'];
                    link.style.display = side3Styles.display;
                }
                else if (linkId.startsWith('side4') && newActiveSectionId1 && newActiveSectionId1.startsWith('side4')) {
                    const side4Styles = styleMap['side4'];
                    link.style.display = side4Styles.display;
                } else if (linkId.startsWith('side5') && newActiveSectionId1 && newActiveSectionId1.startsWith('side5')) {
                    const side5Styles = styleMap['side5'];
                    link.style.display = side5Styles.display;
                } else if (linkId.startsWith('side6') && newActiveSectionId1 && newActiveSectionId1.startsWith('side6')) {
                    const side6Styles = styleMap['side6'];
                    link.style.display = side6Styles.display;
                }                
                else {
                    link.style.fontSize = '';
                    link.style.color = '';
                    link.style.display = ''; // Reset display property
                }
            });

            activeSectionId1 = newActiveSectionId1;
            activeSectionId2 = newActiveSectionId2;
        }
    }
    
    // Function to check window width and adjust broadside visibility
    function checkWindowWidth() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1050) {//   媒体查询->小于1050px
            broadsideContainer.style.display = 'none'; // 隐藏 broadside
            window.removeEventListener('scroll', checkScroll); // 停止滚动事件监听
        } else {
            broadsideContainer.style.display = 'block'; // 显示 broadside
            window.addEventListener('scroll', checkScroll); // 重新启动滚动事件监听
            checkScroll(); // 刷新 JS 程序状态
        }
    }

    // Listen for window resize events
    window.addEventListener('resize', checkWindowWidth);
    checkWindowWidth(); // Initial check on page load



    // Initial scroll check
    checkScroll(); 
});