document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    
    const urlParams = new URLSearchParams(window.location.search);
    const forceSplash = urlParams.get('showSplash') === 'true';
    const splashShown = sessionStorage.getItem('splashShown');

    if (splashShown && !forceSplash) {
        if (splashScreen) {
            splashScreen.style.display = 'none';
        }
    } else {
        setTimeout(function() {
            if (splashScreen) {
                splashScreen.style.display = 'none';
                sessionStorage.setItem('splashShown', 'true');
            }
        }, 2500);
    }
});
