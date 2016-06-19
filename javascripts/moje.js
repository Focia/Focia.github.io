/* Facebook LikeBox */

jQuery(document).ready(function() {
	jQuery(".noopslikebox").hover(function() {
			jQuery(this).stop().animate({right: "0"}, "medium");}, 
			function() {jQuery(this).stop().animate({right: "-250"}, "medium");}, 500);});

