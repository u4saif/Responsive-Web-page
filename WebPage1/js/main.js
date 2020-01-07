jQuery(document).ready(function(){
    "use strict";
    $('#slider-casula').carouFredSel({
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
function datetime(){
let date=new Date;
fdate=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
document.getElementById("date").innerHTML=fdate;
}

datetime();
setInterval(datetime,1000);