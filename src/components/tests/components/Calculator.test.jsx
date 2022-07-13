import renderer from 'react-test-renderer';
import Calculator from '../../Calculator';

describe('Testing Calculator component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
