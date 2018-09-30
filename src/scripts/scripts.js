$(document).ready(function(){
	
	//mensagens do console
	console.log('%c PELICIONI WEB STUDIOS', 'background: #2193b0; color: white');

$('.carousel').carousel();
$('.collapse').collapse();

$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function(e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});


});