import { Header } from '../../src/index';

describe('Header', function() {
    var component = new Header();
    it('render', function() {
        expect(component.render()).toMatchSnapshot();
    });
});
