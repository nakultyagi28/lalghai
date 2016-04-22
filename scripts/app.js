$(document).ready(function() {
    crossroads.addRoute('/{page}', function(page){
        $('#content').load(page + ".html");
    });

    window.addEventListener('hashchange', function() {
        var route = '/';
        var hash = window.location.hash;
        if(hash.length > 0){
           route = hash.split('#').pop();
        }
        crossroads.parse(route);
    });

    window.dispatchEvent(new CustomEvent('hashchange'));
});
