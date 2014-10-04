'use strict';

angular.module('tweets').controller('MapController', ['$scope','Feedio',
	function ($scope, Feedio) {
		$scope.tweets = [];
        Feedio.on('tweet', function (data) {
        $scope.tweets = $scope.tweets.concat(data);
        console.log(data);
});
		$scope.focusZones = [{
			title: 'Las Vegas DownTown Community',
			coordinates: [{
				latitude: 36.175476,
				longitude: -115.1438655
			}, {
				latitude: 36.170043,
				longitude: -115.129494
			}, {
				latitude: 36.159293,
				longitude: -115.136526
			}, {
				latitude: 36.158903,
				longitude: -115.154744
			}],
			keywords: []
		}, {
			title: 'SanFrancisco DownTown Community',
			coordinates: [{
				latitude: 37.795058,
				longitude: -122.393745
			}, {
				latitude: 37.789282,
				longitude: -122.388130
			}, {
				latitude: 37.784106,
				longitude: -122.394128
			}, {
				latitude: 37.789329,
				longitude: -122.401198
			}],
			keywords: []
		}, {
			title: 'Google SF Office',
			coordinates: [{
				latitude: 37.790100,
				longitude: -122.389776
			}],
			keywords: ['google san francisco', 'google sfo', 'goog sfo', '345 spear', 'warehouse 6', 'warehouse cafe']
		}, {
			title: 'Marquee',
			coordinates: [{
				latitude: 36.109462,
				longitude: -115.174227
			}],
			keywords: ['marquee las vegas', 'marquee vegas', 'marquee cosmo', 'marquee cosmopolitan', 'marquee club', '@marqueelv', 'marquee pool', 'marquee nightclub', 'marquee dj', 'marquee dayclub']
		}];

		$scope.map = {
			center: {
				latitude: 36.175476,
				longitude: -115.1438655
			},
			zoom: 8
		};
		// CREATE Map Objects from focusZone Models
		$scope.polygons = [];
		$scope.markers = [];
		for (var i = 0; i < $scope.focusZones.length; i++) {
			if ($scope.focusZones[i].coordinates.length > 1) {
				$scope.polygons.push({
					id: i,
					path: $scope.focusZones[i].coordinates,
					stroke: {
						color: '#55ACEE',
						weight: 3
					},
					editable: true,
					draggable: true,
					geodesic: true,
					visible: true,
					fill: {
						color: '#55ACEE',
						opacity: 0.4
					}
				});
			}
			$scope.markers.push({
				id: i,
				title: $scope.focusZones[i].title,
				coords: {
					latitude: $scope.focusZones[i].coordinates[0].latitude,
					longitude: $scope.focusZones[i].coordinates[0].longitude
				},
				options: {
					draggable: false
				},
				events: {}
			});
		}
	}
]);