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
