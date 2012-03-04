/*
	jQuery Placeholder Plugin
	Author: Eymen Gunay
	Web: http://www.egunay.com/
*/
(function( $ ){
	$.fn.placeHolder = function(options) {
		var settings = {
			'text'		  : 'Placeholder',
			'placeholder' : '#999',
			'active' 	  : '#000'
		};
		return this.each(function() {        
			if ( options ) { 
				$.extend( settings, options );
			}
			// Set placeholder text			
			$(this).val(settings.text);
			// Set placeholder text color
			$(this).css("color", settings.placeholder);
			// Autofocus
			settings.autofocus == true ? $(this).focus() : '';
			// On keydown (autofocus fix)
			$(this).keydown(function(e) {
                if (settings.autofocus == true) {
					$(this).val("");
					$(this).css("color", settings.active);
					settings.autofocus = false;
				}
            });
			// On focus
			$(this).focus(function() {
				if($(this).val() == settings.text && !settings.autofocus) {
					$(this).css("color", settings.active);
					$(this).val("");	
				}
			});
			// On focusout
			$(this).focusout(function() {
				if($(this).val() == "" || $(this).val() == settings.text) {
					$(this).val(settings.text);
					$(this).css("color", settings.placeholder);
					settings.autofocus ? settings.autofocus = false : '';
				}
			});
		});				
	};
})( jQuery );