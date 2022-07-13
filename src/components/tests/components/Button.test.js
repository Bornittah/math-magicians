import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../shared/Button';

describe('Testing Button component', () => {
  const onClick = jest.fn();
  it('Testing with snapshot', () => {
    const tree = renderer.create(<Button
      className="button gray-bg flex-1"
      value="7"
      onClick={onClick}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing clickEvent', () => {
    render(<Button
      className="button gray-bg flex-1"
      value="7"
      onClick={onClick}
    />);
    fireEvent.click(screen.getByText('7'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
