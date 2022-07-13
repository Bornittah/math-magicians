import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../shared/NavBar';

describe('Testing NavBar component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(
      <Router><NavBar /></Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
