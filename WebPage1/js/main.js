JQuery(document).ready(function(){
    "use strict";
    $('#slider-casula').carofacial({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            item:1,
            duration: 500,
            pauseOnhover:true
        },
        auto:true,
        item:
        {
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
            pagination:{
                container:".sliderpager",
                pageAnchorBuilder:false
            }
        
    });
    $(window).scroll(function(){
        var top=$(window).scrollTop();
            if (top>=60){
                $("header").addClass('secondary');
            }
            else 
                if ($("header").hasClass('secondary')){  
                    $("header").removeClass('secondary');

                }
    });
});