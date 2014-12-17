describe('GUIDService', function () {

    beforeEach(module('mobi.ui.guid'));

    it('should provide GUIDService', inject(function (GUIDService) {
        expect(GUIDService.createGuid()).toBeDefined();
    }));



});

