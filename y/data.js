var controllerApp = angular.module('ctrl', []);
controllerApp.service('Playlist', function() {
    this.add = function(data, value) {
        data.push(value)
        return data;
    };
    this.borrar = function(data, id) {
        data.splice(id, 1);
        return data
    };

})