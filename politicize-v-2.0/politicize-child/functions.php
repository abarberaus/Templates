<?php

	/*	
	*	CrunchPress Functions.php child theme
	*	---------------------------------------------------------------------
	* 	@version	1.0
	* 	@author		CrunchPress
	* 	@link		http://crunchpress.com
	* 	@copyright	Copyright (c) CrunchPress
	*	---------------------------------------------------------------------
	*	You can edit any function or properties of parent theme in this file
	*	Also can add extra functionalities and features.
	*	---------------------------------------------------------------------
	*/
	
	function my_admin_notice() { ?>
		<div class="updated">
			
			<p><strong><?php _e( 'Politicize Child Theme is Activated!', 'crunchpress' ); ?></strong></p>
		</div>
		<?php
	}
	add_action( 'admin_notices', 'my_admin_notice' );