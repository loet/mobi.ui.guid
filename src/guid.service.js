angular.module('mobi.ui.guid.services', [])
    .factory('GUIDService', function (uuid4) {

        function createGuid() {
            return uuid4.generate();
        }

        return {
            createGuid: createGuid
        };
    })


;
