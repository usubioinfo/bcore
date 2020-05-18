// js/template.js

"use strict";
( function ( $ ) {
	!function(a,b,c){"use strict";var d=function(){function d(d){function e(){B.forEach(function(a){m(a,u)}),y||m(b.documentElement,"no-csstransforms3d"),m(A,t)}function f(){if(!a.getComputedStyle)return!1;var d,e=b.createElement("p"),f={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};b.body.insertBefore(e,null);for(var g in f)e.style[g]!==c&&(e.style[g]="translate3d(1px,1px,1px)",d=a.getComputedStyle(e).getPropertyValue(f[g]));return b.body.removeChild(e),d!==c&&d.length>0&&"none"!==d}function g(a,b,d){var e=q(a!==c?a:".offside");return e!==!1?new h(e[0],b,d):null}function h(a,b,c){var d,e;e={buttonsSelector:"",slidingSide:"left",init:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}};for(d in b)e.hasOwnProperty(d)&&(e[d]=b[d]);var f=a,g=q(e.buttonsSelector),h=e.slidingSide,i="offside",j=i+"--"+h,t="is-open",u=s+"--is-open",v=s+"--is-"+h,y=c||0,B=function(){r(z,y)===!1?D():E()},D=function(){e.beforeOpen(),x&&(x=!1,l()),k(),m(A,u),m(A,v),m(f,t),z.push(y),e.afterOpen()},E=function(){var a=r(z,y);a!==!1&&(e.beforeClose(),n(A,u),n(A,v),n(f,t),z.splice(a,1),e.afterClose())},F=function(){k()},G=function(a){a.preventDefault(),B()},H=function(){C&&J(),m(f,i),m(f,j),g.forEach(function(a){o(a,"click",G)}),e.init()},I=function(){e.beforeDestroy(),E(),g.forEach(function(a){p(a,"click",G)}),n(f,i),n(f,j),delete w[y],e.afterDestroy()},J=function(){f||console.error('Offside alert: "offside" selector could not match any element'),g.length||console.error('Offside alert: "buttonsSelector" selector could not match any element')};this.toggle=function(){B()},this.open=function(){D()},this.close=function(){E()},this.closeAll=function(){F()},this.destroy=function(){I()},H()}var i,j,k=function(a){z.length>0&&(isNaN(a)?z.forEach(function(a){w[a].close()}):w[a].close())},l=function(){m(A,v)},m=function(a,b){a.classList?a.classList.add(b):a.className=(a.className+" "+b).trim()},n=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},o=function(a,b,c){a.addEventListener(b,c)},p=function(a,b,c){a.removeEventListener(b,c)},q=function(a){return a instanceof HTMLElement?[a]:Array.isArray(a)?a:"string"==typeof a&&Array.apply(null,b.querySelectorAll(a))},r=function(a,b){var c=a.indexOf(b);return c>-1&&c};j={slidingElementsSelector:".offside-sliding-element",disableCss3dTransforms:!1,debug:!1};for(i in d)j.hasOwnProperty(i)&&(j[i]=d[i]);var s="offside-js",t=s+"--init",u="offside-sliding-element",v=s+"--interact",w=[],x=!0,y=!j.disableCss3dTransforms&&f(),z=[],A=b.body,B=q(j.slidingElementsSelector),C=j.debug;return e(),{closeOpenOffside:function(){k()},getOffsideInstance:function(a,b){var c=w.length||0,d=g(a,b,c);if(null!==d)return w[c]=d}}}var e={getInstance:function(a,b){return e.getInstance.factory||(e.getInstance.factory=d(b)),e.getInstance.factory.getOffsideInstance(a,b)}};return e}();"undefined"!=typeof module&&module.exports?module.exports=d.getInstance:a.offside=d.getInstance}(window,document);

	$( 'document' ).ready( function () {

		var $window = $( window ),
			$body = $( 'body' ),
			$preload = $( '#preload' ),
			$menu_container = $( '#site-menu' ),
			$site_menu = $( "> ul", $menu_container ),
			$site_menu_li = $( "li", $site_menu ),
			$page = $( '#content-wrapper' ),
			$partners = $( '#partners' ),
        	$grid = $( '.grid' ),
        	$sticked_bar = $( '#sticked-bar' ),
        	$loader_wrapper = $( '#loader-wrapper' ),
        	$to_the_top = $( '#to-the-top' ),
        	$single_project_images = $( '#single-project-images' ),
        	$single_project_preview = $( '.portfolio-project-images', $single_project_images ),
        	$single_project_thumbs = $( '#portfolio-project-thumbs', $single_project_images ),
        	$filter_button_group = $( '.filter-button-group' ),
			$team = $( '#team' ),
			$testimonials = $( '#testimonials' ),
			$index_1_recent_cases = $( '#index-1-recent-cases' ),
			$index_2_recent_cases = $( '#index-2-recent-cases' ),
			$index_3_recent_cases = $( '#index-3-recent-cases' ),
			$homepage_slider = $( '#homepage-slider' ),
			$header_2_search_icon = $( '#header2-search-icon' ),
			$header_2_search_form = $( '#header2-search-form' ).hide(),
			$mobile_menu_open = $( '#mobile-menu-open' ),
        	$contact_form = $( '#contact-form' ),
			images_counter = 0, API, apply_lightbox, offside_menu,
			site_wrapper = imagesLoaded(  $page, { background: '.content-section' } );

		$page.css( 'min-height', $window.height() );

		// Offside menu
		$( '#site-menu' ).find( '> ul' ).clone().attr( 'class', '' ).appendTo( '#offcanvas-menu' );
		offside_menu = offside( '#offcanvas-menu', {
			slidingElementsSelector: '#page',
			buttonsSelector: 'button[data-pushbar-target="left"]',
			debug: true,
		} );
		$( '#page, [data-pushbar-close]' ).on( 'mousedown', function() {
			offside_menu.close();
		} );

    // var myOffside = offside( '#offcanvas-menu', {

    //     slidingElementsSelector:'#page',
    //     buttonsSelector: 'button[data-pushbar-target="left"]',
    // });

    // $( '[data-pushbar-close]', '#offcanvas-menu' ).hide();
    // 		$site_menu.clone().appendTo( '#offcanvas-menu' );

        $('iframe[src*="youtube"],iframe[src*="vimeo"]').parent().fitVids();

		// Contact form validation
		$contact_form.validate( {
			debug: false,
			errorClass: "label-form-error",
			rules: {
				"comment-name": "required",
				"comment-message": "required",
				"comment-email": {
					required: true,
					email: true
				},
			},
			invalidHandler: function ( event, validator ) {
				var errors = validator.numberOfInvalids(),
					$result = $( 'strong', $( '.contacts-form-result', $contact_form ) );
				if ( errors ) {
					var message = errors == 1 ? 'You missed 1 field. It has been highlighted.' : 'You missed ' + errors + ' fields. They have been highlighted.';
					$result.html( message );
					$result.show();
				} else {
					$result.hide();
				}
			},
			submitHandler: function () {
				var $result = $( '.contacts-form-result', $contact_form ),
					$strong = $( 'strong', $result );

				$.ajax( {
					method: 'POST',
					url: './email.php',
					data: {
						name: $( 'input[name="comment-name"]', $contact_form ).val(),
						email: $( 'input[name="comment-email"]', $contact_form ).val(),
						phone: $( 'input[name="comment-phone"]', $contact_form ).val(),
						message: $( 'textarea[name="comment-message"]', $contact_form ).val(),
					}
				} )
				.always( function () {
					$result.addClass( 'show' );
				} )
				.done( function ( msg ) {
					$strong.html( '<p>' + msg + '</p>' );
				} )
				.fail( function () {
					$strong.html( '<p>Fail...</p>' );
				} );
			}
		} );

		apply_lightbox = function( event ) {
			var $context = ( event !== undefined ) ? $( event.currentTarget ) : $( 'body' );
	        $( '.lightbox-images', $context ).magnificPopup( {
	       		type: 'image'
	        } );
	        $( '.lightbox-gallery', $context ).magnificPopup( {
	        	delegate: 'a',
	        	type: 'image'
	        } );
	        $( '.lightbox-video', $context ).magnificPopup( {
	        	type: 'iframe'
	        } );
		};

		apply_lightbox();

		$testimonials.owlCarousel( {
			items: 1,
			nav: true,
			dots: false,
			loop: true,
			autoHeight: true,
			navContainer: '#testimonials-nav',
			navText: [
				'<span class="wicon-iconmonstr-angel-left-circle-thin"></span>',
				'<span class="wicon-iconmonstr-angel-right-circle-thin"></span>',
			],
		} );

		site_wrapper
			.on( 'done', function () {

				// Single project images
				$.each( $( '.post-thumbnail img', $single_project_preview ), function ( index, value ) {
					var $img = $( value ),
						hash = $img.parents( '.post-thumbnail' ).attr( 'data-hash' );
					$img
						.clone()
						.wrap( '<a href="#' + hash + '"></a>' )
						.parents( 'a' )
						.appendTo( $single_project_thumbs );
				} );
				$single_project_preview.owlCarousel( {
					items: 1,
					autoHeight: true,
					nav: false,
					mouseDrag: false,
					touchDrag: false,
					dots: false,
				} );
				$single_project_thumbs.owlCarousel( {
					nav: false,
					dots: false,
					loop: true,
					margin: 10,
				    responsive:{
				        0:{
				            items: 1
				        },
				        600:{
				            items: 2
				        },
				        900:{
				            items: 3
				        },
				        1100:{
				            items: 4
				        },
		    		},
				} );
				$( '.owl-item', $single_project_thumbs ).on( 'click', function () {
					$( '.owl-item', $single_project_thumbs ).removeClass( 'clicked' );
					$( this ).addClass( 'clicked' );
				} ).filter( ':not(.cloned)' ).first().addClass( 'clicked' );
				$( '.portfolio-project-thumbs-nav.left.owl-nav' ).on( 'click', function ( e ) {
					e.preventDefault();
					$single_project_thumbs.trigger( 'prev.owl.carousel' );
				} );
				$( '.portfolio-project-thumbs-nav.right.owl-nav' ).on( 'click', function ( e ) {
					e.preventDefault();
					$single_project_thumbs.trigger( 'next.owl.carousel' );
				} );

		        // Grid filtering
		        $.when( apply_lightbox( $grid ) ).then( function () {
					$filter_button_group.on( 'click', 'button', function() {
						var $this = $( this ),
							$buttons = $( 'button', $filter_button_group ),
							filterValue = $this.attr('data-filter');
						// alert( 'click' );
						$buttons.removeClass( 'active' );
						$this.addClass( 'active' );
						$grid.isotope({ filter: filterValue });
					});
		        	$grid.isotope( {
			        	itemSelector: '.grid-item',
			        } );
					$( 'button', $filter_button_group ).first().trigger( 'click' );
		        } );

				// Team
				$team.owlCarousel( {
					loop: true,
					mouseDrag: true,
					touchDrag: true,
					nav: true,
					dots: false,
					navContainer: '#team-nav',
					navText: [
						'<span class="wicon-iconmonstr-angel-left-circle-thin"></span>',
						'<span class="wicon-iconmonstr-angel-right-circle-thin"></span>',
					],
					onInitialized: apply_lightbox,
					onResized: apply_lightbox,
				    responsive:{
				        0:{
				            items: 1
				        },
					    600:{
				            items: 2
				        },
				        800:{
				            items: 2
				        },
				        1100:{
				            items: 3
				        }
		    		},
				} );

				// Header 2 search
				$header_2_search_icon.on( 'click', function () {
					var $this = $( this ),
						has_class = ( $this.hasClass( 'clicked' ) ) ? true : false;
					if ( has_class ) {
						$header_2_search_form.hide();
						$mobile_menu_open.fadeIn();
						$menu_container.fadeIn();
						$this
							.removeClass( 'wicon-iconmonstr-x-mark-thin clicked' )
							.addClass( 'wicon-iconmonstr-search-thin' );
					} else {
						$header_2_search_form.fadeIn().find( 'input' ).trigger( 'focus' );
						$menu_container.hide();
						$mobile_menu_open.hide();
						$this
							.removeClass( 'wicon-iconmonstr-search-thin' )
							.addClass( 'wicon-iconmonstr-x-mark-thin clicked' );
					}
				} );

				// Partners
				$partners.owlCarousel( {
					loop: true,
					mouseDrag: true,
					touchDrag: true,
					nav: false,
					dots: false,
					margin: 60,
				    responsive:{
				        0:{
				            items: 1
				        },
					    600:{
				            items: 2
				        },
				        800:{
				            items: 4
				        },
				        1100:{
				            items: 5
				        }
		    		},
				} );
				$( '#partners-prev' ).on( 'click', function ( e ) {
					e.preventDefault();
					$partners.trigger( 'prev.owl.carousel' );
				} );
				$( '#partners-next' ).on( 'click', function ( e ) {
					e.preventDefault();
					$partners.trigger( 'next.owl.carousel' );
				} );

				// Recent cases
				$index_1_recent_cases.owlCarousel( {
					items: 1,
					loop: true,
					mouseDrag: true,
					touchDrag: true,
					nav: true,
					autoHeight: true,
					navContainer: '#index-1-recent-cases-nav',
					navText: [
						'<span class="wicon-iconmonstr-angel-left-circle-thin"></span>',
						'<span class="wicon-iconmonstr-angel-right-circle-thin"></span>',
					],
					dots: false,
				} );
				$index_2_recent_cases.owlCarousel( {
					loop: true,
					mouseDrag: true,
					touchDrag: true,
					nav: true,
					autoHeight: true,
					navContainer: '#index-2-recent-cases-nav',
					navText: [
						'<span class="wicon-iconmonstr-angel-left-circle-thin"></span>',
						'<span class="wicon-iconmonstr-angel-right-circle-thin"></span>',
					],
					dots: false,
					onInitialized: apply_lightbox,
					onResized: apply_lightbox,
				    responsive:{
				        0:{
				            items: 1
				        },
					    600:{
				            items: 2
				        },
				        800:{
				            items: 2
				        },
				        1100:{
				            items: 4
				        }
		    		},
				} );
				$index_3_recent_cases.owlCarousel( {
					loop: true,
					mouseDrag: true,
					touchDrag: true,
					nav: true,
					autoHeight: true,
					navContainer: '#index-3-recent-cases-nav',
					navText: [
						'<span class="wicon-iconmonstr-angel-left-circle-thin"></span>',
						'<span class="wicon-iconmonstr-angel-right-circle-thin"></span>',
					],
					dots: false,
					onInitialized: apply_lightbox,
					onResized: apply_lightbox,
				    responsive:{
				        0:{
				            items: 1
				        },
				        800:{
				            items: 2
				        },
		    		},
				} );

				// Homepage slider
				let $items = $( '.homepage-slider-item', $homepage_slider );
				for ( let i = 0; i < $items.length; i++ ) {
					let $element = $items.eq( i ),
						$img = $( 'img.homepage-slider-item-image', $element );
					$element.css( 'background-image', 'url(' + $img.attr( 'src' ) + ')' );
					$img.hide();
				}
				$homepage_slider.owlCarousel( {
					items: 1,
					nav: false,
					dots: false,
					loop: true,
					animateOut: 'slideOutDown',
					animateIn: 'fadeIn',
				} );
				$( '#homepage-slider-left' ).on( 'click', function ( e ) {
					e.preventDefault();
					$homepage_slider.trigger( 'prev.owl.carousel' );
				} );
				$( '#homepage-slider-right' ).on( 'click', function ( e ) {
					e.preventDefault();
					$homepage_slider.trigger( 'next.owl.carousel' );
				} );

			}  )
			.on( 'progress', function ( instance, image ) {
				var result = image.isLoaded ? 'loaded' : 'broken';
				console.log( 'image is ' + result + ' for ' + image.img.src );
				images_counter++;
				// $preload_fill.width( ( ( images_counter * 100 ) / site_wrapper.images.length ) + '%');
			} )
			.on( 'always', function ( instance ) {
				$loader_wrapper.fadeOut();
				// $preload.addClass( 'remove' );
				// $body.css( 'overflow-y', 'scroll' );
				// setTimeout( function () { $preload.hide(); }, 1200 );
			} );

		// Services
		$( '#index-1-services' ).owlCarousel( {
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			nav: true,
			navContainer: '#index-1-services-nav',
			navText: [
				'<span class="wicon-iconmonstr-angel-left-circle-thin"></span>',
				'<span class="wicon-iconmonstr-angel-right-circle-thin"></span>',
			],
			dots: false,
			margin: 10,
		    responsive:{
		        0:{
		            items:1
		        },
			    600:{
		            items:2
		        },
		        800:{
		            items:3
		        },
		        1100:{
		            items:4
		        }
    		},
		} );

		for ( let i = 0; i < $site_menu_li.length; i++ ) {
			let $element = $site_menu_li.eq( i );
			if ( $( '> ul', $element ).length ) {
				$element.addClass( 'has-children' );
			}
		}
		$site_menu_li.on( 'mouseenter', function () {
			$( '> ul', $( this ) ).stop( true, true ).fadeIn();
		} ).on( 'mouseleave', function () {
			$( '> ul', $( this ) ).stop( true, true ).fadeOut();
		} );

		// Sticked header
		$sticked_bar.sticky( {
			topSpacing: 0,
			zIndex: 100,
			responsiveWidth: true,
			// getWidthFrom: 'header.site-header'
		} );

		// To the top
		$( "#to-the-top" ).on( 'click', function () {
			$( "html, body" ).animate( {
				scrollTop: 0
			}, "slow" );
			return false;
		} );

		$window.on( 'resize', function () {
			$page.css( 'min-height', $window.height() );
			$sticked_bar.sticky('update');
		} ).on( 'scroll', function () {
			var scroll_top = $( this ).scrollTop();
			if ( scroll_top > 500 ) {
				$to_the_top.stop( true, true ).fadeIn();
			}
			if ( scroll_top < 500 ) {
				$to_the_top.stop( true, true ).fadeOut();
			}
		} );

	} );

} )( jQuery );

/*
 * Google Maps init function
 */
function initMap () {
	var
		// Your geo coordinates
		USU = {lat: 41.742649, lng: -111.810394},
		// Google Maps style (see https://snazzymaps.com/ for more syles)
		styles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}],
		options = {
			// Center position for Google Maps
			center: {
				lat: 41.740884,
				lng: -111.810894
			},
			zoom: 17,
			disableDefaultUI: false,
			scrollwheel: false,
			draggable: true,
			maxZoom: 20,
			minZoom: 10,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM,
				style: google.maps.ZoomControlStyle.DEFAULT
			},
			panControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			styles: styles
		},
		map, marker,
		container = document.getElementById('map-canvas');
		if ( container !== null ) {
			map = new google.maps.Map(container, options);
			marker = new google.maps.Marker({
				position: USU,
				map: map,

			});
		}
}
