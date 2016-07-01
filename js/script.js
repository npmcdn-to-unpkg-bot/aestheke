$(document).ready(function(){
	var $grid = $('.grid').imagesLoaded( function() {
		$grid.masonry({
		  itemSelector: '.grid-item',
		  // use element for option
		  gutter: 5,
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});
	});
	$(".portfolio").click(function(){
		firstAnimation();
	});
  $('#readMore').click(function(){
    $('#what-we-do').show();
  });
});
