$(document).ready(function() {
    crossroads.addRoute('/{page}', function(page){
        $('#content').load(page + ".html");
    });
    //var a = document.querySelectorAll('a')
    // for(i=0; i<a.length; i++){
    //     a[i].onclick=function(e){
    //         e.preventDefault();
    //         crossroads.parse('/' + this.href.split('/').pop());
    //     }
    // }
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
