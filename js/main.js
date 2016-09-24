$(document).ready(function(){
	$('.parallax').parallax();
	$('.carousel').carousel({
		padding: 10,
		time_constant: 130
	});
	$('.scrollspy').scrollSpy();
	$('.materialboxed').materialbox();
	$('.fixed-action-btn').openFAB();
	$('.tooltipped').tooltip({delay: 50});
	
  var options = [
    {selector: '#test', offset: 60, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
  ];
  Materialize.scrollFire(options);
});