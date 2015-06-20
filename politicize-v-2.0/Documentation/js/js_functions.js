	$(function(){
	if (!!$('.nav-sec').offset()) {
		var stickyTop = $('.nav-sec').offset().top;
		$(window).scroll(function(){
		  var windowTop = $(window).scrollTop(); 
		  if (stickyTop < windowTop){
			$('.nav-sec').addClass("stickyactive");
		  }
		  else {
			$('.nav-sec').removeClass("stickyactive");
		  }
		});
	}

		$( ".accordionn" ).accordion({ speed: 'slow'});
	});
	
	
	
	
	$(function(){
	/* This code is executed after the DOM has been completely loaded */

	/* Changing thedefault easing effect - will affect the slideUp/slideDown methods: */
	$.easing.def = "easeOutBounce";

	/* Binding a click event handler to the links: */
	$('a.button ').click(function(e){
	
		/* Finding the drop down list that corresponds to the current section: */
		var dropDown = $(this).parent().children().next();
		
		/* Closing all other drop down sections, except the current one */
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		
		/* Preventing the default event (which would be to navigate the browser to the link's address) */
		e.preventDefault();
	})
	
});

	$(function() {
	
		 $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        slideshow: 10000,
        autoplay_slideshow: true
    });
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: 10000,
        hideflash: true
    });

		$('.intro').click(function() {
			$.scrollTo( '#intro', 800, {easing:'swing'} );
		});
		$('.installation').click(function() {
			$.scrollTo( '#installation', 800, {easing:'swing'} );
		});
		$('.activate').click(function() {
			$.scrollTo( '#activate', 800, {easing:'swing'} );
		});
		$('.dummy_data').click(function() {
			$.scrollTo( '#dummy_data', 800, {easing:'swing'} );
		});
		$('.cp_wp_general').click(function() {
			$.scrollTo( '#cp_wp_general', 800, {easing:'swing'} );
		});
		$('.cp_wp_main_set').click(function() {
			$.scrollTo( '#cp_wp_main_set', 800, {easing:'swing'} );
		});
		$('.cp_wp_typo').click(function() {
			$.scrollTo( '#cp_wp_typo', 800, {easing:'swing'} );
		});
		$('.cp_wp_sliders').click(function() {
			$.scrollTo( '#cp_wp_sliders', 800, {easing:'swing'} );
		});
		$('.cp_wp_sidebar').click(function() {
			$.scrollTo( '#cp_wp_sidebar', 800, {easing:'swing'} );
		});
		$('.cp_wp_default').click(function() {
			$.scrollTo( '#cp_wp_default', 800, {easing:'swing'} );
		});
		$('.cp_wp_social').click(function() {
			$.scrollTo( '#cp_wp_social', 800, {easing:'swing'} );
		});
		$('.cp_wp_newsletter').click(function() {
			$.scrollTo( '#cp_wp_newsletter', 800, {easing:'swing'} );
		});
		$('.cp_wp_main_slider').click(function() {
			$.scrollTo( '#cp_wp_main_slider', 800, {easing:'swing'} );
		});
		$('.cp_wp_slider').click(function() {
			$.scrollTo( '#cp_wp_slider', 800, {easing:'swing'} );
		});
		$('.cp_pb_homepage').click(function() {
			$.scrollTo( '#cp_pb_homepage', 800, {easing:'swing'} );
		});
		$('.cp_wp_home_page_settings').click(function() {
			$.scrollTo( '#cp_wp_home_page_settings', 800, {easing:'swing'} );
		});
		
		$('.cp_pb_item_content').click(function() {
			$.scrollTo( '#cp_pb_item_content', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_blog').click(function() {
			$.scrollTo( '#cp_pb_item_blog', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_news').click(function() {
			$.scrollTo( '#cp_pb_item_news', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_team').click(function() {
			$.scrollTo( '#cp_pb_item_team', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_gal').click(function() {
			$.scrollTo( '#cp_pb_item_gal', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_event').click(function() {
			$.scrollTo( '#cp_pb_item_event', 800, {easing:'swing'} );
		});
		$('.cp_wp_dummydata_upload').click(function() {
			$.scrollTo( '#cp_wp_dummydata_upload', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_portfolio').click(function() {
			$.scrollTo( '#cp_pb_item_portfolio', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_service').click(function() {
			$.scrollTo( '#cp_pb_item_service', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_slider').click(function() {
			$.scrollTo( '#cp_pb_item_slider', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_contactus').click(function() {
			$.scrollTo( '#cp_pb_item_contactus', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_reserve').click(function() {
			$.scrollTo( '#cp_pb_item_reserve', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_accordian').click(function() {
			$.scrollTo( '#cp_pb_item_accordian', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_tab').click(function() {
			$.scrollTo( '#cp_pb_item_tab', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_column').click(function() {
			$.scrollTo( '#cp_pb_item_column', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_divider').click(function() {
			$.scrollTo( '#cp_pb_item_divider', 800, {easing:'swing'} );
		});
		$('.cp_pb_item_toggle').click(function() {
			$.scrollTo( '#cp_pb_item_toggle', 800, {easing:'swing'} );
		});	
		$('.goup').click(function() {
			$.scrollTo( '#goup', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_widgets').click(function() {
			$.scrollTo( '#cp_pb_item_widgets', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_credits').click(function() {
			$.scrollTo( '#cp_pb_item_credits', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_msg').click(function() {
			$.scrollTo( '#cp_pb_item_msg', 800, {easing:'swing'} );
		});	
		$('.cp_pb_sidebar_manage').click(function() {
			$.scrollTo( '#cp_pb_sidebar_manage', 800, {easing:'swing'} );
		});	
		
		$('.cp_pb_item_career').click(function() {
			$.scrollTo( '#cp_pb_item_career', 800, {easing:'swing'} );
		});	
		
		$('.cp_pb_item_product_listing').click(function() {
			$.scrollTo( '#cp_pb_item_product_listing', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_crowd_funding').click(function() {
			$.scrollTo( '#cp_pb_item_crowd_funding', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_charity_Store').click(function() {
			$.scrollTo( '#cp_pb_item_charity_Store', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_funds_navi').click(function() {
			$.scrollTo( '#cp_pb_item_funds_navi', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_product_slider').click(function() {
			$.scrollTo( '#cp_pb_item_product_slider', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_blog_slider').click(function() {
			$.scrollTo( '#cp_pb_item_blog_slider', 800, {easing:'swing'} );
		});	
		$('.cp_pb_item_news_slider').click(function() {
			$.scrollTo( '#cp_pb_item_news_slider', 800, {easing:'swing'} );
		});	
	});
	SyntaxHighlighter.all();