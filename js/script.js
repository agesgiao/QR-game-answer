// script.js
document.addEventListener('DOMContentLoaded', function() {
    var openButton = document.querySelector('.open');
    var closeButton = document.querySelector('.close');
    var menu = document.querySelector('.menu');

    openButton.addEventListener('click', function() {
        menu.style.display = 'block';
        openButton.style.display = 'none';
        closeButton.style.display = 'inline';
    });

    closeButton.addEventListener('click', function() {
        menu.style.display = 'none';
        openButton.style.display = 'inline';
        closeButton.style.display = 'none';
		
		
    });
});
