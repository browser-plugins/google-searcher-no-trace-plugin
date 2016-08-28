console.log("get google search page content, 3.3V");

console.log($('#ires'));

$('#ires').css({'background':'pink'});  
$('#ires a').each(function(index) {
 //$(this).attr('href', $(this).attr('data-href'));
 //$(this).attr('href', '#');
 //$(this).attr('onmousedown', 'console.log("onmousedown"); return GSOnMouseDown(this); ');
 console.log(index + '.  '+$(this).attr('href'));
 //console.log(index + '.  '+$(this).attr('data-href'));
});

/*function GSOnMouseDown(obj){
    //console.log('GSOnMouseDown:' + obj);
    //$(obj).attr()
    return false;
}*/

console.log('content_script run end');