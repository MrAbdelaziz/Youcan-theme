function MrAbdelaziz_popup(){
    document.getElementById("MrAbdelaziz_popup").style.display='none';
}

function setCookie( c_name, value, exdays ) {
	var c_value = escape(value);
	if (exdays) {
		var exdate = new Date();
		exdate.setDate( exdate.getDate() + exdays );
		c_value += '; expires=' + exdate.toUTCString();
	}
	document.cookie = c_name + '=' + c_value;
}

function getCookie( c_name ) {
	var i, x, y, cookies = document.cookie.split( ';' );

	for ( i = 0; i < cookies.length; i++ ) {
		x = cookies[i].substr( 0, cookies[i].indexOf( '=') );
		y = cookies[i].substr( cookies[i].indexOf( '=') + 1 );
		x = x.replace( /^\s+|\s+$/g, '' );

		if ( x === c_name ) {
			return unescape( y );
		}
	}
}
window.setTimeout(function(){ 
	// When the cookie exists, do not show the popup!
	if (getCookie('Popupdisplayed')) {
		return;
	}

	    document.getElementById("MrAbdelaziz_popup").style.display='flex';

	// The popup was displayed. Set the cookie for 1 day.
	setCookie('Popupdisplayed', 'yes', 1);
}, 3000);

if ( window.location.pathname == '/' ){
 $('section').first().css({background: "center 0 no-repeat url(https://i.ibb.co/BjNFkbw/my.png)"});
 $('.categories-style-1').css("grid-template-columns", "repeat(2,1fr)");
 $('.category-details').css("border-top", "0");
$('.review-details').css("height", "160px");
}
