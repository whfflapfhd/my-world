$(function() {
    $('.photo-list img').Lazy({
        visibleOnly: true,
        effect: "fadeIn",
        effectTime: 500,
        threshold: 0,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    $(document.body).on('click','.photo-list li',function(){
        $(this).addClass('fixed').append('<button></button>');
    }).on('click','.fixed button',function(){
        $('.fixed').removeAttr('class').find('button').remove();
        return false
    });
});