'use strict';

angular.module('tweets').factory('Feedio', ['$rootScope',
	function($rootScope) {
        var socket = io.connect('http://localhost:9000');
        return {
            on: function(eventName, callback){
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function(){
                        callback.apply(socket,args);
                    });
                });
            }
        };
	}
]);