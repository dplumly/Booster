

$(function(){


$('#icon-toggle' ).bind( 'click', function(e) {
		$( this ).toggleClass( 'active' );
		e.preventDefault();
		
		$( '#menu-open' ).toggleClass( 'active' );
		$( '.menu-main-wrap' ).toggleClass( 'active' );
		
		$( '.menu-effect_1' ).toggleClass( 'active' );
		
		$( '.menu-main-overlay' ).toggleClass( 'active' );
		
		
			
});

$( '.menu-main-overlay' ).bind( 'click', function() {

	$( this ).removeClass( 'active' );
	$( '#menu-open' ).removeClass( 'active' );
	$( '#icon-toggle' ).removeClass( 'active' );
	
	$( '.menu-main-wrap' ).removeClass( 'active' );
	
	$( '.menu-effect_1' ).removeClass( 'active' );



 });
 
 });