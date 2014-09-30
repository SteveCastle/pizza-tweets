'use strict';

angular.module('tweets').controller('ChartController', ['$scope',
	function ($scope) {
		$scope.data = [{
			name: 'steve',
			score: 100
		}];
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
	}
]);