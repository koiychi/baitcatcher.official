//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY
});

const imageItems = document.querySelectorAll('.image-item');

imageItems.forEach(item => {
    const image = item.querySelector('.circle-img');
    const text = item.querySelector('.highlighted-name');

    item.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        image.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        if (text) {
            text.style.color = '#FFA500';
            text.style.transition = 'color 0.3s ease';
        }
    });

    item.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = 'none';
        if (text) {
            text.style.color = '#FF6347';
        }
    });
});