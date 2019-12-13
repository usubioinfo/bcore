$( 'document' ).ready( function () {
	var S = window.location.pathname;
    S = S.substring(1, S.length);
    console.log(S);
    $('a[href^="' + S + '"]').parent().addClass('active');

});


