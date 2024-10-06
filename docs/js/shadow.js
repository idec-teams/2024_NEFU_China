document.addEventListener("DOMContentLoaded", function() {
    const customTextContainer = document.querySelector('.custom-text-container');
    const textContent = customTextContainer.textContent;
    const textArray = textContent.split('');
    
    customTextContainer.innerHTML = ''; // 清空文本内容

    textArray.forEach(function(char) {
      const spanElement = document.createElement('span');
      if (char === ' ') {
        spanElement.classList.add('custom-space');
      } else {
        spanElement.classList.add('custom-letter');
      }
      spanElement.textContent = char;
      customTextContainer.appendChild(spanElement);
    });
  });