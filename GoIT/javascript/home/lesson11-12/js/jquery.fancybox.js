    (function($) {
    
        $.fh.fancybox = function () {
            
            var Defaults = {
                overlayColor: 'black',
                fontsize: '13px',
            }
            
            var settings = $.extend(defaults, options);
            
            var $link = this;
            var $body = $('body');
            var $modal;
            var $overlay;
            
            function showModal (e) {
                var href = $link.attr('href');
                var $modal = $('<div class="fancybox-modal"><img src="' + href + '"><p style=""</div>');
                var overlay = $('div class="fancybox-overlay">');
                
                e.preventDefault();
                
                $body.append($overlay);
                $body.append($modal);
                $overlay.one('click', hideModal);
                $overlay.css ({
                    'background-color': settings.overlayColor
                });
                
            }   
            
            $link.on('click', showModal);
            
            return this;
        }
    
    })(jQuery);