$(document).on('pop-initialized', function(){
  $('.asset').live('initialize', function(e, asset){

		$("a.fancybox").fancybox();

  });

  $('.asset-type-imagegroup').live('initialize', function(e, asset){
  	$(this).find('.slideshow .images').cycle({
				fx: 'fade',
				timeout: Math.floor(Math.random() * 8000) + 3000,
				delay: Math.floor(Math.random() * 6000) + 1000
	    });
  });

  $('.asset').live('destroy', function(e, asset){

  });

  $('.columnizer-col3 .body').expander({
	  slicePoint: 270,
	  widow: 2,
	  expandEffect: 'show',
	  userCollapseText: '[<]',
	  expandText: '[…]'
	});

	/* $(".columnizer-col2 .asset-size-2").equalHeights(); */
});

