import renderer from 'react-test-renderer';
import Quotes from '../../pages/Quotes';

describe('Testing Quote component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
