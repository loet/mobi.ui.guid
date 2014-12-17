/* mobi.ui.guid - v0.0.1 - 2014-12-17 */

angular.module('mobi.ui.guid', [
        'mobi.ui.guid.services',

        // external dependencies
        'uuid4' // comes with angular-uuid4.js
    ])

;

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
