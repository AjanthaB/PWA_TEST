(() => {
    // TODO add service worker code here
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('http://blog.ajanthab.com/PWA_TEST/static/js/sw.js')
            .then(function () { console.log('Service Worker Registered'); });
    }
})()