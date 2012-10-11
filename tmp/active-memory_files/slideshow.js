$(document).ready(function(){    
	
	// Tiny Carousel Init      
	$('#slideshow').tinycarousel();

	// Circle Player Init	
	var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
	{
	
		oga: "http://ubuntu.hbr1.com:19800/trance.ogg"
	}, {
		cssSelectorAncestor: "#cp_container_1",
		volume: 1
	});
});
