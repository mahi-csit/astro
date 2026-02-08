var stick_show_height = 100;
// navbar_height_minus was causing negative padding on some pages.
// Use the navbar height directly when fixing the navbar to avoid overlap.
window.onscroll = function() {myFunction()};
var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;

function myFunction() {
	
  if ((window.pageYOffset >= sticky + navbar_height+stick_show_height)) {
    // make navbar sticky and add padding equal to navbar height to prevent overlap
    navbar_sticky.classList.add("sticky")
    document.body.style.paddingTop = navbar_height + 'px';
	
  } else {
	  //console.log('ELSE window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.remove("sticky");
    document.body.style.paddingTop = '0'
	
  }
}


$(document).ready(function () { 
            $('.dropdown').hover(function () { 
                $(this).addClass('show'); 
                $(this).find('.dropdown-menu').addClass('show'); 
            }, function () { 
                $(this).removeClass('show'); 
                $(this).find('.dropdown-menu').removeClass('show'); 
            }); 
        }); 