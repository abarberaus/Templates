jQuery(function($) {
    $('.themeple_container').option_pages();	
});


(function($)
{

	$.fn.option_pages = function() 
	{
		return this.each(function()
		{
			var container = $(this);
			if(container.length != 1) return;
			
			var dummyDataButton = $('.themeple_dummy_data', this),
				hiddenDataContainer = $('#themeple_js_data', this),
				saveData = {
								container: 		$(this),
								ajaxUrl :		$('input[name=admin_ajax_url]', hiddenDataContainer).val(),
								action :		$('input[name=action]', hiddenDataContainer).val(),
								ref	   :		$('input[name=_wp_http_referer]', hiddenDataContainer).val(),								
                                nonceImport  :	$('input[name=themeple-nonce-dummy]', container).val(),
							 };

			//saveButtons.bind('click', {set: saveData}, methods.save); 		//saves the current form
			
			dummyDataButton.bind('click', {set: saveData}, methods.insert_dummy_data);

			//change_skin.bind('click', {set: saveData}, methods.change_skin);
			
			//saveButtons.removeClass('themeple_btn_inaction').addClass('themeple_btn_active');
			
			
		});
	};
	
	var	methods = {

        insert_dummy_data: function(passed){
            var button = $(this),
				me = passed.data.set,
				answer = "";
    
			$.ajax({
						type: "POST",
						url: me.ajaxUrl,
						data: 
						{
							action: 'themeple_ajax_dummy_data',
							_wpnonce: me.nonceImport,
						},
                        beforeSend: function(){
                          $('.loading', me.container).css({opacity:0, display:"block", visibility:'visible'}).animate({opacity:1});   
                        },
						error: function()
						{
							jQuery.confirm({
								'message': 'There is some error in Loading Dummy Data!',
								'buttons': {
									'OK': {
										'class': 'confirm-no',
										'action': function () {
											return false;
										}
									}
								}
							});
							//alert("error");
							
						},
						success: function(response)
						{
							if(response.match('themeple_dummy'))
							{
								response = response.replace('themeple_dummy','');
								jQuery.confirm({
									'message': 'Thank you for Waiting Dummy Content Successfully Added!',
									'buttons': {
										'Okay': {
											'class': 'confirm-no',
											'action': function () {
												return false;
											}
										}
									}
								});
							}
							else
							{
								jQuery.confirm({
									'message': 'There is some error in Loading Dummy Data!',
									'buttons': {
										'Okay': {
											'class': 'confirm-yes',
											'action': function () {
												return false;
											}
										}
									}
								});
							}
						},
                        complete: function(response){
                            $('.loading', me.container).fadeOut();
                        }
					});
					
			return false;
        },
	};
	
	
})(jQuery);

