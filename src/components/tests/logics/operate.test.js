import operate from '../../logic/operate';

it('Testing operate.js', () => {
  expect(operate(15, 2, '+')).toBe('17');
});
