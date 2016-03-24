
(function () {
    
    function Slider (element) {
        this.el = document.querySelector( element );
        this.init ();
    }
    
    Slider.prototype = {
        init: function () {
            this.wrapper = this.el.querySelector('.slider__list_wrap');
            this.sliders = this.el.querySelectorAll('.slider__img');
            this.buttonLeft = this.el.querySelector('.slider__controls_btn_left');
            this.buttonRight = this.el.querySelector('.slider__controls_btn_right');
            this.navLinks = this.el.querySelectorAll('.slider__buttons a');
            
            this.index = 0;
            this.total = this.sliders.length;
            
            this.setup();
            this.actions();
        },
        
        slideTo: function ( slide ) {
            var currentSlide = this.sliders[slide];
            currentSlide.style.opacity = 1;

            for( var i = 0; i < this.sliders.length; i++ ) {
                var slide = this.sliders[i];
                if( slide !== currentSlide ) {
                    slide.style.opacity = 0;
                }
            }
        },
        
        highlightCurrentLink: function( link ) {
            var self = this;
            for( var i = 0; i < self.navLinks.length; ++i ) {
                var a = self.navLinks[i];
                a.className = "";
            }
            link.className = "current";
        },
        
        setup: function() {
                var self = this;
                
                for( var l = 0; l < self.sliders.length; ++l ) {
                    var elSlide = self.sliders[l];
                    var image = elSlide.getAttribute( "data-image" );
                    elSlide.style.backgroundImage = "url(" + image + ")";
                }
                
                for( var k = 0; k < self.navLinks.length; ++k ) {
                    var pagLink = self.navLinks[k];
                    pagLink.setAttribute( "data-index", k );
                }
            },
            
            actions: function() {
                
                var self = this;
            
                self.buttonRight.addEventListener( "click", function() {
                    self.index++;
                    self.buttonLeft.style.display = "block";
            
                    // if( self.index == self.total - 1 ) {
                    //     self.index = self.total - 1;
                    //     self.buttonRight.style.display = "none";
                    // }
                    
                    if( self.index == self.total ) {
                        self.index = 0;
                    }
            
                    self.slideTo( self.index );
            
                    self.highlightCurrentLink( self.navLinks[self.index] );
            
                }, false);
            
                self.buttonLeft.addEventListener( "click", function() {
                    self.index--;
                    self.buttonRight.style.display = "block";
            
                    // if( self.index == 0 ) {
                    //     self.index = 0;
                    //     self.buttonLeft.style.display = "none";
                    // }
                    
                    if( self.index < 0 ) {
                        self.index = self.total - 1;
                    }
            
                    self.slideTo( self.index );
            
                    self.highlightCurrentLink( self.navLinks[self.index] );
                
                }, false);
            
                for( var i = 0; i < self.navLinks.length; ++i ) {
                    var a = self.navLinks[i];
            
                    a.addEventListener( "click", function( e ) {
                        e.preventDefault();
                        var n = parseInt( this.getAttribute( "data-index" ), 10 );
            
                        self.index = n;	
        
                        if( self.index == 0 ) {
                            self.index = 0;
                            // self.buttonLeft.style.display = "none";
                        }
            
                        if( self.index > 0 ) {
                            self.buttonLeft.style.display = "block";
                        }
    
                        if( self.index == self.total - 1 ) {
                            self.index = self.total - 1;
                            // self.buttonRight.style.display = "none";
                        } else {
                            self.buttonRight.style.display = "block";
                        }
            
                        self.slideTo( self.index );
    
                        self.highlightCurrentLink( this );
     
                    }, false);
                }
            }
 
        };
        
        document.addEventListener( "DOMContentLoaded", function() {
    
            var slider = new Slider( "#main__slider" );
            
            
    });
        
})();