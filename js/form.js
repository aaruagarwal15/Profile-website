$(document).ready(function(){
    $('#full_name').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name && is_name.length>2){
            input.removeClass("invalid").addClass("valid");
            $('#nameHelp').css('visibility','hidden');
        }
        else{
            input.removeClass("valid").addClass("invalid");
            $('#nameHelp').css('visibility', 'visible');
        }
    });
    
    $('#message').on('input', function() {
        var input=$(this);
        var is_msg=input.val();
        if(is_msg && is_msg.length>1){
            input.removeClass("invalid").addClass("valid");
            $('#msgHelp').css('visibility','hidden');
        }
        else{
            input.removeClass("valid").addClass("invalid");
            $('#msgHelp').css('visibility', 'visible');
        }
    });
    $('#f_email').on('input', function() {
        var input=$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email=re.test(input.val());
        if(is_email){
            input.removeClass("invalid").addClass("valid");
            $('#emailHelp').css('visibility', 'hidden');
        }
        else{
            input.removeClass("valid").addClass("invalid");
            $('#emailHelp').css('visibility', 'visible');
        }
    });
    
});