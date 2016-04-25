import { verifyNoBrowserErrors, browser } from 'angular2/src/testing/e2e_util';
import { expect } from 'angular2/testing';
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($(selector)), 20000);
}
describe('reuse example app', function () {
    afterEach(verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/can_activate/';
    it('should navigate to user 1', function () {
        browser.get(URL);
        waitForElement('home-cmp');
        element(by.css('#user-1-link')).click();
        waitForElement('control-panel-cmp');
        expect(browser.getCurrentUrl()).toMatch(/\/user-settings\/1$/);
        expect(element(by.css('control-panel-cmp')).getText()).toContain('Settings');
    });
    it('should not navigate to user 2', function () {
        browser.get(URL);
        waitForElement('home-cmp');
        element(by.css('#user-2-link')).click();
        waitForElement('home-cmp');
        expect(element(by.css('home-cmp')).getText()).toContain('Welcome Home!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuX2FjdGl2YXRlX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUxES2gwUG5zLnRtcC9hbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvY2FuX2FjdGl2YXRlL2Nhbl9hY3RpdmF0ZV9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFDLE1BQU0sK0JBQStCO09BQ3JFLEVBQUMsTUFBTSxFQUFDLE1BQU0sa0JBQWtCO0FBRXZDLHdCQUF3QixRQUFnQjtJQUN0QyxJQUFJLEVBQUUsR0FBUyxVQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDOUMsZ0VBQWdFO0lBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTVCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRWpDLElBQUksR0FBRyxHQUFHLDJDQUEyQyxDQUFDO0lBRXRELEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZlcmlmeU5vQnJvd3NlckVycm9ycywgYnJvd3Nlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvZTJlX3V0aWwnO1xuaW1wb3J0IHtleHBlY3R9IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuXG5mdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHZhciBFQyA9ICg8YW55PnByb3RyYWN0b3IpLkV4cGVjdGVkQ29uZGl0aW9ucztcbiAgLy8gV2FpdHMgZm9yIHRoZSBlbGVtZW50IHdpdGggaWQgJ2FiYycgdG8gYmUgcHJlc2VudCBvbiB0aGUgZG9tLlxuICBicm93c2VyLndhaXQoRUMucHJlc2VuY2VPZigkKHNlbGVjdG9yKSksIDIwMDAwKTtcbn1cblxuZGVzY3JpYmUoJ3JldXNlIGV4YW1wbGUgYXBwJywgZnVuY3Rpb24oKSB7XG5cbiAgYWZ0ZXJFYWNoKHZlcmlmeU5vQnJvd3NlckVycm9ycyk7XG5cbiAgdmFyIFVSTCA9ICdhbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvY2FuX2FjdGl2YXRlLyc7XG5cbiAgaXQoJ3Nob3VsZCBuYXZpZ2F0ZSB0byB1c2VyIDEnLCBmdW5jdGlvbigpIHtcbiAgICBicm93c2VyLmdldChVUkwpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdob21lLWNtcCcpO1xuXG4gICAgZWxlbWVudChieS5jc3MoJyN1c2VyLTEtbGluaycpKS5jbGljaygpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdjb250cm9sLXBhbmVsLWNtcCcpO1xuICAgIGV4cGVjdChicm93c2VyLmdldEN1cnJlbnRVcmwoKSkudG9NYXRjaCgvXFwvdXNlci1zZXR0aW5nc1xcLzEkLyk7XG5cbiAgICBleHBlY3QoZWxlbWVudChieS5jc3MoJ2NvbnRyb2wtcGFuZWwtY21wJykpLmdldFRleHQoKSkudG9Db250YWluKCdTZXR0aW5ncycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG5vdCBuYXZpZ2F0ZSB0byB1c2VyIDInLCBmdW5jdGlvbigpIHtcbiAgICBicm93c2VyLmdldChVUkwpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdob21lLWNtcCcpO1xuXG4gICAgZWxlbWVudChieS5jc3MoJyN1c2VyLTItbGluaycpKS5jbGljaygpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdob21lLWNtcCcpO1xuXG4gICAgZXhwZWN0KGVsZW1lbnQoYnkuY3NzKCdob21lLWNtcCcpKS5nZXRUZXh0KCkpLnRvQ29udGFpbignV2VsY29tZSBIb21lIScpO1xuICB9KTtcbn0pO1xuIl19