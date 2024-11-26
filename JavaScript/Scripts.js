window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let titleBar = document.getElementById('cabezera');
    let newHeight = 600 - scrollPosition;
    if (newHeight < 100) {
        newHeight = 100;
    }
 
 
    titleBar.style.height = newHeight + 'px';
 });
 