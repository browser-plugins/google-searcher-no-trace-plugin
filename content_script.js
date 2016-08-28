console.log("get google search page content, 0.0.4V");

$('#ires').css({'background':'pink'});  
$('#ires').unbind();
$('#ires').unbind('onmousedown');
$('#ires a[onmousedown][onmousedown!=""]').each(function(index) {   
    console.log(index + '.  '+$(this).attr('href'));
    var oldUrl=$(this).attr('href');
    $(this).removeAttr('onmousedown');
    $(this).removeAttr('href');
    $(this).removeAttr('target');
    $(this).attr('targetHref', oldUrl);
    $(this).click(function(event) {
        event.stopPropagation();
        console.log('click event stop');
    });
     $(this).mousedown(function(event) {
        event.stopPropagation();
        console.log('mousedown event stop');
        $(this).attr('href', $(this).attr('targetHref'));
        $(this).attr('target', '_blank');
        return false;
    });
});

console.log('content_script run end');